import keys from './keys _en_ru_.js';
import { getLocalStorage } from './localStorage.js';

export function printReal() {
  const textArea = document.querySelector('.textarea');
  textArea.innerText = "";

  function pressKey(event) {
    event.preventDefault();

    const pressedKey = document.getElementById(`${event.which}`);
    const pressedKeyIndex = pressedKey.dataset.index;
    pressedKey.classList.add('pressed');

    console.log(pressedKeyIndex);

    if (pressedKeyIndex === '13') { // backspace

        const textArray = textArea.innerHTML.split('');
        const cursorPosition = textArea.selectionEnd;

        if (textArea.selectionEnd === textArea.innerHTML.length) {
            textArea.innerHTML = textArray.slice(0, textArea.selectionEnd - 1).join('');
        } else {
            textArea.innerHTML = textArray.slice(0, textArea.selectionEnd - 1).concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
        }

        textArea.selectionEnd = cursorPosition-1;

    } else if (pressedKeyIndex === '28') { // delete

            const textArray = textArea.innerHTML.split('');
            const cursorPosition = textArea.selectionEnd;
    
            if (textArea.selectionEnd === textArea.innerHTML.length) {
                textArea.selectionStart = cursorPosition;
                return;
            } else {
                textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat(textArray.slice(textArea.selectionEnd+1, textArea.length)).join('');
            }
    
            textArea.selectionEnd = cursorPosition;
        
    } else if (pressedKeyIndex === '41') { // enter
      textArea.innerHTML += '\n';
    } else if (pressedKeyIndex === '14') { // tab
      textArea.innerHTML += '\t';
    } else if (pressedKeyIndex === '29') { // CAPSLOCK???????????
      textArea.innerHTML += '';
    } else if (pressedKeyIndex === '42') { // shift?????????????????
      textArea.innerHTML += '';
    } else if (pressedKeyIndex === '57') { // alt???????????
        textArea.innerHTML += '';
    } else if (pressedKeyIndex === '55') { // ctrl???????????
        textArea.innerHTML += '';
    } else {
      if (keys[pressedKeyIndex].value) {textArea.innerHTML += keys[pressedKeyIndex].value;
    }else if (keys[pressedKeyIndex].en.value) {textArea.innerHTML += keys[pressedKeyIndex].en.value;}
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
