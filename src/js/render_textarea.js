export function createTextarea() {
  const textarea = document.createElement('div');
  textarea.className = 'textarea';
  document.body.append(textarea);
}

export function renderTitle() {
  const title = document.createElement('div');
  title.className = 'title';
  title.innerText = 'RSS ~~ Virtual Keyboard';
  document.body.append(title);
}

export function renderInfo() {
  const info = document.createElement('div');
  info.className = 'info';
  info.innerText = '* created in Windows OS \n* for language change press Shift+Alt';
  document.body.append(info);
}
