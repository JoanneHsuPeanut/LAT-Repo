$(document).ready(function(){
    //do something 按了按鈕就跑下面的functiion
    $("#thisButton").click(function(){
        processImage();
    });
    $("#inputImageFile").change(function(eeee){
        processImageFile(eeee.target.files[0]);
    });
});

function processImage() {
    
    //確認區域與所選擇的相同或使用客製化端點網址
    var url = "https://eastus.api.cognitive.microsoft.com/";
    var uriBase = url + "vision/v2.1/describe"; //選圖片功能，分析打analyze，描述打describe
    
    //參考文件進行設定 https://westus.dev.cognitive.microsoft.com/docs/services/5cd27ec07268f6c679a3e641/operations/56f91f2e778daf14a499f21b
    var params = {
        // "visualFeatures": "Adult,Categories,Description,Tags,Brands,Faces,Objects",
        // "details": "Landmarks",
        "maxCandidates": "4",
        "language": "en",
    };
    //顯示分析的圖片
    var sourceImageUrl = document.getElementById("inputImage").value;
    document.querySelector("#sourceImage").src = sourceImageUrl;
    //送出分析
    $.ajax({
        url: uriBase + "?" + $.param(params),
        // Request header
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },
        type: "POST",
        // Request body 給微軟的一大包
        data: '{"url": ' + '"' + sourceImageUrl + '"}',
    })
    .done(function(data) {
        //顯示JSON內容
        $("#responseTextArea").val(JSON.stringify(data, null, 2));
        $("#picDescription").empty();
        //把描述丟給 在圖片下的picDescription
        for  (var x=0; x < data.description.captions.length; x++){
            $("#picDescription").append(data.description.captions[x].text+"<br>");
        }
        //$("#picDescription").append(data.description.captions[0].text+"<br>");
        //$("#picDescription").append("這裡有"+ data.faces.length +"個人");
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        //丟出錯誤訊息
        var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
        errorString += (jqXHR.responseText === "") ? "" : jQuery.parseJSON(jqXHR.responseText).message;
        alert(errorString);
    });
};

function processImageFile(imageObject) {
    //確認區域與所選擇的相同或使用客製化端點網址
    var url = "https://eastus.api.cognitive.microsoft.com/";
    var uriBase = url + "vision/v2.1/describe"; //選圖片功能，分析打analyze，描述打describe
    
    //參考文件進行設定 https://westus.dev.cognitive.microsoft.com/docs/services/5cd27ec07268f6c679a3e641/operations/56f91f2e778daf14a499f21b
    var params = {
        // "visualFeatures": "Adult,Categories,Description,Tags,Brands,Faces,Objects",
        // "details": "Landmarks",
        "maxCandidates": "4",
        "language": "en",
    };
    //顯示分析的圖片
    //var sourceImageUrl = document.getElementById("inputImage").value;
    var sourceImageUrl = URL.createObjectURL(imageObject)
    document.querySelector("#sourceImage").src = sourceImageUrl;

    //送出分析
    $.ajax({
        url: uriBase + "?" + $.param(params),
        // Request header
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/octet-stream");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },
        type: "POST",
        processData:false,
        contentType:false,
        // Request body 給微軟的一大包
        data: imageObject
    })
    .done(function(data) {
        //顯示JSON內容
        $("#responseTextArea").val(JSON.stringify(data, null, 2));
        $("#picDescription").empty();
        //把描述丟給 在圖片下的picDescription
        for  (var x=0; x < data.description.captions.length; x++){
            $("#picDescription").append(data.description.captions[x].text+"<br>");
        }
        //$("#picDescription").append(data.description.captions[0].text+"<br>");
        //$("#picDescription").append("這裡有"+ data.faces.length +"個人");
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        //丟出錯誤訊息
        var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
        errorString += (jqXHR.responseText === "") ? "" : jQuery.parseJSON(jqXHR.responseText).message;
        alert(errorString);
    });
};