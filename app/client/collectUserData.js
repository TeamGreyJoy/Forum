var userData = (function(){
    function collect(results){
        if(!(cookie.get('sessionToken'))){
            var token = results.sessionToken;
            cookie.set("sessionToken", token, 1);
        }
        if(!(cookie.get('objectId'))){
            var objectId = results.objectId;
            cookie.set("objectId", objectId, 1);
        }
        if(!(cookie.get('username'))){
            var username = results.username;
            cookie.set("username", username, 1);
        }
        if(!(cookie.get('email'))){
            var email = results.email;
            cookie.set("email", email, 1);
        }
        if(!(cookie.get('created'))){
            var created = new Date(results.createdAt).toLocaleDateString();
            cookie.set("created", created, 1);
        }
//        var userId = results.objectId;
//        var username = results.username;
//        var email = results.email;
//        var created = new Date(results.createdAt).toLocaleDateString();
//
//
//        cookie.set('userId', userId, 1);
//        cookie.set("username", username, 1);
//        cookie.set("email", email, 1);
//        cookie.set("created", created, 1);

        if(results.name){
            cookie.set('name', results.name, 1)
        }

        if(results.dateOfBirth){
            cookie.set('dateOfBirth', results.dateOfBirth, 1);
        }

        if(results.phone){
            cookie.set('phone', results.phone, 1);
        }

        if(results.skype){
            cookie.set('skype', results.skype, 1);
        }

        if(results.facebook){
            cookie.set('facebook', results.facebook, 1);
        }
    }

    return {
        collect: collect
    }
})();