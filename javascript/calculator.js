let firstNumber = '';
let secondNumber = '';
let operator = '';
let topShow = '';
let result = 0;

function deleteClicked() {
    let value = arguments[0];
}

function orangeClicked() {
    let value = arguments[0];

    if (value == '+') {
        operator = '+';
    }

    if (value == '-') {
        operator = '-';
    }

    if (value == '*') {
        operator = '*';
    }

    if (value == '/') {
        operator = '/';
    }

    if (value == '=') {
        result = operate(operator, firstNumber, secondNumber);
        console.log(result);
    }
    topShow = topShow + operator;
    display();
}

function numbersClicked(value) {
    if(operator == ''){
        firstNumber = firstNumber + value;
        topShow = topShow + value;
    }else {
        secondNumber = secondNumber + value;
        topShow = topShow + value;
    }
    display(value);
}

function operate(operator, firstNumber, secondNumber) {
    console.log("called: " + operator);
    let first = +firstNumber;
    let second = +secondNumber;

    switch (operator) {
        case '+': return add(first, second);
        case '-': return subtract(first, second);
        case '*': return multiply(first, second);
        case '/': return divide(first, second);
        case '%': return percent(first, second);
    }
}

function add(num1, num2) {
    operator = '';
    console.log("add");
    console.log(num1 + num2);
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
    top = '';
}

function display(value){
    let bottom = document.querySelector(".bottom");
    let top = document.querySelector(".top");

    if(result == 0){
        top.textContent = topShow;
        bottom.textContent = value;
    }else{
        bottom.textContent = result;
    }
}