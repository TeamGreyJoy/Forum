var App = (function($) {
    var SCRIPTS_FOLDER = 'app';
    var CORE_MODULES_FOLDER = 'core';
    var CLIENT_MODULES_FOLDER = 'client'

    var require = function(module, folder) {
        $("head").append('<script src="' + SCRIPTS_FOLDER + '/' + folder + '/' + module + '.js' + '"></script>')
    }

    var loadCoreModule = function(module) {
        require(module, CORE_MODULES_FOLDER);
    }

    var loadClientModule = function(module) {
        require(module, CLIENT_MODULES_FOLDER);
    }

    return {
        require: require,
        loadCoreModule: loadCoreModule,
        loadClientModule: loadClientModule
    }
})(jQuery);

$(document).ready(function() {

    var __coreModules = [
        "Template",
        "Ajax"
    ];

    var __clientModules = [
        "Question",
    ];

    for (var module in __coreModules) {
        App.loadCoreModule(__coreModules[module]);
    }

    for (var module in __clientModules) {
        App.loadClientModule(__clientModules[module]);
    }
});


