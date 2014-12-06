$(document).ready(function(){
    $('#viewProfile').on('click', function(){
        loadProfilePage();
    })
});


function loadProfilePage(objectId){
    Template.load("profilePage", function(){
        fillProfile(objectId);
    })
}