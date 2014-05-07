CNaviView = function(){
	this.render = function(target){
		$('.cnavi_contents').hide();
		var targetID = '#' + target;
		$(targetID).show();
	};
	
	this.render_header = function(user){
		switch(user.role){
			case 'student':
				$('#header').addClass('green');
				break;
			case 'teacher':
				$('#header').addClass('red');
				break;
			case 'assistant':
				$('#header').addClass('blue');
				break;
		}
		$('#headerName').html('Welcome back ' + user.name + '(' + user.role + ')');
	};
};

cnavi_view = new CNaviView();
