import keys from './keys _en_ru_.js';
import { getLocalStorage } from './localStorage.js';

export function printReal() {
  const textArea = document.querySelector('.textarea');

  function pressKey(event) {
    event.preventDefault();

    const pressedKey = document.getElementById(`${event.which}`);
    const pressedKeyIndex = pressedKey.dataset.index;
    pressedKey.classList.add('pressed');

    if (pressedKeyIndex === '13') { // backspace
      textArea.innerHTML.split('').splice(1, 1).join('');// ???????????????????????????
    } else if (pressedKeyIndex === '41') { // enter
      textArea.innerHTML += '\n';
    } else if (pressedKeyIndex === '29') { // CAPSLOCK
      textArea.innerHTML += '2';
    } else if (pressedKeyIndex === '42') { // shift
      textArea.innerHTML += '2';
    } else {
      textArea.innerHTML += `${event.key}`;
    }
  }

  document.addEventListener('keydown', pressKey);

  function releaseKey(event) {
    event.preventDefault();

    const releasedKey = document.getElementById(`${event.which}`);
    releasedKey.classList.remove('pressed');
  }

  document.addEventListener('keyup', releaseKey);
}
