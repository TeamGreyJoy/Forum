function checkLoggedIn() {
    var url = "https://api.parse.com/1/users/me";
    var method = "GET";
    var PARSE_APP_ID = "QFDHAYIxgeNrofyDI6kABUANT5QLOU0czweGbM0E";
    var PARSE_REST_KEY = "yZ9U8A0vlHViGVwmlL85cPrADPtBy3DTnuYj2VfP";

    return $.ajax({
        method: method,
        headers: {
            "X-Parse-Application-Id": PARSE_APP_ID,
            "X-Parse-REST-API-Key": PARSE_REST_KEY,
            "X-Parse-Session-Token": sessionStorage.sessionToken
        },
        url: url
    });
}