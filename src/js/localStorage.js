export function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

export function getLocalStorage(key, defaultValue = 'en') {
  return localStorage.getItem(key) || defaultValue;
}
