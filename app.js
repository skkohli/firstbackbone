//create a class
var TodoItem = Backbone.Model.extend({
	toggleStatus: function(){
		if(this.get('status') === 'incomplete'){
			this.set({'status': 'complete'});
		}else{
			this.set({'status': 'incomplete'});
		}
		this.save();
	},
	urlRoot:'app'
});
//initialize data
var data = {id:12, status:"completed", description:"First To do item"};
var todoItem = new TodoItem(data);


var viewHash = {
	events: {
		'change input': 'toggleStatus'
	},
	toggleStatus: function(){
		this.model.toggleStatus();
	},
	template:_.template($("#first").text()),
	render: function(){
		var attributes = this.model.toJSON();
		var html = this.template(attributes);
		console.log($("#first").text());
		$(this.el).html(html);
		$("body").append(this.el);
	}
}
var TodoView = Backbone.View.extend(viewHash);
var todoView  = new TodoView({model:todoItem});
todoView.render();



