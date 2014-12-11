/**
 * Created by Deepak Sisodiya on 11/12/14.
 */


app.TodoFooter = Backbone.View.extend({

  events: {
    "click #removeCompleted": "onRemoveCompletedClick"
  },

  initialize: function() {
    console.log("TodoFooter view");
    this.render("first");
    var self = this;
    todos.on("sync", function() {
      self.render("sync");
    });
    todos.on("destroy", function() {
      self.render("destroy");
    });
  },

  render: function(ename) {
    console.log("rendering Footer", ename);
    var tempHTML = templates["todoFooter.html"]({
      obj: todos
    });
    this.$el.html(tempHTML);
  },

  onRemoveCompletedClick: function() {
    todos.clearCompleted();
  }

});
