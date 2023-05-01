export function createTextarea() {
  const textareaWrapper = document.createElement('div');
  textareaWrapper.className = 'textarea_wrapper';
  document.body.append(textareaWrapper);

  const textarea = document.createElement('textarea');
  textarea.className = 'textarea';
  textareaWrapper.append(textarea);
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
  info.innerText = '* created in Windows OS \n* for language change press CTRL+ALT';
  document.body.append(info);
}
