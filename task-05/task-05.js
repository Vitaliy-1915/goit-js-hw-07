const input = document.querySelector('#name-input');
const titleElem = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);


function onInputChange(event) {
    console.log(event.currentTarget.value);
    
    titleElem.textContent = event.currentTarget.value;
}

