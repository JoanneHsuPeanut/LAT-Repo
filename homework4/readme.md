測試截圖

<img src="https://cdn.discordapp.com/attachments/949674630690537493/1108039110356123799/IMG_1441.png"
alt= “hw-joanne” width="330" height="710" class= "center" >

index.js 程式碼
```js
"use strict";
const line = require("@line/bot-sdk"),
    express = require("express"),
    configGet = require("config");
const {
    TextAnalyticsClient,
    AzureKeyCredential,
} = require("@azure/ai-text-analytics");

// line
const configLine = {
    channelAccessToken: configGet.get("CHANNEL_ACCESS_TOKEN"),
    channelSecret: configGet.get("CHANNEL_SECRET"),
};

const client = new line.Client(configLine);

// azure語意分析
const endpoint = configGet.get("ENDPOINT");
const apiKey = configGet.get("TEXT_ANALYTICS_API_KEY");

// express app
const app = express();

const port = process.env.PORT || process.env.port || 3001;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

app.post("/callback", line.middleware(configLine), (req, res) => {
    Promise.all(req.body.events.map(handleEvent))
        .then((result) => res.json(result))
        .catch((err) => {
            console.error(err);
            res.status(500).end();
        });
});

async function MS_TextSentimentAnalysis(thisEvent) {
    console.log("[MS_TextSentimentAnalysis] in");
    const analyticsClient = new TextAnalyticsClient(endpoint, new AzureKeyCredential(apiKey));
    let documents = [];
    documents.push(thisEvent.message.text);
    const results = await analyticsClient.analyzeSentiment(documents, "zh-Hant", {includeOpinionMining: true});
    console.log("[results] ", JSON.stringify(results));


  
    // 找最大信心 ref: Memory-HuiYi
    let maxSentiment = null;
    let maxConfidence = 0;
    
    for (const result of results) {
      const sentiment = result.sentiment;
      const confidence = result.confidenceScores[sentiment];
  
      if (confidence > maxConfidence) {
        maxSentiment = sentiment;
        maxConfidence = confidence;
      }
    }
  
    // 加上信心值
    let Result = '';
    if (maxSentiment == 'positive') {
      Result = `正向，信心值${maxConfidence}`;
    } else if (maxSentiment == 'negative') {
      Result = `負向，信心值${maxConfidence}`;
    } else if (maxSentiment == 'neutral') {
      Result = `中性，信心值${maxConfidence}`;
    }
  
    // 如果有主詞加上主詞
    if (results[0].sentences[0].opinions && results[0].sentences[0].opinions.length > 0) {
      const opinion = results[0].sentences[0].opinions[0];
      if (opinion.target) {
        const targetText = opinion.target.text;
        Result = `${Result}，主詞： ${targetText}`;
      }
    }
    
    console.log(Result);
  
    const msg = {
      type: 'text',
      text: Result
    };
    
    return client.replyMessage(thisEvent.replyToken, msg);
  }

function handleEvent(event) {
    if (event.type !== "message" || event.message.type !== "text") {
        returnPromise.resolve(null);
    }
    MS_TextSentimentAnalysis(event).catch((err) => {
        console.error("Error:", err);
    });
}
```
