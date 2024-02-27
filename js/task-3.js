const inputText = querySelector('#name-input');
const nameOut = querySelector('#name-output');
inputText.addEventListener('input', handleClick);

function handleClick() {
  const enterName = inputText.value.trim();
  if (enterName !== '') {
    nameOut.textContent = enterName;
  } else {
    nameOut.textContent = 'Anonymous';
    console.log(nameOut);
  }
}
handleClick();
