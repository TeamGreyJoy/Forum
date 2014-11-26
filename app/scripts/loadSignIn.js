
$(document).ready(function(){
    var contentSection = $('#content');
    var mainSection = $('main');
    mainSection.css("background-image", "url(resources/bgn.jpg)");
    mainSection.css("background-size", "cover");
    contentSection.load("templates/webPage/loginForm/signIn.html");

});