function loadQuestions(){
    var PARSE_APP_ID = "UYWVoDe8RusQmxyZ4HZhkLxYC0sVR0lV6pM8RECE";
    var PARSE_REST_KEY = "YbUmvG1QEasOSFwt6rvJ8CYEY9T5bESlwxMSWzbY";
    jQuery.ajax({
        method: 'GET',
        headers: {
            "X-Parse-Application-Id": PARSE_APP_ID,
            "X-Parse-REST-API-Key": PARSE_REST_KEY
        },
        url: "https://api.parse.com/1/classes/Questions"
    }).success(function(data){
        console.log("loaded");
        for(var i = 0, j = 1; i < data.results.length; i++, j++){
            var objArray = data.results;
            var questionObj = objArray[i];
            var questionText = questionObj.questionText;
            var element = $('#content :nth-child(' + j + ') h2');
            element.text(questionText);
            console.log(questionText);
            $(".changeColor").clone(true).appendTo('#content');
        }
//        for(var obj in data.results){
//            console.log(data.results);
//            var questionText = obj[1].Questions;
//            var element = $('#content:nth-child(2) h2');
//            element.text(questionText);
//        }
    });
}