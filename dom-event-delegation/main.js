var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', taskFunct);

function taskFunct(e) {
  console.log('target:', e.target);
  console.log('target tagName:', e.target.tagName);

  if (e.target && e.target.matches('button')) {
    var $closestButton = document.querySelector('button');
    var remove = $closestButton.closest('li');
    remove.remove();
  }
}
