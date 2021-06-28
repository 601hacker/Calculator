const screen = document.querySelector('.screen');
const calculatorButtons = document.querySelectorAll('.calc-buttons');
const operands = document.querySelectorAll('.operands');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');

let initialValue;
let operator;
let finalValue;

for(let i = 0; i < calculatorButtons.length; i++) {
    calculatorButtons[i].addEventListener('click', function() {
        screen.innerText += calculatorButtons[i].innerText;
        setup();
    });
}

decimal.addEventListener('click', function() {
    if(screen.innerText.indexOf('.') === -1) {
        screen.innerText += decimal.innerText;
    } else {
        return;
    }
});

for(let i = 0; i < operands.length; i++) {
    operands[i].addEventListener('click', function() {
        screen.innerText = '';
        operator = operands[i].innerText;
        console.log(operator);
    });
}

clear.addEventListener('click', function() {
    screen.innerText = '';
});

// function setup() {
//     initialValue = screen.innerText;

//     console.log(operator);
//     console.log(initialValue);
//     console.log(finalValue);
// }

