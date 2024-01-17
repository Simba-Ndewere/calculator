let firstNumber = '';
let secondNumber = '';
let operator = '';
let topShow = '';
let result = 0;

const operators = ["+", "-", "*", "/", "%", "="];

function deleteClicked(value) {
    //let value = arguments[0];
    if(value==='ac'){
        clearValues();
    }else{

    }
}

function orangeClicked() {
    let value = arguments[0];

    if (value == '+') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber);
            firstNumber = result;
            secondNumber = '';
            topShow = result;
        }
        operator = '+';
    }

    if (value == '-') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber);
            firstNumber = result;
            secondNumber = '';
            topShow = result;
        }
        operator = '-';
    }

    if (value == '*') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber);
            firstNumber = result;
            secondNumber = '';
            topShow = result;
        }
        operator = '*';
    }

    if (value == '/') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber);
            firstNumber = result;
            secondNumber = '';
            topShow = result;
        }
        operator = '/';
    }

    if (value == '=') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber);
            firstNumber = result;
            secondNumber = '';
            topShow = result;
        }
    }

    let operatorCheck = topShow[topShow.length -1];
    if(!operators.includes(operatorCheck)) 
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
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function percent(num1, num2) {
    return num1 % num2;
}

function clearValues() {
    let bottom = document.querySelector(".bottom");
    let top = document.querySelector(".top");

    firstNumber = '';
    secondNumber = '';
    operator = '';
    topShow = '';
    result = 0;

    top.textContent = '';
    bottom.textContent = '';
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

    if(firstNumber !== '' && secondNumber !== ''){
        top.textContent = topShow;
        bottom.textContent = result;
        if(result == 0) bottom.textContent = value;
    }
}