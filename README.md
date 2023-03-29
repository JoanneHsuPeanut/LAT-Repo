# Joanne's LAT-Repo

課名：學習分析工具實務應用  
授課教師：[蔡芸琤 老師](https://github.com/pecu/LAT)   
姓名：[許嘉恩](https://github.com/JoanneHsuPeanut)  
系級：科技系 四年級

## 目錄
[課程筆記區](https://github.com/JoanneHsuPeanut/LAT-Repo./blob/main/README.md#%E8%AA%B2%E7%A8%8B%E7%AD%86%E8%A8%98%E5%8D%80)  
[作業連結區](https://github.com/JoanneHsuPeanut/LAT-Repo./blob/main/README.md#%E4%BD%9C%E6%A5%AD%E9%80%A3%E7%B5%90%E5%8D%80)  
[專題連結區](https://github.com/JoanneHsuPeanut/LAT-Repo./blob/main/README.md#%E5%B0%88%E9%A1%8C%E9%80%A3%E7%B5%90%E5%8D%80)  

## 每週 Key Takeaways
### W2
1. 願景→指標→策略
1. **指標**必須有和資料綁定，否則無法分析
1. 如何將問題轉換為指標？如何收集該指標的資料 → 公開資料庫 e.g. [政府資料開放平臺](https://data.gov.tw/)
### W3
1. 善用ChatGPT，成為ChatGPT的詠唱師
1. value_counts: 同資料的有幾筆
1. 第一週作業回顧
    
    ```python
    # 一次串接很多表 (https://github.com/HsinYu-W/LAT/blob/main/week 2/FirstTest.ipynb)
    frames = [type1, type2, type3, type4]
    result = pd.concat(frames)
    ```
    港澳人數：[KennethOng02](https://github.com/KennethOng02/LAT-Repo/blob/main/main.ipynb)  
    特教：[41009035e-David](https://github.com/41009035e-David/LAT/blob/main/Untitled.ipynb)  
    特教經費：[emeraldChung](https://github.com/emeraldChung/LAT/blob/main/test%20week%202.ipynb)  
    各級學校每生享有教育經費：[brian098091](https://github.com/brian098091/LAT-Repo/blob/main/FirstTest.ipynb)  
    外籍生人數：[yujikomatsuzaki](https://github.com/yujikomatsuzaki/LAT-Repo/blob/main/week2/hello.ipynb)  
    衛教 各校視力顯著：[Ya-Cing](https://github.com/Ya-Cing/LAT-Repo/blob/main/2023%2003%2004(week2%20work)/0304%20Test-2.ipynb)  
1. A1 ([demo](https://www.kaggle.com/code/kashnitsky/a1-demo-pandas-and-uci-adult-dataset)). Pandas and UCI adult dataset (
[資料夾](https://github.com/JoanneHsuPeanut/LAT-Repo/tree/main/W03/UCI)
)  
### W4
1. fine-tune 訓練是使用環境變數要key
    key 放在環境變數（跟作業系統），在cmd寫入環境變數，或在jpnb打
    下載對話紀錄，訓練對方的口氣：ＯＯ
    * 每4096個token就要resrt → 讓機器把資料分段繳交
    * 每1000為400個中文字 → 一次1600字
- HW1 作業回顧
    
    補習班資料與統計語法筆記：[pupupeter](https://github.com/pupupeter/Lat-repo/blob/main/20230315%E7%9A%84%E4%BD%9C%E6%A5%AD.ipynb)
    
    學校設備與語法筆記：[nick399100](https://github.com/nick399100/LAT/blob/main/week3/task1.ipynb)
    
    空氣污染指標：[ToshaETang](https://github.com/ToshaETang/LAT/blob/main/WK3_0308/0308.ipynb)
    
    受教育人口分析含結論，加總、百分比與排名計算等等：[Shawn0604](https://github.com/Shawn0604/LAT/blob/main/%E7%AC%AC%E4%B8%80%E5%91%A8%E4%BD%9C%E6%A5%AD/homework1.ipynb)
    
    ```python
    #5
    #用受教育人口數/該地區人口總數，並以rate名稱進行存取
    data['rate']=data['edu_age_15up_total']/data['Population']
    #將其轉入成百分比
    data["rate_percentage"] = data["rate"].apply(lambda x: format(x,".2%"))
    data
    ```
    
    高級中等學校分析，含資料前置處理（切割、代碼替換）與公私立詳細議題討論：[AndersonTsaiTW](https://github.com/AndersonTsaiTW/LAT_Repo/blob/main/HW1/HW1.ipynb)
    
    兩張表相減
    
    ```python
    diff_cate_109to103 = base109_cate.sub(base103_cate)
    diff_cate_109to103
    ```
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/efdfea2b-a575-4691-bb5e-f25a70d97966/Untitled.png)
    
    高中職行動學習補助學校，query：[cpeggy](https://github.com/cpeggy/LAT/blob/main/Hw1/hw1_0308.ipynb)
    ```python
    h107_108HC = h107_108H.query('地區 == "中部"')
    h107_108HC
    ```  
### W5
1. 視覺化資料：最少的程式最少的圖片，回答更多問題
2. 類別型資料和數值型資料的判別，決定xy軸、color group和圖表類型
3. 基本敘述統計→ box，加上小提琴圖：看出是眾數在平均還是分部在極端值
    e.g. 我和郭台銘平均年薪破百萬 我們都超有錢

## 作業連結區
* W2 - 使用pandas讀取csv，合併相同項目與串接多個dataframe (
[資料夾](https://github.com/JoanneHsuPeanut/LAT-Repo/tree/main/W02) |
[ipynb](https://github.com/JoanneHsuPeanut/LAT-Repo/blob/main/W02/W2-test.ipynb)
)  
* W3 - HW1 十個問題 (
[資料夾](https://github.com/JoanneHsuPeanut/LAT-Repo/tree/main/W03-W05) |
[ipynb](https://github.com/JoanneHsuPeanut/LAT-Repo/blob/main/W03-W05/W3-hw1.ipynb)
)  
* W5 - HW2 圖解三個問題 (
[資料夾](https://github.com/JoanneHsuPeanut/LAT-Repo/tree/main/W03-W05) |
[ipynb](https://github.com/JoanneHsuPeanut/LAT-Repo/blob/main/W03-W05/W5-hw2.ipynb)
)  
## 專題連結區 


---
##### Markdown 語法說明：https://markdown.tw/
