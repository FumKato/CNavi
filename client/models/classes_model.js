ClassesModel = function(){
	this.get_classes = function(){
		return Classes.find({}, {sort: {semester: -1, number: 1}}).fetch();
	};
};

classes_model = new ClassesModel();
