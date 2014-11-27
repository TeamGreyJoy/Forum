function onSubmit(){
    var username = $('#username').val();
    var password = document.getElementById("passwd").value;
    console.log(username);
    console.log(password);

    var PARSE_APP_ID = "UYWVoDe8RusQmxyZ4HZhkLxYC0sVR0lV6pM8RECE";
    var PARSE_REST_KEY = "YbUmvG1QEasOSFwt6rvJ8CYEY9T5bESlwxMSWzbY";
    jQuery.ajax({
        method: 'GET',
        headers: {
            "X-Parse-Application-Id": PARSE_APP_ID,
            "X-Parse-REST-API-Key": PARSE_REST_KEY
        },
        data:{
            username: encodeURI(username),
            password: encodeURI(password)
        },
        url: "https://api.parse.com/1/login"
    }).done(function(data){
        console.log(data);
        $.getScript('app/scripts/successfulLogin.js', function(){
            successfulLogin(data.username);
        });
    })
        .fail(function(){  })
        .always(function(){
            console.log("completed");
        })
}