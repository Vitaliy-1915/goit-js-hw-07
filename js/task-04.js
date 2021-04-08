const counterValue = {
    value: 0,

    decrement() {
        this.value -= 1;
    },

    increment() {
        this.value += 1;
    },

};

const counterValueElem = document.querySelector('#value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');


decrementButton.addEventListener('click', onSelectBtnDecrement);

function onSelectBtnDecrement() {
    counterValue.decrement();
    counterValueElem.textContent = counterValue.value;
    
}

incrementButton.addEventListener('click', onSelectBtnIncrement);

function onSelectBtnIncrement() {
    counterValue.increment();
    counterValueElem.textContent = counterValue.value;
    
}



