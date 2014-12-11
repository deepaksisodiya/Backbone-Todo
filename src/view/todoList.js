/**
 * Created by Deepak Sisodiya on 10/12/14.
 */


app.TodoList = Backbone.View.extend({

  events: {
    "click #remove": "clear",
    "click #todoCheckbox": "onCheckboxClick"
  },

  initialize: function() {
    console.log("TodoList");
    if (location.hash === "") {
      this.mode = "all";
    } else {
      this.mode = location.hash.slice(1);
    }

    var self = this;
    this.render("first");
    todos.on("sync", function() {
      self.render("sync");
    });

    todos.on("destroy", function() {
      self.render("destroy");
    });
    $(window).on("hashchange", function(e) {
      self.mode = location.hash.slice(1);
      self.render();
    });
  },
  render: function(ename) {
    console.log("rendering List -> ", ename);
    var tempHTML = templates["todoList.html"]({
      obj: {
        list: todos.models,
        mode: this.mode
      }
    });
    this.$el.html(tempHTML);
  },
  clear: function(e) {
    var index = $(e.target).attr("data-index");
    todos.models[index].destroy();
  },

  onCheckboxClick: function(e) {
    var index = $(e.target).attr("data-index");
    if (todos.models[index].get("completed") === true) {
      todos.models[index].save({
        completed: false
      });
    } else {
      todos.models[index].save({
        completed: true
      });
    }
  }

});
