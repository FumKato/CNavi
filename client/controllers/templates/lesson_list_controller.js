$(function(){
	$(document).on('mouseenter', '.lessonListItem', function(){
		var $this = $(this);
		if(!$this.hasClass('overed')){
			$(this).addClass('blue');
		}
	});
	
	$(document).on('mouseleave', '.lessonListItem', function(){
		$(this).removeClass('blue');
	});
	
	$(document).on('click', '.lessonListItem', function(){
		var $this = $(this);
		if(!$this.hasClass('overed')){
			//TODO
		}
	});
});
