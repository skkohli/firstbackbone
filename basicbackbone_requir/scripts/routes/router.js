define(['backbone'],function(Backbone){
var Router = Backbone.Router.extend({

	routes:{ 
		'':'index',
		'hello/*path':'hello',
		'all':'all'
	},
	index:function(){
		alert("We are at the index");
	},
	hello: function (path){
		alert("parameter passed is "+path);
	},
	all: function (){
		alert("Plz dont sleep all!")
	}
});
	return Router;
});