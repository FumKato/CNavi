Meteor.publish('user', function(id, password){
	return Users.find({id: id, password: password});
});
