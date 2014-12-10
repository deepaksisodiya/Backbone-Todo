/**
 * Created by Deepak Sisodiya on 10/12/14.
 */


app.Todos = Backbone.Collection.extend({

	Model : app.Todo,

	localStorage: new Backbone.LocalStorage("todos-backbone"),

	initialize : function() {
		console.log("collection Todo");
	}

});

var todos = new app.Todos();