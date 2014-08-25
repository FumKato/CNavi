Meteor.publish('submissions', function(user, lesson_id){
	return submissions_model.get_submissions_by_lesson_id(user, lesson_id);
});

Meteor.methods({
	set_answers: function(lesson_id, user_id, answers){
		var user = users_model.get_users_by_user_id(user_id);
		if(user.role == 'student'){
			submissions_model.set_submissions(user_id, user.name, lesson_id, answers);
		}
	},
	
	set_scores: function(lesson_id, user_id, scores){
		var user = users_model.get_users_by_user_id(user_id);
		if(user.role == 'teacher' || user.role == 'assistant'){
			submissions_model.set_submissions(user_id, user.name, lesson_id, scores);
		}
	}
});
