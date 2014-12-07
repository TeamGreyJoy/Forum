function changeAvatar(){
//    $('#addAvatar').on('click', function(){
        var imageURL = $('#avatar').val();

        if(imageURL){
            var data = {};
            data.url = imageURL;
            if (cookie.get('sessionToken')) {
                data.user = {
                    __type: "Pointer",
                    className: "_User",
                    objectId: cookie.get('objectId')
                }
            }
            Ajax.call('https://api.parse.com/1/classes/Avatar' +
                    '?where={"user":{"__type":"Pointer","className":"_User","objectId":"' +
                    cookie.get("objectId") + '"}}',
            "GET", null, function(result){
                    if(result.results.length != 0){
                        Ajax.call("https://api.parse.com/1/classes/Avatar/" + result.results[0].objectId, "PUT", JSON.stringify({"url": data.url}), function(result){
                        }, "application/json", true);
                    } else{
                        Ajax.call("https://api.parse.com/1/classes/Avatar", "POST", JSON.stringify(data), function(result){
                        }, "application/json", true);
                    }
                }, "application/json", false);
            setAvatar();
        } else{
            return -1;
        }
//    });
}