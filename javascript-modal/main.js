var $purpleBtn = document.querySelector('#purpleBtn');
var $redBtn = document.querySelector('#redBtn');
var $survey = document.querySelector('#survey');
var $popout = document.querySelector('#popout');

function open(event) {
  $survey.className = 'survey';
  $popout.className = 'flex';
}

function close(event) {
  $popout.className = 'none';
  $survey.className = 'none';
}

$purpleBtn.addEventListener('click', open);
$redBtn.addEventListener('click', close);
