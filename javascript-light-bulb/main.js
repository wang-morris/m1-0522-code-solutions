
var $lightbulb = document.querySelector('.lightbulb-off');
$lightbulb.addEventListener('click', buttonClick);

var $container = document.querySelector('.lightbulb-container');

function buttonClick() {
  $container.classList.toggle('container-on');
  if ($lightbulb.className === 'lightbulb-off') {
    $lightbulb.className = 'lightbulb-on';
  } else {
    $lightbulb.className = 'lightbulb-off';
  }
}
