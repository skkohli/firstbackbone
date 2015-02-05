require.config({
	paths:{
		'underscore' : 'external/underscore',
		'backbone' : 'external/backbone',
		'jquery' : 'external/jquery'
	},
	shim:{
		'underscore':{
			exports:'_'
		},
		'backbone':{
			deps:['underscore','jquery'],
			exports:'Backbone'
		}
	}
});

require(['backbone','scripts/collections/todolist','scripts/routes/router','scripts/views/todolistview'],
	function(Backbone,TodoList,Router,TodoListView) {
	$(function(){
		var todoList = new TodoList();
		var todos = [
		{description: 'Pick up milk.', status: 'incomplete'},
		{description: 'Get a car wash', status: 'incomplete'},
		{description: 'Learn Backbone', status: 'incomplete'}
		];
		todoList.reset(todos);

		var router = new Router();
		Backbone.history.start();

		var todoListView = new TodoListView({collection:todoList});
		todoListView.render();	
	})
	

});
















