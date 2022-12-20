var $input = document.querySelector('input');
var $textArea = document.querySelector('textarea');

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name', event.target.name);
  console.log('event.target.value', event.target.value);
}

$input.addEventListener('focus', handleFocus);
$input.addEventListener('blur', handleBlur);
$input.addEventListener('input', handleInput);

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
