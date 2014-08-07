SubmissionController = function(){
	var _this = SubmissionController;
	
};

submission_controller = new SubmissionController();

$(function(){
	$('#submissionButtons').find('.backButton').click(function(){
		if(Session.get('myself').role == 'student'){
			cnavi_view.render('lessonList');
		} else if(Session.get('myself').role == 'teacher' || Session.get('myself').role == 'assistant'){
			cnavi_view.render('studentList');
		}
	});
	
	$('.submissionButton').click(function(){
		
	});
});
