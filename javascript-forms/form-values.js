var $contactForm = document.querySelector('#contact-form');

function prevent(event) {
  event.preventDefault();
  var form = {};
  form.name = $contactForm.elements.name.value;
  form.email = $contactForm.elements.email.value;
  form.message = $contactForm.elements.message.value;
  console.log(form);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', prevent);
