/* exported todos */

var previousTodosJSON = localStorage.getItem('javascript-local-storage');
var todos = JSON.parse(previousTodosJSON);

window.addEventListener('beforeunload', beforeUnload);

function beforeUnload(e) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
