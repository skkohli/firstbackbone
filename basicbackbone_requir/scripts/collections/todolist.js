
define(['backbone','scripts/models/todoitem'],
	function(Backbone,TodoItem){
		var TodoList = Backbone.Collection.extend({
		model: TodoItem
		});
		return TodoList;
})