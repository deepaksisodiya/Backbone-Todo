/**
 * Created by Deepak Sisodiya on 10/12/14.
 */


app.Todos = Backbone.Collection.extend({

	Model : app.Todo,

	localStorage: new Backbone.LocalStorage("todos-backbone"),

	initialize : function() {
		console.log("collection Todo");
	},

	completed: function() {
		return this.filter(function( todo ) {
			return todo.get('completed');
		});
	},

	remaining: function() {
		return this.without.apply( this, this.completed() );
	},
	
	clearCompleted : function () {
		_.invoke(this.completed(), "destroy");
	}

});

var todos = new app.Todos();
