// this script have to be added in app/scripts

function loadCategories() {
    Ajax.pull("https://api.parse.com/1/classes/Categories", "GET", function(data) {
        Aside.load("category", function() {
            console.log(data);
            var menu = $('.menu');
            var d = data;
            App.loadClientModule('loadQuestions');
            for (var i = 0; i < data.results.length; i++) {
                var categoryData = data.results[i];
                var el = $('.categoryItem').last();
                $(el).parent().append($(el).clone(true));  
                var h3 = $('<h3>').text(categoryData.title);
                $(el).append(h3);
                $(el).data('category', categoryData);
                $(el).click(loadQuestions);
            }
        });
    });
};

