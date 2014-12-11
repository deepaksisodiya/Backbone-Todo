/**
 * Created by Deepak Sisodiya on 11/12/14.
 */


new app.Todo();
var todos = new app.Todos();
new app.createrView({ el : $("#todoCreater") });
new app.TodoList({ el : $("#todoList") });
new app.TodoFooter({ el : $("#todoFooter") });