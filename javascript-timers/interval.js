var countdown = 4;
var $heading = document.querySelector('h1');

function changeText() {
  countdown--;
  $heading.textContent = countdown;
  if (countdown < 1) {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timerId);
  }
}

var timerId = setInterval(changeText, 1000);
