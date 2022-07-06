
var char = document.querySelector('span');
char.className = 'current';

document.addEventListener('keydown', e => {
  if (e.key !== char.textContent) {
    char.className = 'incorrect';
  } else if (e.key === char.textContent) {
    char.className = 'correct';
    char = char.nextElementSibling;
    char.className = 'current';
  }
});
