var PARSE_APP_ID = "QFDHAYIxgeNrofyDI6kABUANT5QLOU0czweGbM0E";
var PARSE_REST_API_KEY = "yZ9U8A0vlHViGVwmlL85cPrADPtBy3DTnuYj2VfP";

$(document).ready(function($){
    var category = $('.label-aside');
    $(category).click(categoryClicked);

    function categoryClicked() {
        var category = $(this).text;
        console.log(category);
        $("#answers").hide();
        $("#answers h2").text(question.questionText);
        var questionId = question.objectId;
        $.ajax({
            method: "GET",
            headers: {
                "X-Parse-Application-Id": PARSE_APP_ID,
                "X-Parse-REST-API-Key": PARSE_REST_API_KEY
            },
            url: 'https://api.parse.com/1/classes/Answer?where={"question":{"__type":"Pointer","className":"Question","objectId":"' + questionId + '"}}',
            success: answersLoaded,
            error: ajaxError
        });
    }

})(jQuery)

//var PARSE_APP_ID = "QFDHAYIxgeNrofyDI6kABUANT5QLOU0czweGbM0E";
//var PARSE_REST_API_KEY = "yZ9U8A0vlHViGVwmlL85cPrADPtBy3DTnuYj2VfP";
//$(document).ready(function($){
//
//    loadClass('Question', 'GET');
//// loadClass('Answer', 'Question', question.objectId);
//function loadClass(className, method, relatedTo, id, pointer) {
//    var filter = id ? '?where={"'+pointer+'":{"__type":"Pointer","className":"'+relatedTo+'","objectId":"'+id+'"}}': '';
//    $.ajax({
//        method: method,
//        headers: {
//            "X-Parse-Application-Id": PARSE_APP_ID,
//            "X-Parse-REST-API-Key": PARSE_REST_API_KEY
//        },
//        url: " https://api.parse.com/1/classes/" + className + filter,
//        success: function(data) {
//            var resultClass = data.results[0].classType;
//            switch(resultClass){
//                case 'question':
//                    questionsLoaded(data);
//                    break;
//                case 'answer':
//                    answersLoaded(data);
//                    break;
//                case 'categories':
//                    categoriesLoaded(data);
//                    break;
//            }
//        },
//        error: ajaxError
//    });
//}
//
//function categoriesLoaded(data) {
//    for (var i = 0; i < data.results.length; i++) {
//        var categories = data.results[i];
//        var liElement = $('<li>');
//        var linkElement = $('<a href="#"/>').text(categories.title);
//        $(linkElement).data('categories', categories);
//        liElement.append(linkElement);
//        $('#categoriesUl').append(liElement);
//        $(linkElement).click(showSelectedQuestion);
//    }
//    $('#categories').click(addToClass);
//    //$('#loginButton').click(logIn);
//}
//
//
//function showSelectedQuestion() {
//    var question = $(this).data('question');
//    $('#fullQuestionDiv h2').text(question.title + ' by ' + question.user);
//    $('#fullQuestionDiv p').text(question.text);
//    $('#answersUl').empty();
//    $('#answersUl').data('question', question);
//    loadClass('Answer', 'GET', 'Question', question.objectId, 'question');
//}
//
//function answersLoaded(data) {
//    for (var i = 0; i < data.results.length; i++) {
//        var answer = data.results[i];
//        var liElement = $('<li>');
//        var pElement = $('<p>');
//        $(pElement).text(data.results[i].text);
//        $(pElement).data('answer', answer);
//        liElement.append(pElement);
//        $('#answersUl').append(liElement);
//    }
//}
//
//function questionsLoaded(data) {
//    for (var i = 0; i < data.results.length; i++) {
//        var question = data.results[i];
//        var liElement = $('<li>');
//        var linkElement = $('<a href="#"/>').text(question.title);
//        $(linkElement).data('question', question);
//        liElement.append(linkElement);
//        $('#questionsUl').append(liElement);
//        $(linkElement).click(showSelectedQuestion);
//    }
//    $('#newQuestionSubmit').click(addToClass);
//    $('#loginButton').click(logIn);
//}
//
//}(jQuery));

// Parse.initialize("QFDHAYIxgeNrofyDI6kABUANT5QLOU0czweGbM0E",
// "8kaBIPhgOtWV5S2NeUafnwdQhgBdBDWAncMaJmSk");

// var Question = Parse.Object.extend("Question");
//   var question = new Question();
//     question.save({title: "The New Question"}, {
//     success: function(object) {
//       $(".success").show();
//     },
//     error: function(model, error) {
//       $(".error").show();
//     }
// });

//function logIn() {
//    $.ajax({
//        headers: {
//            "X-Parse-Application-Id": PARSE_APP_ID,
//            "X-Parse-REST-API-Key": PARSE_REST_API_KEY
//        },
//        type: "GET",
//        contentType: "application/json; charset=utf-8",
//        url: 'https://api.parse.com/1/login',
//        data: {
//            username: encodeURIComponent("myGuy"),
//            password: encodeURIComponent('123456')
//        },
//        dataType: "json",
//        success: function() {alert("Login Success");},
//        error: function() {
//            alert("Login Error");
//        }
//    });
//}
//
//function addToClass() {
//
//    $.ajax({
//        headers: {
//            "X-Parse-Application-Id": PARSE_APP_ID,
//            "X-Parse-REST-API-Key": PARSE_REST_API_KEY
//        },
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: 'https://api.parse.com/1/classes/Question',
//        data: '{"title":"The New Question","text":"The New Text","classType":"question","user":"myUser"}',
//        dataType: "json",
//        success: function() {alert("Success");},
//        error: function() {
//            alert("Error");
//        }
//    });
//}
//

//
//function successMessage(data) {
//    var a = data;
//    console.log(a);
//}
