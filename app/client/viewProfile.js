$(document).ready(function(){
    $('#viewProfile').on('click', function(){
        Template.load("profilePage", function(){
            var username = cookie.get("username");
            var email = cookie.get("email");
            $('#userNamePar').text("Username: " + username);
            $('#emailPar').text("Email: " + email);
            $('#resetPasswd').on('click', function(){
                var url = "https://api.parse.com/1/requestPasswordReset";
                var data = JSON.stringify({contentType: "application/json" ,email: cookie.get("email") });
                console.log(data);
                Ajax.call(url, "POST", data, function(){
                    console.log("email sent");
                }, "application/json");
            });
        })
    })
});