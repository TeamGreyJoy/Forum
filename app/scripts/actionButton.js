$(document).ready(function(){
	$('.icon').on('click', function() {
		$(this).toggleClass('active');
        var section = $(this).parent().parent();
        section.toggleClass('hovered');
	});
});