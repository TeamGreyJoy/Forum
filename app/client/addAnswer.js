$(document).ready(function() {

    $("#addAnswer").click(function() {
        var data = {};
        data.text = $("#answerText").val();
        Ajax.call("https://api.parse.com/1/classes/Answer", "POST", JSON.stringify(data), function() {
            // load answers grid
        });
    });

});