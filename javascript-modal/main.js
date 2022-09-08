var $openButton = document.querySelector('.open-button');
var $overlay = document.querySelector('.overlay.none');
var $noButton = document.querySelector('.no-button');

function openButtonClick(event) {
  $overlay.className = 'overlay';
}

function noButtonClick(event) {
  $overlay.className = 'overlay none';
}

$noButton.addEventListener('click', noButtonClick);
$openButton.addEventListener('click', openButtonClick);
