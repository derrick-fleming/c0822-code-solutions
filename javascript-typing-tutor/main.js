var $container = document.querySelector('.container');
var $span = document.querySelectorAll('span');

var $score = document.querySelector('.score');
var spanIndex = 0;
var accuracyScore = 0;

$container.addEventListener('keydown', typeTest);

function typeTest(event) {
  if (event.key !== $span[spanIndex].textContent) {
    $span[spanIndex].className = 'text-wrong';
    accuracyScore--;
    return;
  }

  $span[spanIndex].className = 'text-correct';

  spanIndex++;
  accuracyScore++;

  $span[spanIndex].className = 'border';

  if (spanIndex === $span.length - 1) {
    var calculateScore = Math.floor(100 * (accuracyScore / ($span.length - 1)));
    $score.className = 'score';
    $score.textContent += ' ' + calculateScore + '%';
  }
}
