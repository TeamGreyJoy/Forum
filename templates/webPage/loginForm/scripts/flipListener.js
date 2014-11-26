$(document).ready(function(){
    $('#flip').on('click', function(){
        $('.hover').addClass('flip')
    });
    $('#flipBack').on('click', function(){
        $('.hover').removeClass('flip');
    });
});