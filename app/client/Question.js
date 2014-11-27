$(document).ready(function() {

    $("#openAnswerBox").click(function() {
        Template.load("answers/add", function() {
            App.loadClientModule("addAnswer");
        });

    });

});