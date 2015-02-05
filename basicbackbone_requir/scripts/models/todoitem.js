define(['backbone'],function(Backbone){
var TodoItem = Backbone.Model.extend({
	urlRoot:'app',
	toggleStatus: function(){
		console.log("came in toggle model");
		if(this.get('status') === 'incomplete'){
			this.set({'status': 'complete'});
		}else{
			this.set({'status': 'incomplete'});
		}
	}
});
return TodoItem;
});