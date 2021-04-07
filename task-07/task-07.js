const textElem = document.querySelector('#text');
const inputElem = document.querySelector('#font-size-control');

console.log(textElem);
console.log(inputElem);

inputElem.addEventListener('input', onChengeFontSize);

function onChengeFontSize(event) {
    console.log(event.currentTarget.value);

    textElem.style.fontSize = event.currentTarget.value + 'px';
    
}