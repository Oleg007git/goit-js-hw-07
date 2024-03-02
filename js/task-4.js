const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  const emailValue = elements.email.value.trim();
  const passwordValue = elements.password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('Заповніть обидва поля!!!');
    return;
  }

  const info = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(info);
  event.currentTarget.reset();
}
