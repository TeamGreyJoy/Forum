$(document).ready(function(){
    var username = $('#username');
    var name = $('#name');
    var memberSince = $('#member');
    var dateOfBirth = $('#date-of-birth');
    var email = $('#email');
    var phone =  $('#phone');
    var skype = $('#skype');
    var facebook = $('#facebook');

    username.attr('value', cookie.get('username'));
    name.attr('value', cookie.get('name'));
    memberSince.attr('value', cookie.get('created'));
    dateOfBirth.attr('value', cookie.get('dateOfBirth'));
    email.attr('value', cookie.get('email'));
    phone.attr('value', cookie.get('phone'));
    skype.attr('value', cookie.get('skype'));
    facebook.attr('value', cookie.get('facebook'));

    $('#save').on('click', function(){
        name = name.val();
        dateOfBirth = dateOfBirth.val();
        phone = phone.val();
        skype = skype.val();
        facebook = facebook.val();

        var data = JSON.stringify({"name": name, "dateOfBirth": dateOfBirth, "phone": phone, "skype": skype, "facebook": facebook});

        var url = "https://api.parse.com/1/users/" + cookie.get("userId");
        Ajax.call(url, "PUT", data, function(){
            Ajax.call(url, "GET", "", function(results){
                userData.collect(results);
            }, "application/json", false);
        }, "application/json", true);
    });
});