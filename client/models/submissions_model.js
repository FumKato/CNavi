SubmissionsModel = function(){
	var _this = SubmissionsModel;
	
	_this.prototype.get_submissions_by_lesson_id = function(lesson_id){
		return Submissions.find({
			lesson_id: lesson_id
		}).fetch();
	};
	
	_this.prototype.get_submissions_by_user_id = function(lesson_id, user_id){
		return Submissions.findOne({
			lesson_id: lesson_id,
			user_id: user_id
		});
	};
	
	_this.prototype.set_answers = function(lesson_id, user_id, answers){
		Meteor.call('set_answers', lesson_id, user_id, answers);
	};
};

submissions_model = new SubmissionsModel();
