function loadQuestions(e){
    var colors = ['#4285F4', '#3F51B5', "#0F9D58", '#FF5722'];
    var category = $(this).data('category');
    Ajax.pull('https://api.parse.com/1/classes/Question' +
        '?where={"category":{"__type":"Pointer","className":"Categories","objectId":"' + 
            category.objectId + '"}}', "GET", function(data) {
        Template.load('questionHTMLTemplate', function() {
            App.loadClientModule('loadAnswers');
            for (var i = 0; i < data.results.length; i++) {
                var backgroundCol = colors[Math.floor(Math.random() * 4) + 0];
                var quData = data.results[i];
                var date = new Date(quData.createdAt);
                var el = $(".questionSection").last();
                $(el).parent().append($(el).clone(true));
                $(el).css('background-color',backgroundCol);
                $(el).find('h2').css('cursor', 'pointer').text(quData.title)
                .data('question', quData)
                .click(loadAnswers);
                $(el).find('.text').text(quData.text);
                $(el).find('.date')
                .text('Created on : ' + date.toDateString());
            }
        });
    });
}