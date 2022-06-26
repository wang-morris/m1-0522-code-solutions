var $modal = document.querySelector('.container');
var $openModal = document.querySelector('.open-modal');
$openModal.addEventListener('click', openModal);
var $noButton = document.querySelector('.button');
$noButton.addEventListener('click', openModal);

function openModal() {
  $modal.classList.toggle('display-container');
}
