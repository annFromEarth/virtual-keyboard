import keys from "./keys _en_ru_.js";

export function create_keyboard(){
    let keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    document.body.append(keyboard);

    for (let i=0; i<keys.length; i++){

        let key = document.createElement('div');
        key.className = 'key';

        if (keys[i].name) {
            key.classList.add(`${keys[i].name}`);//add special class to backspace, tab, delete, capslock, enter, shifts, ctrls, alts, space, os, arrows
        }

        if (keys[i].value) {
            key.innerHTML = keys[i].value;
        } else {
            key.innerHTML = keys[i].en.value;
        }

        keyboard.append(key);
    }
}