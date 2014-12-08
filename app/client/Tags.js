function getQuestionTags(questionId) {
    Ajax.pull('https://api.parse.com/1/classes/QuestionTags' +
    '?where={"question":{"__type":"Pointer","className":"Question","objectId":"' +
    questionId + '"}}', "GET", function (data) {
        for (var i in data.results) {
            Ajax.pull("https://api.parse.com/1/classes/Tags/" + data.results[i].tag.objectId, "GET", function(data) {

            })
        }
    });
}

function getTagQuestions(tagId) {
    Ajax.pull('https://api.parse.com/1/classes/QuestionTags' +
    '?where={"tag":{"__type":"Pointer","className":"Tags","objectId":"' +
    tagId + '"}}', "GET", function (data) {
        for (var i in data.results) {
            Ajax.pull("https://api.parse.com/1/classes/Question/" + data.results[i].question.objectId, "GET", function(data) {
                console.log(data.title);
            })
        }
    });
}

function addTagToQuestion(questionId, tagName) {
    Ajax.pull('https://api.parse.com/1/classes/Tags' +
    '?where={"name":"' + tagName + '"}', "GET", function (data) {
       if (data.results.length < 1) {
           var toSave = {name: tagName};
           Ajax.call(
               "https://api.parse.com/1/classes/Tags",
               "POST",
               JSON.stringify(toSave),
               function(result) {
                   addQuestionTagsMap(questionId, result.objectId);
               }
           )
       } else {
           addQuestionTagsMap(questionId, data.results[0].objectId)
       }
    });
}

function addQuestionTagsMap(questionId, tagId) {
    var data = {
        question: {
            __type: "Pointer",
            className: "Question",
            objectId: questionId
        },
        tag: {
            __type: "Pointer",
            className: "Tags",
            objectId: tagId
        }
    };

    Ajax.call(
        "https://api.parse.com/1/classes/QuestionTags",
        "POST",
        JSON.stringify(data),
        function(res) { }
    )
}