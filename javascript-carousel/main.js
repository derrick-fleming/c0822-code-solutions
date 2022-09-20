var iconNumber = 1;
var $leftArrow = document.querySelector('.left-arrow');
var $rightArrow = document.querySelector('.right-arrow');
var $imageArray = document.querySelectorAll('img');
var $buttons = document.querySelectorAll('i');
var $buttonRow = document.querySelector('.row.button-row');

var setTimer = setInterval(nextIcon, 3000);

$leftArrow.addEventListener('click', previousIcon);
function previousIcon(event) {
  iconNumber--;
  if (iconNumber < 1) {
    iconNumber = 5;
  }
  for (var i = 0; i < $imageArray.length; i++) {
    $imageArray[i].className = 'hidden';
    if (Number($imageArray[i].dataset.image) === iconNumber) {
      $imageArray[i].className = '';
    }
  }
  cycleDots();
  clearInterval(setTimer);
  setTimer = setInterval(nextIcon, 3000);
}

$rightArrow.addEventListener('click', nextIcon);
function nextIcon(event) {
  iconNumber++;
  if (iconNumber > 5) {
    iconNumber = 1;
  }
  for (var i = 0; i < $imageArray.length; i++) {
    $imageArray[i].className = 'hidden';
    if (Number($imageArray[i].dataset.image) === iconNumber) {
      $imageArray[i].className = '';
    }
  }
  cycleDots();

  if (event !== 'click') {
    cycleDots();
    clearInterval(setTimer);
    setTimer = setInterval(nextIcon, 3000);
  }
}

$buttonRow.addEventListener('click', dotClicked);

function dotClicked(event) {
  if (event.target.tagName !== 'I') {
    return;
  }
  var $closest = event.target.closest('I');
  for (var i = 0; i < $buttons.length; i++) {
    $buttons[i].className = 'fa-regular fa-circle';
    if ($closest.dataset.id === $buttons[i].dataset.id) {
      $buttons[i].className = 'fa-solid fa-circle';
    }
  }

  for (var index = 0; index < $imageArray.length; index++) {
    $imageArray[index].className = 'hidden';
    if ($closest.dataset.id === $imageArray[index].dataset.image) {
      $imageArray[index].className = '';
      iconNumber = Number($closest.dataset.id);
    }
  }
  clearInterval(setTimer);
  setTimer = setInterval(nextIcon, 3000);
}

function cycleDots() {
  for (var i = 0; i < $buttons.length; i++) {
    $buttons[i].className = 'fa-regular fa-circle';
    if (Number($buttons[i].dataset.id) === iconNumber) {
      $buttons[i].className = 'fa-solid fa-circle';
    }
  }
}
