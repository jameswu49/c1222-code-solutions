var $span = document.querySelectorAll('span');
var $body = document.querySelector('body');
// var $playAgain = document.querySelector('.btn');
var counter = 0;
var accuracy = 0;
var $accuracy = document.querySelector('.accuracy');

function check(event) {
  if (event.key === $span[counter].textContent) {
    $span[counter].className = 'correct';
    counter++;
    $span[counter - 1].className = 'correct';
    $span[counter].className = 'underline';
  } else {
    $span[counter].className = 'wrong underline';
    accuracy++;
  }
  $accuracy.textContent = `Typing Accuracy: ${accuracy}`;
}

$body.addEventListener('keydown', check);
