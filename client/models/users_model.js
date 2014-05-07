UsersModel = function(){
	this.get_my_users = function(){
		return Users.findOne({});
	};
};

users_model = new UsersModel();
