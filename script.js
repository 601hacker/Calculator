const screen = document.querySelector('.screen');                       /* DOM */
const calculatorButtons = document.querySelectorAll('.calc-buttons');
const operands = document.querySelectorAll('.operands');        
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');

let initialValue = null;                                                /* Variables */
let operator = null;
let finalValue = null;
let result = null;

for(let i = 0; i < calculatorButtons.length; i++) {                     /* Calculator button screen display */
    calculatorButtons[i].addEventListener('click', function() { 
        if(result == null) {
            screen.innerText += calculatorButtons[i].innerText;
        } else if(result != null) {
            screen.innerText = '';
            initialValue = null;
            finalValue = null;
            operator = null;
            result = null;
            screen.innerText += calculatorButtons[i].innerText;
        }
    });
}

clear.addEventListener('click', function() {                            /* Clear button */
    screen.innerText = '';
    initialValue = null;
    finalValue = null;
    operator = null;
    result = null;
});

decimal.addEventListener('click', function() {                          /* Decimal point */
    if(screen.innerText.indexOf('.') === -1) {
        screen.innerText += decimal.innerText;
    } else {
        return;
    }
});

for(let i = 0; i < operands.length; i++) {                              /* Operands; Initial value is assigned when operand cliked */
    operands[i].addEventListener('click', function() {
        if(result == null) { 
            if(initialValue == null) {
                initialValue = screen.innerText;
            }

            screen.innerText = '';
            if(initialValue != null && operator == null) {
                operator = operands[i].innerText;
            }
        } else if(result != null) {
            initialValue = result;
            result = null;
            operator = operands[i].innerText;
            screen.innerText = '';
            console.log(initialValue);
            console.log(operator); 
        }
    });
}

equal.addEventListener('click', function() {
    if(initialValue != null && operator != null) {
        finalValue = screen.innerText;
        console.log(finalValue);
    }

    if(initialValue!= null && operator != null && finalValue != null) {
        initialValue = parseFloat(initialValue, 10);
        finalValue = parseFloat(finalValue, 10);

        if(operator == '+') {
            result = add(initialValue, finalValue);
            screen.innerText = result;
        } else if(operator == '-') {
            result = substract(initialValue, finalValue);
            screen.innerText = result;
        } else if(operator == '×') {
            result = multiply(initialValue, finalValue);
            screen.innerText = result;
        } else if(operator == '÷') {
            result = divide(initialValue, finalValue);
            screen.innerText = result;
        }
    }
});

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

