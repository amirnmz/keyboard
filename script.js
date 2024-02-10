const keyboard = document.querySelectorAll('.keyboard-btn');
const displayBtn = document.querySelector('.display-btn');

function insertChar(char) {
  const charContainer = document.createElement('p');
  charContainer.classList.add('char-container');
  charContainer.innerText = char;

  displayBtn.insertAdjacentElement('beforeend', charContainer);
}

function handleKeyDown(event) {
  if (event.keyCode >= 60 && event.keyCode <= 90) {
    insertChar(event.key);
  } else {
    console.log('something went wrong!');
  }
}

keyboard.forEach((button) => {
  button.addEventListener('keydown', handleKeyDown);
});
