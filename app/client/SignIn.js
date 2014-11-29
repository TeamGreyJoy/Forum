$(document).ready(function() {
    checkLoggedIn()
        .done(function(result){
            if(result.sessionToken == sessionStorage.sessionToken){
                loadCategories();
            }
            else{
                console.log("Something went wrong!");
            }
        })
        .fail(function(err){
            Template.load("signIn", function() { App.loadClientModule("signUp")});
        })
});