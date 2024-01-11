let firstNumber = '';
let secondNumber = '';
let operator = '';
let bottomShow = '';
let topShow = '';
let result = 0;

function deleteClicked() {
    let value = arguments[0];
}

function orangeClicked() {
    let value = arguments[0];

    if (value == '-' && firstNumber == '') {
        firstNumber = firstNumber + '-';
    }

    if (value == '+') {
        operator = '+';
    }

    if (value == '-') {
        operator = '-';ct
    }

    if (value == '*') {
        operator = '*';
    }

    if (value == '/') {
        operator = '/';
    }

    if (value == '=') {
        result = operate(operator, +firstNumber, +secondNumber);
        clearValues();
    }
}

function numbersClicked() {
    let value = arguments[0];
    display(value);
    if (operator == '') {
        firstNumber = firstNumber + value;
        operator = '';
    } else {
        secondNumber = secondNumber + value;
    }
}

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+': return add(firstNumber, secondNumber);
        case '-': return subtract(firstNumber, secondNumber);
        case '*': return multiply(firstNumber, secondNumber);
        case '/': return divide(firstNumber, secondNumber);
        case '%': return percent(firstNumber, secondNumber);
    }
}

function add(num1, num2) {
    operator = '';
    return num1 + num2;
}

function subtract(num1, num2) {
    operator = '';
    return num1 - num2;
}

function multiply(num1, num2) {
    operator = '';
    return num1 * num2;
}

function divide(num1, num2) {
    operator = '';
    return num1 / num2;
}

function percent(num1, num2) {
    operator = '';
    return num1 % num2;
}

function clearValues() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
}

function display(value){
    console.log(value);
    let bottom = document.querySelector(".bottom");
    let top = document.querySelector(".top");
    bottom.textContent = value;
    top.textContent = firstNumber + operator + secondNumber;
}