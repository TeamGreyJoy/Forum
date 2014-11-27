$(document).ready(function(){
    var PARSE_APP_ID = "QFDHAYIxgeNrofyDI6kABUANT5QLOU0czweGbM0E";
    var PARSE_REST_KEY = "yZ9U8A0vlHViGVwmlL85cPrADPtBy3DTnuYj2VfP";
    jQuery.ajax({
        method: 'GET',
        headers: {
            "X-Parse-Application-Id": PARSE_APP_ID,
            "X-Parse-REST-API-Key": PARSE_REST_KEY
        },
        url: "https://api.parse.com/1/classes/Questions"
    }).success(function(data){
        for(var i = 0, j = 1; i < data.results.length; i++, j++){
            var objArray = data.results;
            var questionObj = objArray[i];
            var questionTitle = questionObj.title;
            var element = $('#content :nth-child(' + j + ') h2')[0];
            var content = document.createTextNode(questionText);
            element.appendChild(content);
        }
//        for(var obj in data.results){
//            console.log(data.results);
//            var questionText = obj[1].Questions;
//            var element = $('#content:nth-child(2) h2');
//            element.text(questionText);
//        }
    });
});