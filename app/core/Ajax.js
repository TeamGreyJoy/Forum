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

    return {
        call: call,
    }

}(jQuery));