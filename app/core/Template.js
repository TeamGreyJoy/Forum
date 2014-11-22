var Template = (function ($) {

    var TEMPLATES_FOLDER = 'templates';

    var load = function(template, callback) {
        if (typeof (callback) == 'undefined') {
            callback = function() { }
        }

        window.location.hash = template.getPattern();

        $("body").load(TEMPLATES_FOLDER + '/' + template.getName() + '.html', callback);
    };

    var render = function(template, response) {
        load(template, function() {
            $("body *").each(function() {
                if ($(this).attr('data-placeholder')) {
                    var element = $(this);
                    for (var i = 0; i < response.length-1; i++) {
                        element.first().parent().append(element.first().clone())
                    }

                    var current = $("."+element.first().attr('class'));

                    var k = 0;
                    current.each(function() {
                        var objectKey = $(this).text().toString().trim().replace("{{", "");
                        objectKey = objectKey.replace("}}", "");
                        $(this).text(response[k][objectKey]);

                        k++;
                    });
                }
            });
        });
    }

    return {
        load: load,
        render: render
    }

})(jQuery);