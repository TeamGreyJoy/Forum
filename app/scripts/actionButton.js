$(document).ready(function(){
	$('.icon').on('click', function() {
		$(this).toggleClass('active');
          var section = $(this).parent().parent().parent().parent();
//        var paragraph = section.find('p');
          section.toggleClass('hovered');
//        var PARSE_APP_ID = "UYWVoDe8RusQmxyZ4HZhkLxYC0sVR0lV6pM8RECE";
//        var PARSE_REST_KEY = "YbUmvG1QEasOSFwt6rvJ8CYEY9T5bESlwxMSWzbY";
//        jQuery.ajax({
//            method: 'GET',
//            headers: {
//                "X-Parse-Application-Id": PARSE_APP_ID,
//                "X-Parse-REST-API-Key": PARSE_REST_KEY
//            },
//            url: "https://api.parse.com/1/classes/Answers"
//            }).success(function(data){
//                console.log(data.results);
//                paragraph.text(data.results[section.index()].answerText);
//        });
	});
});