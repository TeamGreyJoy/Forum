$(document).ready(function() {

    $("#renderQuestion").click(function() {
        var module = new Modules.Answers;
        module.render("https://api.parse.com/1/classes/Answers", "GET");

        return false;
    });

})