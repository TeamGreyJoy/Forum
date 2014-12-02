$(document).ready(function() {
    checkLoggedIn()
        .done(function(result){
            Header.load("headerButtons", function() {
                App.loadClientModule("logOut");
                App.loadClientModule("viewProfile");
            });
            loadCategories();
        })
        .fail(function(err){
            Template.load("signIn", function() { App.loadClientModule("signUp")});
        })
});