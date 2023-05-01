import { renderTitle, renderInfo, createTextarea } from './render_textarea.js';

import createKeyboard from './render_keyboard.js';

import { printReal } from './useRealKeyboard.js';

import { printVirtual } from './useVirtualKeyboard.js';

renderTitle();
renderInfo();
createTextarea();
createKeyboard();
printReal();
printVirtual();
