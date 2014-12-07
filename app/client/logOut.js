$(document).ready(function(){
    $('#signOut').on('click', function(){
        console.log("clicked");
        cookie.delete("sessionToken");
        cookie.delete("username");
        cookie.delete("name");
        cookie.delete("email");
        cookie.delete("phone");
        cookie.delete("objectId");
        cookie.delete("created");
        cookie.delete("dateOfBirth");
        cookie.delete("skype");
        cookie.delete("facebook");
        cookie.delete("avatarURL");
    })
});