const inputElem = document.querySelector('#validation-input');
inputElem.classList.add('validation-input');
console.log(inputElem);




inputElem.addEventListener('focus', onInputFocus);

function onInputFocus(event) {
    console.log(event.currentTarget);
    
};

inputElem.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.log(event.currentTarget);

    console.log(inputElem.value.length);

    if (inputElem.value.length === 6) {
        inputElem.classList.add('valid'),
        inputElem.classList.remove('invalid')
    } else if (inputElem.value.length === 0) {
        inputElem.classList.remove('validation-input')
    }
    else (inputElem.classList.add('invalid'),
          inputElem.classList.remove('valid'));
}