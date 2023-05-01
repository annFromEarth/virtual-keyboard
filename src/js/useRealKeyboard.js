import keys from './keys _en_ru_.js';
import { getLocalStorage } from './localStorage.js';

export function printReal() {
  const textArea = document.querySelector('.textarea');
  let previousKey = '';

  function pressKey(event) {
    const shiftKey = document.querySelector('[data-index="42"]');
    const capsLock = document.querySelector('[data-index="29"]');

    event.preventDefault();

    const pressedKey = document.getElementById(`${event.which}`);
    const pressedKeyIndex = pressedKey.dataset.index;

    pressedKey.classList.add('pressed');

    if (pressedKeyIndex === '13') { // backspace
      const textArray = textArea.innerHTML.split('');
      const cursorPosition = textArea.selectionEnd;
      if (textArea.selectionEnd === textArea.innerHTML.length) {
        textArea.innerHTML = textArray.slice(0, textArea.selectionEnd - 1).join('');
      } else {
        textArea.innerHTML = textArray.slice(0, textArea.selectionEnd - 1).concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
      }

      textArea.selectionStart = cursorPosition - 1;
      textArea.selectionEnd = cursorPosition - 1;

      previousKey = `${pressedKeyIndex}`;
    } else if (pressedKeyIndex === '28') { // delete
      const textArray = textArea.innerHTML.split('');
      const cursorPosition = textArea.selectionEnd;
      if (textArea.selectionEnd === textArea.innerHTML.length) {
        textArea.selectionStart = cursorPosition;
        return;
      }
      textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat(textArray.slice(textArea.selectionEnd + 1, textArea.length)).join('');

      textArea.selectionStart = cursorPosition;
      textArea.selectionEnd = cursorPosition;
      previousKey = `${pressedKeyIndex}`;
    } else if (pressedKeyIndex === '58') { // space
      const textArray = textArea.innerHTML.split('');
      const cursorPosition = textArea.selectionEnd;
      if (textArea.selectionEnd === textArea.innerHTML.length) {
        textArea.innerHTML += ' ';
      } else {
        textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat(' ').concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
      }

      textArea.selectionStart = cursorPosition + 1;
      textArea.selectionEnd = cursorPosition + 1;
      previousKey = `${pressedKeyIndex}`;
    } else if (pressedKeyIndex === '41') { // enter
      const textArray = textArea.innerHTML.split('');
      const cursorPosition = textArea.selectionEnd;
      if (textArea.selectionEnd === textArea.innerHTML.length) {
        textArea.innerHTML += '\n';
      } else {
        textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat('\n').concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
      }

      textArea.selectionStart = cursorPosition + 1;
      textArea.selectionEnd = cursorPosition + 1;
      previousKey = `${pressedKeyIndex}`;
    } else if (pressedKeyIndex === '14') { // tab
      const textArray = textArea.innerHTML.split('');
      const cursorPosition = textArea.selectionEnd;
      if (textArea.selectionEnd === textArea.innerHTML.length) {
        textArea.innerHTML += '\t';
      } else {
        textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat('\t').concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
      }

      textArea.selectionStart = cursorPosition + 1;
      textArea.selectionEnd = cursorPosition + 1;
      previousKey = `${pressedKeyIndex}`;
    } else if (pressedKeyIndex === '29') { // CAPSLOCK
      pressedKey.classList.toggle('active');
      previousKey = `${pressedKeyIndex}`;
    } else if (pressedKeyIndex === '42') { // shift
      pressedKey.classList.toggle('active');
      previousKey = `${pressedKeyIndex}`;
    } else if (pressedKeyIndex === '57') { // alt???????????
      previousKey = `${pressedKeyIndex}`;
    } else if (pressedKeyIndex === '55') { // ctrl???????????
      previousKey = `${pressedKeyIndex}`;
    } else if (textArea.selectionEnd === textArea.innerHTML.length) { // regular buttons
      if (keys[pressedKeyIndex].value) {
        if (shiftKey.classList.contains('active') || capsLock.classList.contains('active')) {
          textArea.innerHTML += keys[pressedKeyIndex].shiftedValue;
        } else { textArea.innerHTML += keys[pressedKeyIndex].value; }
      } else if (keys[pressedKeyIndex].en.value) {
        if (shiftKey.classList.contains('active') || capsLock.classList.contains('active')) {
          textArea.innerHTML += keys[pressedKeyIndex].en.shiftedValue;
        } else { textArea.innerHTML += keys[pressedKeyIndex].en.value; }
      }
    } else if (textArea.selectionEnd !== textArea.innerHTML.length) {
      const textArray = textArea.innerHTML.split('');
      const cursorPosition = textArea.selectionEnd;
      if (keys[pressedKeyIndex].value) {
        if (shiftKey.classList.contains('active') || capsLock.classList.contains('active')) {
          textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat(`${keys[pressedKeyIndex].shiftedValue}`).concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
        } else {
          textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat(`${keys[pressedKeyIndex].value}`).concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
        }
      } else if (keys[pressedKeyIndex].en.value) {
        if (shiftKey.classList.contains('active') || capsLock.classList.contains('active')) {
          textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat(`${keys[pressedKeyIndex].en.shiftedValue}`).concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
        } else {
          textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat(`${keys[pressedKeyIndex].en.value}`).concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
        }
      }
      textArea.selectionStart = cursorPosition + 1;
      textArea.selectionEnd = cursorPosition + 1;
    }

    if (pressedKeyIndex !== '42') { shiftKey.classList.remove('active'); }
    previousKey = `${pressedKeyIndex}`;
  }

  document.addEventListener('keydown', pressKey);

  function releaseKey(event) {
    event.preventDefault();

    const releasedKey = document.getElementById(`${event.which}`);
    releasedKey.classList.remove('pressed');
  }

  document.addEventListener('keyup', releaseKey);
}
