function logIn() {

    var url = "https://api.parse.com/1/login";
    var method = "GET";
    var username = $('#username').val();
    var passwd = $('#passwd').val();
    var dataObj = {'username': username, 'password': passwd};
    console.log(dataObj);
    var data = JSON.stringify(dataObj).replace(/:/g, "=").replace(/["'{}]/g, "").replace(/,/g, "&");
    Ajax.call(url, method, data, function(results) {
        var token = results.sessionToken;
        var username = results.username;
        var email = results.email;
        cookie.set("username", username, 1);
        cookie.set("email", email, 1);
        cookie.set("sessionToken", token, 1);
        Header.load("headerButtons", function() {
            App.loadClientModule("logOut");
            App.loadClientModule("viewProfile");
        });
        loadCategories();
    });
}
