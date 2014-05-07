$(function(){
	$(document).on('mouseenter', '.classListTableItem', function(){
		$(this).addClass('blue');
	});
	
	$(document).on('mouseleave', '.classListTableItem', function(){
		$(this).removeClass('blue');
	});
});
