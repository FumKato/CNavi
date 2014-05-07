ClassListView = function(){
	this.render = function(classes){
		var i = 0;
		for(i; i<classes.length; i++){
			var list_item = '<tr class="classListTableItem"><td>' + classes[i].name + '</td><td>' +
					classes[i].day + '</td><td>' + classes[i].period + '</td><td>' +
					classes[i].semester + '</td></tr>';
			$('#classListTable').append(list_item);
		}
	};
};

class_list_view = new ClassListView();
