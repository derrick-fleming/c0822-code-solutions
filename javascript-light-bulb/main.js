var lightOn = true;
var $bulbOn = document.querySelector('.bulb-on');
var $backgroundOn = document.querySelector('.background-on');

function bulbClick(event) {
  if (lightOn === false) {
    $bulbOn.className = 'bulb bulb-off';
    $backgroundOn.className = 'background-off';
    lightOn = true;
  } else {
    $bulbOn.className = 'bulb bulb-on';
    $backgroundOn.className = 'background-on';
    lightOn = false;
  }
}

$bulbOn.addEventListener('click', bulbClick);
