$(document).ready(function() {
    $("#cancellAnswerAdd").click(function(){
        $("#newAnswerDiv").hide();
        $('.openAnswerBox').show();
    });
    $("#addAnswer").click(function() {
        var data = {};
        data.text = $("#answerText").val();
        data.question = {
            __type: "Pointer",
            className: "Question",
            objectId: $("#questionId").attr('data-questionId')
        };

        if (cookie.get('sessionToken')) {
            data.user = {
                __type: "Pointer",
                className: "_User",
                objectId: cookie.get('objectId')
            }
        } else {
            data.username = $("#username").val();
        }

        Ajax.call("https://api.parse.com/1/classes/Answer", "POST", JSON.stringify(data), function(answerData) {
            var date = new Date(answerData.createdAt);
            var el = $(".answer").first();
            var backgroundCol = $(el).css('background-color');
            answerData.text = $("#answerText").val();

            renderAnswer(el, answerData, date, backgroundCol);
            $("#newAnswerDiv").hide();
            $('.openAnswerBox').show();
        });
    });

});