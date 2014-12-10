/**
 * Created by Deepak Sisodiya on 10/12/14.
 */


var app = {};

app.Todo = Backbone.Model.extend({

	defaults : {
		title : "",
		completed : false
	},

	initialize : function() {
		console.log("todo model");
	},

	setCompleted : function() {
		this.set({"completed" : true});
	},

	setIncompleted : function() {
		this.set({"completed" : false});
	},

	isCompleted : function() {
		return this.get("completed");
	}

});

var todo = new app.Todo();