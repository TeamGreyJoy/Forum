var Template = (function ($) {

    var TEMPLATES_FOLDER = 'templates';

    var load = function(template, callback) {
        if (typeof (callback) == 'undefined') {
            callback = function() { }
        }

        $("#content").load(TEMPLATES_FOLDER + '/' + template + '.html', callback);
    };

    return {
        load: load
    }

})(jQuery);

var Aside = (function ($) {

    var TEMPLATES_FOLDER = 'templates';

    var load = function(template, callback) {
        if (typeof (callback) == 'undefined') {
            callback = function() { }
        }

        $("aside[class=menu]").load(TEMPLATES_FOLDER + '/' + template + '.html', callback);
    };

    return {
        load: load
    }

})(jQuery);

var AsideRight = (function ($) {

    var TEMPLATES_FOLDER = 'templates';

    var load = function(template, callback) {
        if (typeof (callback) == 'undefined') {
            callback = function() { }
        }

        $("aside[class=rightAside]").load(TEMPLATES_FOLDER + '/' + template + '.html', callback);
    };

    return {
        load: load
    }

})(jQuery);

var Header = (function ($) {

    var TEMPLATES_FOLDER = 'templates';

    var load = function(template, callback) {
        if (typeof (callback) == 'undefined') {
            callback = function() { }
        }

        $("header[class=head]").load(TEMPLATES_FOLDER + '/' + template + '.html', callback);
    };

    return {
        load: load
    }

})(jQuery);

var Wrapper = (function ($) {

    var TEMPLATES_FOLDER = 'templates';

    var load = function(template, callback) {
        if (typeof (callback) == 'undefined') {
            callback = function() { }
        }

        $("#controls").load(TEMPLATES_FOLDER + '/' + template + '.html', callback);
    };
    return {
        load: load
    };
})(jQuery);

