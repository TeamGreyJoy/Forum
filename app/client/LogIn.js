function logIn(username, passwd) {

    var url = "https://api.parse.com/1/login";
    var method = "GET";
    var username = username ? username : $('#username').val();
    var passwd = passwd ? passwd : $('#passwd').val();
    var dataObj = {'username': username, 'password': passwd};
    console.log(dataObj);
    var data = JSON.stringify(dataObj).replace(/:/g, "=").replace(/["'{}]/g, "").replace(/,/g, "&");
        Ajax.call(url, method, data, function (results) {
            console.log(results);
            userData.collect(results);
            Header.load("headerButtons", function () {
                App.loadClientModule("logOut");
                App.loadClientModule("viewProfile");
                loadCategories();
                Template.load("welcomePage");
                setAvatar();
            });
        },"application/json", false, function(){
            $('#username').addClass('error');
            $('#passwd').addClass('error');
            $('#errorMsg').attr('class','showMsg signin-card-animation');

            setTimeout(function(){
                $('#username').removeClass('error');
                $('#passwd').removeClass('error');
                $('#errorMsg').attr('class','hiddenMsg');
            },2200);

        });
}
