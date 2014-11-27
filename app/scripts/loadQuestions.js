$(document).ready(function() {
    $("#renderQuestions").click(function(e) {
        Ajax.pull("https://api.parse.com/1/classes/Question", "GET", function(data) {
            Template.load("question", function() {
                for (var i = 0; i < data.results.length; i++) {
                    var quData = data.results[i];
                    var el = $(".question").last();
                    $(el).parent().append($(el).clone());                       
                    $(el).children('.title').text(quData.title);
                    $(el).children('.text').text(quData.text);
                    var linkElement = $('<a href="#"/>').text(quData.user);
                    $(linkElement).data('question', quData);
                    $(el).children('h2').append(linkElement);
                    $(el).children('.createdOn').append('<time datetime="'+quData.createdAt+'">' +
                                                                    quData.createdAt+'</time>');                
                }
            });
        });
    });
});
