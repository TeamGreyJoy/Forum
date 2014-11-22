var Ajax = (function ($) {

    var PARSE_APP_ID = "UYWVoDe8RusQmxyZ4HZhkLxYC0sVR0lV6pM8RECE";
    var PARSE_REST_KEY = "YbUmvG1QEasOSFwt6rvJ8CYEY9T5bESlwxMSWzbY";

    var call = function(url, method, callback) {
        $.ajax({
            method: method,
            headers: {
                "X-Parse-Application-Id": PARSE_APP_ID,
                "X-Parse-REST-API-Key": PARSE_REST_KEY
            },
            url: url
        }).success(callback);
    }

    var get = function(url, callback) {
        call(url, 'GET', callback);
    }

    var post = function(url, callback) {
        call(url, 'POST', callback);
    }

    var appendGet = function(url, template) {
        get(url, function(data) {Template.render(template, data.results)});
    }

    var appendPost = function(url, template) {
        post(url, function(data) {Template.render(template, data.results)});
    }

    return {
        call: call,
        get: get,
        post: post,
        appendGet: appendGet,
        appendPost: appendPost
    }

}(jQuery));