//$(document).ready(function() {
//    var colors = ['#4285F4', '#3F51B5', "#0F9D58", '#FF5722'];
//
//    $("#renderQuestions").click(function(e) {
//        Ajax.pull("https://api.parse.com/1/classes/Question", "GET", function(data) {
//            Template.load("questionHTMLTemplate", function() {
//                for (var i = 0; i < data.results.length; i++) {
//                    var quData = data.results[i];
//                    var el = $(".changeColor").last();
//                    $(el).parent().append($(el).clone(true));
//                    $(el).css('background-color', colors[Math.floor(Math.random() * 4) + 0]);
//                    $(el).find('h2').text(quData.title);
//                    $(el).find('p').text(quData.text);
//                    var linkElement = $('<a href="#"/>').text(quData.user);
//                    $(linkElement).data('questionHTMLTemplate', quData);
//                    $(el).children('h2').append(linkElement);
//                    $(el).children('.createdOn').append('<time datetime="'+quData.createdAt+'">' +
//                                                                    quData.createdAt+'</time>');
//                }
//            });
//        });
//    });
//});


function loadQuestions(){
    var colors = ['#4285F4', '#3F51B5', "#0F9D58", '#FF5722'];

    Ajax.pull("https://api.parse.com/1/classes/Question", "GET", function(data) {
        Template.load("questionHTMLTemplate", function() {
            for (var i = 0; i < data.results.length; i++) {
                var quData = data.results[i];
                var el = $(".changeColor").last();
                $(el).parent().append($(el).clone(true));
                $(el).css('background-color', colors[Math.floor(Math.random() * 4) + 0]);
                $(el).find('h2').text(quData.title);
                $(el).find('p').text(quData.text);
                var linkElement = $('<a href="#"/>').text(quData.user);
                $(linkElement).data('questionHTMLTemplate', quData);
                $(el).children('h2').append(linkElement);
                $(el).children('.createdOn').append('<time datetime="'+quData.createdAt+'">' +
                    quData.createdAt+'</time>');
            }
        });
    });
}