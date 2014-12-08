function signUp() {

    var url = "https://api.parse.com/1/users";
    var method = "POST";
    var username = $('#username-sign-up').val();
    var passwd = $('#passwd-sign-up').val();
    var email = $('#email').val();
    var dataObj = {'username': username, 'password': passwd, 'email': email};
    var data = JSON.stringify(dataObj);
    console.log(data);
    Ajax.call(url, method, data, function(userData){
        console.log(userData);
        var postdata = {
            "users": {
                "__op": "AddRelation",
                "objects": [
                    {
                        "__type": "Pointer",
                        "className": "_User",
                        "objectId": userData.objectId
                    }
                ]
            }
        };
        Ajax.call(
            "https://api.parse.com/1/roles/NEmjNrb8Oe",
            "PUT",
            JSON.stringify(postdata),
            function(){logIn(username, passwd);},
            "application/json", false);
    });
}