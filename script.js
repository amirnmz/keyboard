const keyboard = document.querySelectorAll('.keyboard-btn');
// const displayBtn = document.querySelector('.display-btn');
const container = document.querySelector('body');

function addClassName(key) {
  keyboard.forEach((element) => {
    if (element.innerHTML.toLowerCase() === key) {
      element.classList.add('key');
    }

    setTimeout(() => {
      element.classList.remove('key');
    }, 100);
  });
}

// function insertChar(char) {
//   const charContainer = document.createElement('p');
//   charContainer.classList.add('char-container');
//   charContainer.innerText = char;
//   displayBtn.insertAdjacentElement('beforeend', charContainer);
// }

function handleKeyDown(event) {
  if (event.keyCode >= 60 && event.keyCode <= 90) {
    console.log(event.keyCode)
    addClassName(event.key);
    
    
  } else {
    console.log('something went wrong!');
  }
}

container.addEventListener('keydown', (event) => {
  handleKeyDown(event);
});
