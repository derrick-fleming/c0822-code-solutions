var click = 0;
var $bulbOn = document.querySelector('.bulb-on');
var $backgroundOn = document.querySelector('.background-on');

function bulbClick(event) {
  click++;
  if (click % 2 === 0) {
    $bulbOn.className = 'bulb bulb-off';
    $backgroundOn.className = 'background-off';
  } else {
    $bulbOn.className = 'bulb bulb-on';
    $backgroundOn.className = 'background-on';
  }
}

$bulbOn.addEventListener('click', bulbClick);
