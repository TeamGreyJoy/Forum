$(document).ready(function(){
    setTimeout(loadSignUpForm, 1000);
});



function loadSignUpForm(){
    var contentSection = $('.back .pad');
    contentSection.load("templates/webPage/loginForm/signUp.html");
}