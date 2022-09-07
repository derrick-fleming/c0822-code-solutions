var $contactForm = document.querySelector('#contact-form');

function submit(event) {
  event.preventDefault();
  var submitObject = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    textArea: $contactForm.elements.message.value
  };
  console.log('Form Data:', submitObject);
}

$contactForm.addEventListener('submit', submit);
