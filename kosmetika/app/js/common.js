$(document).ready(function(){
	$("select").selecter();
	
	$('.program_answer').css({'display':'none'});

	$('.program_item').click(function(){
		$('.program_item').not($(this)).removeClass('open');
		$('.program_answer').not($(this).next('.program_answer')).slideUp(500);
		$(this).next('.program_answer').slideToggle(500);
		$(this).toggleClass('open');
	});
});