$(document).ready(function() {

    $("#renderQuestion").click(function() {
        var question = "My first question";
        var answers = ["I answered first", "second answer", "Answer THREE"];

        Template.load(new Modules.Question, function() {
            $("#question").text(question);

            for (var i in answers) {
                var answerElement = $(".answer").last();
                $(answerElement).parent().append($(answerElement).clone());
                $(answerElement).text(answers[i]);
            }

            $("#navigateToCategory").click(function() {
                Template.load(new Modules.Category);

                return false;
            })
        });

        return false;
    });

});