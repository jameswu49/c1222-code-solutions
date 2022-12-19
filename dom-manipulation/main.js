var counter = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

// update counter
// change textcontent of clickCount to equal counter
// if else statement
// - less than 4 is "cold"
// - less than 7 is "cool"
// - less than 10 is "tepid"
// - less than 13 is "warm"
// - less than 16 is "hot"

function clickButton(event) {
  counter++;
  $clickCount.textContent = 'Clicks: ' + counter;
  if (counter < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (counter < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (counter < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (counter < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (counter < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', clickButton);
