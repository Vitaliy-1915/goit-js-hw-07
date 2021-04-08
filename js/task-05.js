const inputElem = document.querySelector('#name-input');
const titleElem = document.querySelector('#name-output');


inputElem.addEventListener('input', onInputChange);


function onInputChange(event) {
    console.log(event.currentTarget.value);
    
    if (inputElem.value.length < 1) {
        titleElem.textContent = 'незнакомец'
    } else (titleElem.textContent = event.currentTarget.value);
}


    
