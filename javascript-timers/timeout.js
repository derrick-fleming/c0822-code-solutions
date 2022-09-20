var $hello = document.querySelector('.message');

function helloText() {
  $hello.textContent = 'Hello There';
}

setTimeout(helloText, 2000);
