Meteor.startup(function(){
	Classes.remove({});
	Users.remove({});
	Lessons.remove({});
	Submissions.remove({});
	
	process.on('uncaughtException', function(err) {
    	console.log(err);
　	});
	
	var class_ids_a1 = new Array();
	var class_ids_a2 = new Array();
	var class_ids_b1 = new Array();
	var class_ids_b2 = new Array();
	var class_ids_c1 = new Array();
	var class_ids_c2 = new Array();
	var i = 1;
	for(i; i<=30; i++){
		switch(Math.floor(Math.random() * 5)){
			case 0:
				var classDay = 'Mon';
				break;
			case 1:
				var classDay = 'Tue';
				break;
			case 2:
				var classDay = 'Wed';
				break;
			case 3:
				var classDay = 'Thu';
				break;
			case 4:
				var classDay = 'Fri';
				break;
			default:
				var classDay = 'Mon';
		}
		var classPeriod = Math.floor(Math.random() * 5) + 1;
		if(Math.floor(Math.random() * 2) == 0){
			var classSemester = 'Fall';
		} else {
			var classSemester = 'Spring';
		}
		var className = 'class' + i;
		var id = '';
		var id = Classes.insert({
			number: i,
			name: className,
			day: classDay,
			period: classPeriod,
			semester: classSemester
		});
		var j = 1;
		var max = Math.floor(Math.random() * 30) + 1;
		for(j; j< max; j++){
			var monthLimit = Math.floor(Math.random() * 12) + 1;
			var dateLimit = Math.floor(Math.random() * 30) + 1;
			Lessons.insert({
				class_id: id,
				number: j,
				name: 'lesson' + j,
				month: monthLimit,
				date: dateLimit
			});
		}
		switch(Math.floor(Math.random() * 4)){
			case 1:
				class_ids_a1.unshift(id);
				break;
			case 2:
				class_ids_a2.unshift(id);
				break;
			case 3:
				class_ids_a1.unshift(id);
				class_ids_a2.unshift(id);
				break;
		}
		switch(Math.floor(Math.random() * 4)){
			case 1:
				class_ids_b1.unshift(id);
				break;
			case 2:
				class_ids_b2.unshift(id);
				break;
			case 3:
				class_ids_b1.unshift(id);
				class_ids_b2.unshift(id);
				break;
		}
		switch(Math.floor(Math.random() * 4)){
			case 1:
				class_ids_c1.unshift(id);
				break;
			case 2:
				class_ids_c2.unshift(id);
				break;
			case 3:
				class_ids_c1.unshift(id);
				class_ids_c2.unshift(id);
				break;
		}
	}
	
	Users.insert({id: 'A001', name: 'Foo Bar', password: 'foo', role: 'student', class_ids: class_ids_a1});
	Users.insert({id: 'A002', name: 'Bar Bar', password: 'foo', role: 'student', class_ids: class_ids_a2});
	Users.insert({id: 'B001', name: 'Bar Baz', password: 'bar', role: 'teacher', class_ids: class_ids_b1});
	Users.insert({id: 'B002', name: 'Baz Baz', password: 'bar', role: 'teacher', class_ids: class_ids_b2});
	Users.insert({id: 'C001', name: 'Baz Foobar', password: 'baz', role: 'assistant', class_ids: class_ids_c1});
	Users.insert({id: 'C002', name: 'Foo Foobar', password: 'baz', role: 'assistant', class_ids: class_ids_c2});
});
