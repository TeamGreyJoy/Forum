function newQuestionFormLoad(category, colors) {
     Wrapper.load('newQuestion', function() {
        $('#addNewQuestion').click(function(){
            $('#addNewQuestion').hide(); 
            $('#categoryName').text(category.title);
            $('#newQuestionForm').show();
            $('#submitNewQuestion').click(function(){
                var categoryId = category.objectId;
                var userId = cookie.get('userId');
                var questionTitle = $('#newQuestionTitle').val();
                var questionText = $('#newQuestionText').val();
                var cleanedText = questionText.replace(/(\r\n|\n|\r)/gm,"\\r");
                var postData = '{'+
                    '"title": "'+questionTitle+'",'+
                    '"text": "'+cleanedText+'",'+
                    '"classType": "question",'+
                    '"autor": {'+
                        '"__type":"Pointer",'+
                        '"className":"_User",'+
                        '"objectId":"'+userId+
                    '"},'+
                    '"category": {'+
                        '"__type":"Pointer",'+
                        '"className":"Categories",'+
                        '"objectId":"'+categoryId+
                    '"},'+
                    '"ACL":{"'+
                        userId+'":{'+
                            '"write":true,'+
                            '"read":true'+
                        '},'+
                          '"*": {'+
                            '"read":true'+
                            '}'+
                    '}'+
                '}';
                Ajax.call('https://api.parse.com/1/classes/Question',
                 'POST',
                  postData, function(results){
                        var data = {
                            question: {
                                __type: "Pointer",
                                className: "Question",
                                objectId: results.objectId
                            },
                            viewed: 0
                        };

                        Ajax.call(
                            'https://api.parse.com/1/classes/QuestionViews',
                            'POST',
                            JSON.stringify(data),
                            function(res){}, 'application/json', true
                        )

                    }, "application/json", true);
                questionsLoad(category, colors);
                $('#newQuestionForm').hide();
                $('#addNewQuestion').show();
            });              
        });
        $('#cancelNewQuestion').click(function(){
            $('#newQuestionForm').hide();
            $('#addNewQuestion').show();
        });
    });
}

function questionsLoad(categotyData, colors) {
    console.log("secondary Load");
    var category = categotyData;
     Ajax.pull('https://api.parse.com/1/classes/Question' +
        '?where={"category":{"__type":"Pointer","className":"Categories","objectId":"' +
            category.objectId + '"}}', "GET", function(data) {
        Template.load('questionHTMLTemplate', function() {
            App.loadClientModule('loadAnswers');
            for (var i = 0; i < data.results.length; i++) {
                var backgroundCol = colors[Math.floor(Math.random() * 4) + 0];
                var quData = data.results[i];
                Ajax.pull(
                    'https://api.parse.com/1/classes/QuestionViews' +
                    '?where={"question":{"__type":"Pointer","className":"Question","objectId":"' + quData.objectId + '"}}',
                    'GET',
                    function (views) {
                        Ajax.pull(
                            'https://api.parse.com/1/classes/Question/' + views.results[0].question.objectId,
                            'GET',
                            function(quData) {
                                var el = $(".questionSection").last();
                                var date = new Date(quData.createdAt);
                                $(el).parent().append($(el).clone(true));
                                $(el).css('background-color',backgroundCol);
                                $(el).find('h2').css('cursor', 'pointer').text(quData.title)
                                    .data('question', quData)
                                    .click(loadAnswers);
                                $(el).find('.text').text(quData.text);
                                $(el).find('.date').text('Created on : ' + date.toDateString());
                                $(el).find('.category').text('category : ' + category.title);
                                $(el).find('.views').text('views: ' + views.results[0].viewed);
                            }
                        )

                    }
                )
            }
            var childern = $('#content').children();
            if(childern.length <= 1){
                childern.last().remove();
                Template.load('noQuestions');

            } else{
                childern.last().remove();
            }
        });   
        newQuestionFormLoad(category, colors);    
    });
}

function loadQuestions(e){
    var colors = ['#4285F4', '#3F51B5', "#0F9D58", '#FF5722'];
    var category = $(this).data('category');
    console.log('Main Load');
    questionsLoad(category, colors);   
}