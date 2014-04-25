CNaviView = function(){
	this.render = function(target){
		$('.cnavi_contents').hide();
		var targetID = '#' + target;
		$(targetID).show();
	};
};

cnavi_view = new CNaviView();
