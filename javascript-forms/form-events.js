function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('Value of ' + event.target.name + ':', event.target.value);
}

var $nameInput = document.querySelector("input[name ='name'");
var $emailInput = document.querySelector("input[name = 'email'");
var $textArea = document.querySelector('textarea');

$nameInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('blur', handleBlur);
$nameInput.addEventListener('input', handleInput);

$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('input', handleInput);

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
