var Template = (function ($) {

    var TEMPLATES_FOLDER = 'templates';

    var load = function(template, callback) {
        if (typeof (callback) == 'undefined') {
            callback = function() { }
        }

        window.location.hash = template.getPattern();

        $("body").load(TEMPLATES_FOLDER + '/' + template.getName() + '.html', callback);
    };

    return {
        load: load
    }

})(jQuery);