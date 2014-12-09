function newQuestionFormLoad(category, colors) {
    Wrapper.load('newQuestion', function() {
        $('#addNewQuestion').click(function(){
            $('#addNewQuestion').css('display', 'none');
            $('#categoryName').text(category.title);
            //$('#newQuestionForm').show();
            $('#newQuestionForm').css('display', 'block');
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
                    postData, function(results){}, "application/json", true);
                questionsLoad(category, colors);
                $('#newQuestionForm').css('display', 'none');
                //$('#newQuestionForm').hide();
                $('#addNewQuestion').css('display', 'block');
            });
        });
        $('#cancelNewQuestion').click(function(){
            //$('#newQuestionForm').hide();
            $('#newQuestionForm').css('display', 'none');
            $('#addNewQuestion').css('display', 'block');
        });
    });
}

function questionsLoad(categotyData, colors) {
    var category = categotyData;
    Ajax.pull('https://api.parse.com/1/classes/Question' +
        '?where={"category":{"__type":"Pointer","className":"Categories","objectId":"' +
        category.objectId + '"}}&order=-createdAt', "GET", function(data) {
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
                $(el).find('.date').text('Created on : ' + date.toDateString());
                $(el).find('.category').text('category : ' + category.title);
            }
            setTimeout(function(){
                var childern = $('#content').children();
                childern.last().remove();
                if(childern.length <= 1){
                    Template.load("noQuestions")
                } else {
                    childern.css('display', 'block');
                }
            },250);
        });
        newQuestionFormLoad(category, colors);
    });
}

function loadQuestions(e){
    var colors = ['#4285F4', '#3F51B5', "#0F9D58", '#FF5722'];
    var category = $(this).data('category');
    questionsLoad(category, colors);
}