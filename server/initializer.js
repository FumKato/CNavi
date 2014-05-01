Meteor.startup(function(){
	Classes.remove({});
	Users.remove({});
	Lessons.remove({});
	
	Users.insert({id: 'A001', name: 'Foo Bar', password: 'foo', role: 'student'});
	Users.insert({id: 'B001', name: 'Bar Baz', password: 'bar', role: 'teacher'});
	Users.insert({id: 'C001', name: 'Baz Foobar', password: 'baz', role: 'assistant'});
});
