function setAvatar(userId){
    var url;
    var avatar = $('#avatarImage');
    if(userId){
        url = 'https://api.parse.com/1/classes/Avatar' +
            '?where={"user":{"__type":"Pointer","className":"_User","objectId":"' +
            userId + '"}}';
        Ajax.pull(url, "GET", function(results){
            if(results.results.length != 0) {
                var avatarURL = results.results[0].url.split(/https*:\/\/(.*)/)[1];
                setTimeout(function () {
                    avatar.attr('src', "https://" + avatarURL);
                }, 100);
            } else{
                return -1;
            }
        })
    } else{
        url = 'https://api.parse.com/1/classes/Avatar' +
        '?where={"user":{"__type":"Pointer","className":"_User","objectId":"' +
        cookie.get("objectId") + '"}}';
        Ajax.pull(url, "GET", function(results){
            if(results.results.length != 0) {
                var avatarURL = results.results[0].url.split(/https*:\/\/(.*)/)[1];
                cookie.set("avatarURL", avatarURL, 1);
                setTimeout(function () {
                    avatar.attr('src', "https://" + cookie.get('avatarURL'));
                    $('#smallAvatar').attr('src', "https://" + cookie.get('avatarURL'));
                }, 200);
            } else{
                return -1;
            }
        })
    }
}