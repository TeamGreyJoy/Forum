$(document).ready(function(){
    $('#viewProfile').on('click', function(){
        loadProfilePage();
    })
});


function loadProfilePage(objectId){
    $('#newQuestionForm').css('display', 'none');
    $('#addNewQuestion').css('display', 'none');
    $("#newAnswerDiv").css('display', 'none');
    $('.openAnswerBox').css('display', 'none');
    Template.load("profilePage", function(){
        fillProfile(objectId);
    })
}