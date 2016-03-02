$(document).ready(function(){
	
	$('.accorderon_answer').css({'display':'none'});

	$('.accordeon_title').click(function(){
		$('.accordeon_title').not($(this)).removeClass('open');
		$('.accorderon_answer').not($(this).next('.accorderon_answer')).slideUp(500);
		$(this).next('.accorderon_answer').slideToggle(500);
		$(this).toggleClass('open');
	});
});