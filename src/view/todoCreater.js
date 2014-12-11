/**
 * Created by Deepak Sisodiya on 10/12/14.
 */


app.createrView = Backbone.View.extend({

  events: {
    "keyup #input-todo": "addTodo"
  },

  initialize: function() {
    console.log("creater view");
    this.render({}, "todoCreaterTemplate", this.$el);
  },

  render: function(dataObj, tempId, domNode) {
    console.log("rendering Creator");

    var tempHTML = templates["todoCreater.html"]({
      obj: dataObj
    });
    domNode.html(tempHTML);
  },

  addTodo: function(e) {
    if (e.keyCode === 13) {
      var inputValue = e.target.value;
      todos.create({
        title: inputValue,
        completed: false
      });
      e.target.value = "";
    }
    return false;
  }

});
