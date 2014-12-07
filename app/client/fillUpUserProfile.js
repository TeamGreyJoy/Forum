function fillProfile(userId){
    var username = $('#username');
    var name = $('#name');
    var memberSince = $('#member');
    var dateOfBirth = $('#date-of-birth');
    var email = $('#email');
    var phone =  $('#phone');
    var skype = $('#skype');
    var facebook = $('#facebook');
    var avatarURL = $('#avatar');

    if(userId){
        var url = "https://api.parse.com/1/users/" + userId;
        Ajax.call(url, "GET", null, function(results){
            console.log(results);
            username.attr('value', results.username);
            name.attr('value', results.name);
            memberSince.attr('value', new Date(results.createdAt).toLocaleDateString());
            dateOfBirth.attr('value', results.dateOfBirth);
            email.attr('value', results.email);
            phone.attr('value', results.phone);
            skype.attr('value', results.skype);
            facebook.attr('value', results.facebook);
        }, "application/json", false);

        setAvatar(userId);

        $('#save').attr("disabled", "disabled");
        $('#addAvatar').attr("disabled", "disabled");
        $('#avatar').attr("disabled", "disabled")
    } else{
        username.attr('value', cookie.get('username'));
        name.attr('value', cookie.get('name'));
        memberSince.attr('value', cookie.get('created'));
        dateOfBirth.attr('value', cookie.get('dateOfBirth'));
        email.attr('value', cookie.get('email'));
        phone.attr('value', cookie.get('phone'));
        skype.attr('value', cookie.get('skype'));
        facebook.attr('value', cookie.get('facebook'));
        avatarURL.attr('value', cookie.get('avatarURL'));
        setAvatar();


        $('#save').on('click', function(){
            name = name.val();
            dateOfBirth = dateOfBirth.val();
            phone = phone.val();
            skype = skype.val();
            facebook = facebook.val();

            var data = JSON.stringify({"name": name, "dateOfBirth": dateOfBirth, "phone": phone, "skype": skype, "facebook": facebook});

            var url = "https://api.parse.com/1/users/" + cookie.get("objectId");
            Ajax.call(url, "PUT", data, function(){
                Ajax.call(url, "GET", null, function(results){
                    userData.collect(results);
                }, "application/json", false);
            }, "application/json", true);
        });
    }
}