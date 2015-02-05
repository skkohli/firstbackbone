define(['backbone'],function(Backbone){
var TodoView = Backbone.View.extend({
	initialize:function(){
		this.model.on('change',this.render,this);
	},
	events: {
		'change input': 'toggleStatus'
	},
	toggleStatus: function(){
		this.model.toggleStatus();
	},
	template:_.template($("#template-main").html()),
	render: function(){
		var attributes = this.model.toJSON();
		var html = this.template(attributes)
		this.$el.html(html);	
		$("body").append(this.el);
	}
});
	return TodoView;
});