/**
 * Created by Deepak Sisodiya on 10/12/14.
 */


app.createrView = Backbone.View.extend({

	events : {
		"click #add" : "addTodo"
	},

	initialize : function() {
		console.log("creater view");
		this.render({}, "todoCreaterTemplate", this.$el);
	},

	render : function(dataObj, tempId, domNode) {
		var tempStr = $("#" + tempId).html();
		var compileTemp = _.template(tempStr);
		var tempHTML = compileTemp({
			obj: dataObj
		});
		domNode.html(tempHTML);
	},

	addTodo : function() {
		var inputValue = $("#input-todo").val();
		todos.create({ title : inputValue , completed : false});
		$("#input-todo").val("");
	}

});