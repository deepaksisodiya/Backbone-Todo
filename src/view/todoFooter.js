/**
 * Created by Deepak Sisodiya on 11/12/14.
 */


app.TodoFooter = Backbone.View.extend({

	template: _.template($("#todoFooterTemplate").html()),

	initialize : function () {
		console.log("TodoFooter view")
		this.render();
	},

	render : function() {
		var tempHTML = this.template({
			obj: {}
		});
		this.$el.html(tempHTML);
	}

});

var todoFooterObj = new app.TodoFooter({ el : $("#todoFooter") });