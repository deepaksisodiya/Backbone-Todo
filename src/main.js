/**
 * Created by Deepak Sisodiya on 11/12/14.
 */


var todos = new app.Todos();
new app.Todo();
new app.createrView({
  el: $("#todoCreater")
});
new app.TodoList({
  el: $("#todoList")
});
new app.TodoFooter({
  el: $("#todoFooter")
});