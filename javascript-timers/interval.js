var $h1 = document.querySelector('h1');
var num = 4;

function earthText() {
  $h1.innerText = '~Earth Beeeelooowww Us~';
}

function time() {
  num = num - 1;
  $h1.innerText = num;
  if (num <= 0) {
    earthText();
    clearInterval(intervalID);
  }
}

var intervalID = setInterval(time, 1000);
