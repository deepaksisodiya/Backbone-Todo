/**
 * Created by Deepak Sisodiya on 10/12/14.
 */


app.TodoList = Backbone.View.extend({

	events : {
		"click #remove" : "clear"
	},

	template: _.template($("#todoListTemplate").html()),

	initialize : function() {
		console.log("TodoList");
		var self = this;
		todos.fetch().done(function () {
			self.render();
		});
		todos.on("add", function () {
			self.render();
		});
		todos.on("destroy", function () {
			self.render();
		});
	},

	render : function() {
		var tempHTML = this.template({
			obj: todos.models
		});
		this.$el.html(tempHTML);
	},

	clear: function(e) {
		var index = $(e.target).attr("data-index");
		todos.models[index].destroy();
	}

});

var todoListObj = new app.TodoList({ el : $("#todoList") });