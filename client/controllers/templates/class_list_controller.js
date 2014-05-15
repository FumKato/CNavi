$(function(){
	$(document).on('mouseenter', '.classListTableItem', function(){
		$(this).addClass('blue');
	});
	
	$(document).on('mouseleave', '.classListTableItem', function(){
		$(this).removeClass('blue');
	});
	
	$(document).on('click', '.classListTableItem', function(){
		//TODO
	});
});
