function handleFocus(event) {
  console.log('focus event was fired!');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired!');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('event.target.name');
  console.log(event.target.value);
}

var $name = document.querySelector('[name="name"');
var $email = document.querySelector('[name="email"');
var $message = document.querySelector('[name="message"');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
