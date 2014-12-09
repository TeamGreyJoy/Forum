
var Ajax = (function ($) {

    var PARSE_APP_ID = "QFDHAYIxgeNrofyDI6kABUANT5QLOU0czweGbM0E";
    var PARSE_REST_KEY = "yZ9U8A0vlHViGVwmlL85cPrADPtBy3DTnuYj2VfP";

    var call = function(url, method, data, callback, contentType, sessionToken, errorCallback) {
        if(!contentType){
            contentType = "application/json";
        }

        if(sessionToken){
            var token = cookie.get("sessionToken");
        }
        $.ajax({
            method: method,
            headers: {
                "X-Parse-Application-Id": PARSE_APP_ID,
                "X-Parse-REST-API-Key": PARSE_REST_KEY,
                "X-Parse-Session-Token": token,
                "Content-Type": contentType
            },
            data: data,
            url: url
        }).done(function(results){
            callback(results);
        }).fail(function(error){
            errorCallback(error)
        });
    }

   var pushRegistred = function(url, method, data) {

       var token = cookie.get("sessionToken");
       $.ajax({
           type: method,
           headers: {
               "X-Parse-Application-Id": PARSE_APP_ID,
               "X-Parse-REST-API-Key": PARSE_REST_KEY,
               "X-Parse-Session-Token": token
           },
           data: data,
           url: url,
           error: function() { alert("Error"); }
       });
   };

    var pull = function(url, method, callback) {
        $.ajax({
            headers: {
                "X-Parse-Application-Id": PARSE_APP_ID,
                "X-Parse-REST-API-Key": PARSE_REST_KEY
            },
            type: method,
            contentType: "application/json; charset=utf-8",
            url: url,
            dataType: "json"
        }).success(callback);
    }

    return {
        call: call,
        pull: pull,
        pushRegistred: pushRegistred
    }

}(jQuery));
