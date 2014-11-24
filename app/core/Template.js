var Template = (function ($) {

    var TEMPLATES_FOLDER = 'templates';

    var load = function(template, callback) {
        if (typeof (callback) == 'undefined') {
            callback = function() { }
        }

        $("body").load(TEMPLATES_FOLDER + '/' + template + '.html', callback);
    };

    return {
        load: load
    }

})(jQuery);