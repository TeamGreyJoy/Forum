$(document).ready(function() {
    checkLoggedIn()
        .done(function(result){
            Header.load("logOut", function() { App.loadClientModule("logOut") });
            loadCategories();
        })
        .fail(function(err){
            Template.load("signIn", function() { App.loadClientModule("signUp")});
        })
});