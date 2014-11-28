function signUp() {

    var url = "https://api.parse.com/1/users";
    var method = "POST";
    var username = $('#username').val();
    var passwd = $('#passwd').val();
    var email = $('#email').val();
    var dataObj = {'username': username, 'password': passwd, 'email': email};
    var data = JSON.stringify(dataObj);
    console.log(data);
    Ajax.call(url, method, data, function(){
        console.log("signedUp");
    });
}