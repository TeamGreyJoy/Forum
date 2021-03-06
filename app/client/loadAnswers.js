function viewQuestion(questionId) {
    Ajax.pull('https://api.parse.com/1/classes/QuestionViews/' +
    '?where={"question":{"__type":"Pointer","className":"Question","objectId":"' + questionId + '"}}', 'GET', function(data) {
        var toUpdate = {};
        toUpdate.viewed = data.results[0].viewed + 1;

        Ajax.call(
            'https://api.parse.com/1/classes/QuestionViews/' + data.results[0].objectId,
            'PUT',
            JSON.stringify(toUpdate),
            function() { }
        );
    });
}

function renderAnswer(el, answerData, date, backgroundCol) {
    $(el).parent().append($(el).clone(true));
    $(el).css('background-color',backgroundCol);

    if (answerData.user) {
        Ajax.pull("https://api.parse.com/1/users/" + answerData.user.objectId, "GET", function(data) {
            $(el).find('.username').html("<a href='#' onclick=loadProfilePage('" + data.objectId + "')>" + data.username + "</a>")
        })
    } else {
        $(el).find('.username').html("<b>" + answerData.username + "</b>" + "   (guest)")
    }
    $(el).find('.text').text(answerData.text);
    $(el).find('.date').text('Created on : ' + date.toDateString());
}

function loadAnswers() {
	var colors = ['#4285F4', '#3F51B5', "#0F9D58", '#FF5722'];
    var question = $(this).data('question');
    var backgroundCol = colors[Math.floor(Math.random() * 4) + 0];
    Ajax.pull('https://api.parse.com/1/classes/Answer' +
        '?where={"question":{"__type":"Pointer","className":"Question","objectId":"' + 
            question.objectId + '"}}&order=-createdAt', "GET", function(data) {

        viewQuestion(question.objectId);

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
            $('#newQuestion').hide();
            for (var i = 0; i < data.results.length; i++) {
                var answerData = data.results[i];
                var date = new Date(answerData.createdAt);
                var el = $(".answer").last();
                renderAnswer(el, answerData, date, backgroundCol);
            }
            $('#answers').children().last().remove();
            $(".openAnswerBox").click(function() {
                $('.openAnswerBox').hide();
                var el = $(this);                
                $(".textarea").load("templates/answers/add.html", function() {
                    App.loadClientModule("addAnswer");
                    if (!(cookie.get('sessionToken'))) {
                        $("#username").show();
                    }
                    $("#questionId").attr('data-questionId', $(el).attr('data-id'));
                });
            })
        });
    });
}