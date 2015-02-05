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





var TodoList = Backbone.Collection.extend({
	url:'app',
});


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
		
		$(this.el).html(html);
		//$("body").append(this.el);
		return this;
	}
}
var TodoView = Backbone.View.extend(viewHash);

/*var todoView  = new TodoView({model:todoItem});
todoView.render();*/

//initialize data
var collectionData = [
{id:12, status:"completed", description:"First To do item"},
{id:13, status:"incomplete", description:"Second To do item"},
{id:14, status:"incomplete", description:"Third To do item"},			
{id:15, status:"incomplete", description:"Third To do item"}
];

var todoList = new TodoList({model:TodoItem});
todoList.reset(collectionData);



var TodoListView = Backbone.View.extend({
	render:function(){
		console.log(this.collection.length);
		this.collection.forEach(this.addOne,this);
		$("body").html(this.el);
	},
	addOne:function(todoItem){
		var todoView = new TodoView({model:todoItem});
    this.$el.append(todoView.render().el);
    console.log(this.el);
	}

})
var todoListView = new TodoListView({collection:todoList});
todoListView.render();



