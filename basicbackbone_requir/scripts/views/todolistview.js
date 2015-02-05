define(['backbone','scripts/views/todoview'],function(Backbone,TodoView){
var TodoListView = Backbone.View.extend({
	render: function(){
		var self = this;
		this.collection.forEach(function(todoItem){
			var todoView = new TodoView({model:todoItem});
			todoView.render();
		})
	}
})
	return TodoListView;
});