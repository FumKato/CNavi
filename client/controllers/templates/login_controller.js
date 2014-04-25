$(function() {
	$('input[name=login]').click(function(){
		var id = $('input[name=id]').val();
		var password = $('input[name=password]').val();
		
		Meteor.subscribe('user', id, password, function(){
			if(Users.find({}).count() != 0) {
				class_list_view.render();
				cnavi_view.render('class_list');
			} else {
				alert('Invalid ID or password');
			}
		});
	});
});
