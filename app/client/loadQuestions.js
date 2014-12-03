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
        Wrapper.load('newQuestion', function() {
            $('#addNewQuestion').click(function(){
                $('#addNewQuestion').hide();                
                $('#newQuestionForm').show();
                $('#submitNewQuestion').click(function(){
                    var categoryId = category.objectId;
                    var userId = cookie.get('userId');
                    var questionTitle = $('#newQuestionTitle').val();
                    var questionText = $('#newQuestionText').val();
                    var postData = {
                        'title': questionTitle,
                        'text': questionText,
                        'classType': 'question',
                        'autor': {
                            '__type':'Pointer',
                            'className':'_User',
                            'objectId':userId
                        },
                        'category': {
                            '__type':'Pointer',
                            'className':'Categories',
                            'objectId':categoryId
                        },
                        'ACL':{
                            userId:{
                                'write':true,
                                'read':true
                            },
                              '*': {
                                'read': true
                                }
                        }
                    };
                    Ajax.pushRegistred('https://api.parse.com/1/classes/Question',
                     'POST',
                      JSON.stringify(postData));
                    $('#newQuestionForm').hide();
                    $('#addNewQuestion').show();
                });              
            });
            $('#cancelNewQuestion').click(function(){
                $('#newQuestionForm').hide();
                $('#addNewQuestion').show();
            });
        });
    });
}