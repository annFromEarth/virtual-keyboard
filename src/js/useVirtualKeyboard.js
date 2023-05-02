import keys from './keysSource.js';
import { setLocalStorage, getLocalStorage } from './localStorage.js';
import changeLanguage from './changeLanguage.js';

function printVirtual() {
  const textArea = document.querySelector('.textarea');
  let previousKey = '';

  function pressKeyVirtual(event) {
    const lang = getLocalStorage('lang');
    const keyboard = document.querySelector('.keyboard');
    const shiftKey = document.querySelector('[data-index="42"]');
    const capsLock = document.querySelector('[data-index="29"]');

    if (event.target.classList.contains('keyboard')) { return; }

    if (event.composedPath().includes(keyboard)) {
      event.preventDefault();

      textArea.focus();

      const pressedKey = document.getElementById(`${event.target.id}`);
      const pressedKeyIndex = pressedKey.dataset.index;

      pressedKey.classList.add('pressed');

      const textArray = textArea.innerHTML.split('');// intro1
      let cursorPosition = textArea.selectionEnd;
      textArea.selectionStart = cursorPosition;

      if (pressedKeyIndex === '13') { // backspace
        if (textArea.selectionEnd === textArea.innerHTML.length) {
          textArea.innerHTML = textArray.slice(0, textArea.selectionEnd - 1).join('');
        } else {
          textArea.innerHTML = textArray.slice(0, textArea.selectionEnd - 1).concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
        }

        cursorPosition -= 1;// post1
        textArea.selectionStart = cursorPosition;
        textArea.selectionEnd = cursorPosition;
        previousKey = `${pressedKeyIndex}`;
      } else if (pressedKeyIndex === '28') { // delete
        if (textArea.selectionEnd === textArea.innerHTML.length) {
          textArea.selectionStart = cursorPosition;
          return;
        }
        textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat(textArray.slice(textArea.selectionEnd + 1, textArea.length)).join('');

        textArea.selectionStart = cursorPosition;
        previousKey = `${pressedKeyIndex}`;
      } else if (pressedKeyIndex === '58') { // space
        if (textArea.selectionEnd === textArea.innerHTML.length) {
          textArea.innerHTML += ' ';
        } else {
          textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat(' ').concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
        }

        cursorPosition += 1;// post1
        textArea.selectionStart = cursorPosition;
        previousKey = `${pressedKeyIndex}`;
      } else if (pressedKeyIndex === '41') { // enter
        if (textArea.selectionEnd === textArea.innerHTML.length) {
          textArea.innerHTML += '\n';
        } else {
          textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat('\n').concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
        }

        cursorPosition += 1;// post1
        textArea.selectionStart = cursorPosition;
        previousKey = `${pressedKeyIndex}`;
      } else if (pressedKeyIndex === '14') { // tab
        if (textArea.selectionEnd === textArea.innerHTML.length) {
          textArea.innerHTML += '\t';
        } else {
          textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat('\t').concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
        }

        cursorPosition += 1;// post1
        textArea.selectionStart = cursorPosition;
        previousKey = `${pressedKeyIndex}`;
      } else if (pressedKeyIndex === '29') { // capslock
        pressedKey.classList.toggle('active');
        previousKey = `${pressedKeyIndex}`;
      } else if (pressedKeyIndex === '42') { // shift
        pressedKey.classList.toggle('active');
        previousKey = `${pressedKeyIndex}`;
      } else if (pressedKeyIndex === '57') { // alt
        if (previousKey === '55') {
          if (lang === 'en') {
            setLocalStorage('lang', 'ru');
          } else if (lang === 'ru') { setLocalStorage('lang', 'en'); }

          changeLanguage();
        }
        previousKey = `${pressedKeyIndex}`;
      } else if (pressedKeyIndex === '55') { // ctrl
        if (previousKey === '57') {
          if (lang === 'en') {
            setLocalStorage('lang', 'ru');
          } else if (lang === 'ru') { setLocalStorage('lang', 'en'); }
          changeLanguage();
        }

        previousKey = `${pressedKeyIndex}`;
      } else if (textArea.selectionEnd === textArea.innerHTML.length) { // regular buttons
        if (keys[pressedKeyIndex].value) {
          if (shiftKey.classList.contains('active') || capsLock.classList.contains('active')) {
            textArea.innerHTML += keys[pressedKeyIndex].shiftedValue;
          } else { textArea.innerHTML += keys[pressedKeyIndex].value; }
        } else if (keys[pressedKeyIndex].en.value) {
          if (shiftKey.classList.contains('active') || capsLock.classList.contains('active')) {
            textArea.innerHTML += keys[pressedKeyIndex][lang].shiftedValue;
          } else { textArea.innerHTML += keys[pressedKeyIndex][lang].value; }
        }

        cursorPosition += 1;// post1
        textArea.selectionStart = cursorPosition;
      } else if (textArea.selectionEnd !== textArea.innerHTML.length) {
        if (keys[pressedKeyIndex].value) {
          if (shiftKey.classList.contains('active') || capsLock.classList.contains('active')) {
            textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat(`${keys[pressedKeyIndex].shiftedValue}`).concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
          } else {
            textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat(`${keys[pressedKeyIndex].value}`).concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
          }
        } else if (keys[pressedKeyIndex].en.value) {
          if (shiftKey.classList.contains('active') || capsLock.classList.contains('active')) {
            textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat(`${keys[pressedKeyIndex][lang].shiftedValue}`).concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
          } else {
            textArea.innerHTML = textArray.slice(0, textArea.selectionEnd).concat(`${keys[pressedKeyIndex][lang].value}`).concat(textArray.slice(textArea.selectionEnd, textArea.length)).join('');
          }
        }

        cursorPosition += 1;// post1
        textArea.selectionStart = cursorPosition;
      }

      if (pressedKeyIndex !== '42') { shiftKey.classList.remove('active'); }
      previousKey = `${pressedKeyIndex}`;

      document.addEventListener('mouseup', () => {
        event.preventDefault();
        pressedKey.classList.remove('pressed');
      });
    }
  }

  document.addEventListener('mousedown', pressKeyVirtual);
}

export default printVirtual;
