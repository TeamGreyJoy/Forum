$(document).ready(function() {
    console.log("da");
    Template.load("signIn", function() { App.loadClientModule("signUp")});
});