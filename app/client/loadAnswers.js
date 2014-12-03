function renderAnswer(el, answerData, date, backgroundCol) {
    $(el).parent().append($(el).clone(true));
    $(el).css('background-color',backgroundCol);
    $(el).find('.text').text(answerData.text);
    $(el).find('.date').text('Created on : ' + date.toDateString());
}

function loadAnswers() {
	var colors = ['#4285F4', '#3F51B5', "#0F9D58", '#FF5722'];
    var question = $(this).data('question');
    var backgroundCol = colors[Math.floor(Math.random() * 4) + 0];
    Ajax.pull('https://api.parse.com/1/classes/Answer' +
        '?where={"question":{"__type":"Pointer","className":"Question","objectId":"' + 
            question.objectId + '"}}', "GET", function(data) {    	
        Template.load("answer", function() {
            var quData = question;
            var date = new Date(quData.createdAt);
            var el = $(".questionSection");
            $(el).css('background-color',backgroundCol);
            $(el).find('h2').text(quData.title).data('question', quData);
            $(el).find('.text').text(quData.text);
            $(el).find('.date')
            .text('Created on : ' + date.toDateString());

            $(".openAnswerBox").attr('data-id', quData.objectId);
            $('#newQuestion').hide()
            for (var i = 0; i < data.results.length; i++) {
                var answerData = data.results[i];
                var date = new Date(answerData.createdAt);
                var el = $(".answer").last();
                renderAnswer(el, answerData, date, backgroundCol);
            }

            $(".openAnswerBox").click(function() {
                var el = $(this);
                $(".textarea").load("templates/answers/add.html", function() {
                    App.loadClientModule("addAnswer");
                    $("#questionId").attr('data-questionId', $(el).attr('data-id'));
                });
            })
        });
    });
}