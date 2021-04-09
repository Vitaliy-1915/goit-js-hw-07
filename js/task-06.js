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

    if (inputElem.value.length === Number(inputElem.dataset.length)) {
        inputElem.classList.add('valid'),
        inputElem.classList.remove('invalid')
    } else if (inputElem.value.length < 1) {
        inputElem.classList.remove('valid'),
        inputElem.classList.remove('invalid')
    }
    else (inputElem.classList.add('invalid'),
          inputElem.classList.remove('valid'));
}