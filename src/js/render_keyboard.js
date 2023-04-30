import keys from './keys _en_ru_.js';
import { getLocalStorage } from './localStorage.js';

function createKeyboard() {
  const lang = getLocalStorage();
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  document.body.append(keyboard);

  let elementIndex = 0;

  keys.forEach(() => {
    const key = document.createElement('div');
    key.className = 'key';
    key.id = `${keys[elementIndex].keyCode}`;
    key.dataset.index = elementIndex;

    if (keys[elementIndex].name) {
      key.classList.add(`${keys[elementIndex].name}`);// add special class to backspace, tab, delete, capslock, enter, shifts, ctrls, alts, space, os, arrows
    }

    if (keys[elementIndex].value) {
      key.innerHTML = keys[elementIndex].value;
    } else {
      key.innerHTML = keys[elementIndex][lang].value;
    }

    elementIndex += 1;

    keyboard.append(key);
  });
}

export default createKeyboard;
