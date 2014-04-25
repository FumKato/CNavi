ClassListView = function(){
	this.render = function(){
		var user = Users.findOne({});
		$('#name').html(user.name);
		$('#id').html(user.id);
		$('#role').html(user.role);
		if(user.role == 'teacher'){
			$('#header').addClass('red');
		} else if(user.role == "assistant"){
			$('#header').addClass('blue');
		} else {
			$('#header').addClass('green');
		}
	};
};

class_list_view = new ClassListView();
