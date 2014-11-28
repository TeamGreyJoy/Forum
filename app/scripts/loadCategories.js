// this script have to be added in app/scripts
$(document).ready(function() {
    (function(e) {
        Ajax.pull("https://api.parse.com/1/classes/Categories", "GET", function(data) {
            Template.load("category", function() {
                var meny = $('.menu');
                for (var i = 0; i < data.results.length; i++) {
                    var categoryData = data.results[i];
                    var el = $('.label-aside').last();
                    $(el).parent().append($(el).clone(true)); 
                    var h = $('<h4>');                      
                    $(h).text(categoryData.title);
                    $(el).data('category', categoryData);
                    $(el).append(h);
                    $(el).click(loadQuestions);
                    $(meny).append(el);
                }
            });
        });
    }());
});

 