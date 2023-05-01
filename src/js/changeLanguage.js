import { getLocalStorage } from './localStorage.js';
import keys from './keysSource.js';

function changeLanguage() {
  const lang = getLocalStorage('lang');
  const keysRendered = document.querySelectorAll('.key');

  keysRendered.forEach((item) => {
    const { index } = item.dataset;
    if (keys[index].value) {
      const currentItem = item;
      currentItem.innerHTML = keys[index].value;
    } else if (keys[index][lang].value) {
      const currentItem = item;
      currentItem.innerHTML = keys[index][lang].value;
    }
  });
}

export default changeLanguage;
