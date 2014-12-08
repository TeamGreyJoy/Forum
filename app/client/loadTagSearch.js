function tagSearchLoad() {
    App.loadClientModule('Tags');
    tagController.getAllTags();
    AsideRight.load('tagForm', function() {        

        var tags = JSON.parse(sessionStorage.tags);
        console.log(tags);
        // var tagNames = _.map(tags, function(tag){
        //   return tag.name;
        // });

        $('#searchByTag').click(function(){

          console.log('Search Tag');
        }); 
    });
}