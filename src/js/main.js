import { renderTitle, renderInfo, createTextarea } from './renderTextarea.js';

import createKeyboard from './renderKeyboard.js';

import { printReal } from './useRealKeyboard.js';

import { printVirtual } from './useVirtualKeyboard.js';

renderTitle();
renderInfo();
createTextarea();
createKeyboard();
printReal();
printVirtual();
