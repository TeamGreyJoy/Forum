$(document).ready(function() {

    $("#renderQuestion").click(function() {
        Ajax.call("https://api.parse.com/1/classes/Questions", "GET", function(data) {
            Template.load("question", function() {
                var i = 0;

                var el = $(".question").last();

                for (var k = 0; k < data.results.length-1; k++)
                    $(el).parent().append($(el).clone());

                $(".question").each(function() {
                    $(this).prepend(data.results[i].Questions);
                    var created;

                    created = $(this).find(".createdOn").first()

                    console.log(created);
                    $(created).append(data.results[i].createdAt);
                    i++;
                })

            })
        })
    });

})