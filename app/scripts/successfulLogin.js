function successfulLogin(username){
    var main = $('main');
    var contentSection = $('#content');
    fadeOutFadeIn(contentSection);
    main.addClass('toggleBgn');
    $.ajax({
        url: "templates/webPage/welcomeScreen.html",
        success: function (htmlData) {
            main.append(htmlData);
            var usernameContainer = $('#welcome>header>h2');
            usernameContainer.text("Welcome " + username + "!");
        },
        dataType: 'html'
    });
    console.log(username);

        setTimeout(function(){
            removeWelcomeCard();
        }, 1100);
        App.loadClientModule('loadCategories');
        loadCategories();
}

function fadeOutFadeIn(element){
    element.fadeTo("slow", 0.7);
    setTimeout(function(){
        element.fadeTo("slow", 1);
    }, 1300);
}

function removeWelcomeCard(){
    $('#welcome').remove();
}