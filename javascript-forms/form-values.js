var $inputs = document.querySelector('#contact-form');
$inputs.addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();
  var nameValue = $inputs.elements.name.value;
  var emailValue = $inputs.elements.email.value;
  var messageValue = $inputs.elements.message.value;

  var messageData = {
    name: nameValue,
    email: emailValue,
    message: messageValue
  };
  console.log('messageData:', messageData);
  $inputs.reset();
}
