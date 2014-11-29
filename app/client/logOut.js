$(document).ready(function(){
    $('#signOut').on('click', function(){
        console.log("clicked");
        cookie.delete("sessionToken");
    })
});