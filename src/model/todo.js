/**
 * Created by Deepak Sisodiya on 10/12/14.
 */


var app = {};

app.Todo = Backbone.Model.extend({

  defaults: {
    title: "",
    completed: false
  }

});
