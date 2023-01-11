var $circle = document.querySelector('.circle');
var $body = document.querySelector('body');

function lights(event) {
  if ($circle.className === 'circle off') {
    $circle.className = 'circle on';
    $body.className = 'on';
  } else if ($circle.className === 'circle on') {
    $circle.className = 'circle off';
    $body.className = 'off';
  }
}

$circle.addEventListener('click', lights);
