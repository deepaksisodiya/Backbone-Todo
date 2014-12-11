/**
 * Created by Deepak Sisodiya on 10/12/14.
 */


app.Todos = Backbone.Collection.extend({

  Model: app.Todo,

  localStorage: new Backbone.LocalStorage("todos-backbone"),
  //url : 'http://localhost:1337/todos',

  initialize: function() {
    console.log("collection Todo");
    this.fetch();
  },

  completed: function() {
    return this.filter(function(todo) {
      return todo.get("completed");
    });
  },

  remaining: function() {
    return this.without.apply(this, this.completed());
  },

  clearCompleted: function() {
    _.invoke(this.completed(), "destroy");
  }

});
