var tagController = (function(){
    var colors = ['#4285F4', '#3F51B5', "#0F9D58", '#FF5722'];
  function getQuestionTags(questionId) {
      Ajax.pull('https://api.parse.com/1/classes/QuestionTags' +
      '?where={"question":{"__type":"Pointer","className":"Question","objectId":"' +
      questionId + '"}}', "GET", function (data) {
          for (var i in data.results) {
              Ajax.pull("https://api.parse.com/1/classes/Tags/" + data.results[i].tag.objectId, "GET", function(data) {
                  console.log(data.name);
              })
          }
      });
  }
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
          // for (var i in data.results) {
          //     Ajax.pull("https://api.parse.com/1/classes/Question/" + data.results[i].question.objectId, "GET", function(data) {
          //         console.log(data.title);
          //     });
          // }
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

  function getAllTags() {
    Ajax.pull('https://api.parse.com/1/classes/Tags', "GET", function (data) {
      sessionStorage.setItem('tags', JSON.stringify(data.results));
    });
  }

  return {
    getQuestionTags: getQuestionTags,
    getTagQuestions: getTagQuestions,
    addTagToQuestion: addTagToQuestion,
    addQuestionTagsMap: addQuestionTagsMap,
    getAllTags: getAllTags
  };
}());


(function(){
  tagController.getAllTags();
  var tags = JSON.parse(sessionStorage.tags);
  var tagNames = _.map(tags, function(tag){
    return tag.name;
  });
  $( "#tags" ).autocomplete({
    source: tagNames
  });

  $('#searchByTag').click(function(){
    if ($('#tags').val()) {
      var selectedTag  = _.filter(tags, function(tag){
        return tag.name === $('#tags').val();
      });
      if (selectedTag) {
        var selectedTagId = selectedTag[0].objectId;
        tagController.getTagQuestions(selectedTagId);
      }
    }
  });
}());

