SubmissionView = function(){
	var _this = SubmissionView;
	
	_this.prototype.get_lesson_name = function(){
		var lesson = lessons_model.get_lessons_by_id(Session.get('lesson_id'));
		if(lesson == null) return;
		if(Session.get('myself').role == 'teacher' || Session.get('myself').role == 'assistant'){
			var submission = submissions_model.get_submissions_by_user_id(Session.get('lesson_id'), Session.get('student_id'));
			if(submission == null) return;
			return lesson.name + ': ' + submission.user_name;
		}
		return lesson.name;
	};
	
	_this.prototype.render_answer = function(num, question){
		if(Session.get('student_id') != null && (Session.get('myself').role == 'teacher' || Session.get('myself').role == 'assistant')){
			var questions = questions_model.get_questions_by_lesson_id(Session.get('lesson_id'));
			var submissions = submissions_model.get_submissions_by_user_id(Session.get('lesson_id'), Session.get('student_id'));
			if(questions == null || submissions == null) return;
			var answers = '<div class="questionListAnswer">TA. ' + questions[0].answers[num] + '</div>' +
				'<div class="submittedAnswer">A. ' + submissions.answers[num] + '</div>';
			return answers;
		}
		return '<div class="questionAnswerForm"> <input type="text" class="questionAnswerTextForm" name=" + ' + question + '"/></div>';
	};
};

submission_view = new SubmissionView();

Template.submission.helpers({
	get_lesson_name : function(){
		return submission_view.get_lesson_name();
	},
	
	get_questions: function(){
		var questions = questions_model.get_questions_by_lesson_id(Session.get('lesson_id'));
		if(questions.length == 0) return;
		return questions[0].questions;
	},
	
	render_answer: function(num, question){
		return submission_view.render_answer(num, question);
	},
	
	is_student: function(){
		if(Session.get('myself') == null) return false;
		return Session.get('myself').role == 'student';
	}
});
