let firstNumber = '';
let secondNumber = '';
let operator = '';
let topShowDisplay = '';
let result = 0;

const operators = ["+", "-", "*", "/", "%", "="];

function deleteClicked(value) {
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
            topShowDisplay = result;
        }else{
            let operatorCheck = topShowDisplay[topShowDisplay.length -1];
            if(operators.includes(operatorCheck))
            topShowDisplay = topShowDisplay.slice(0,-1);
        }
        operator = '+';
    }

    if (value == '-') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber);
            firstNumber = result;
            secondNumber = '';
            topShowDisplay = result;
        }else{
            let operatorCheck = topShowDisplay[topShowDisplay.length -1];
            if(operators.includes(operatorCheck))
            topShowDisplay = topShowDisplay.slice(0,-1);
        }
        operator = '-';
    }

    if (value == '*') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber);
            firstNumber = result;
            secondNumber = '';
            topShowDisplay = result;
        }else{
            let operatorCheck = topShowDisplay[topShowDisplay.length -1];
            if(operators.includes(operatorCheck))
            topShowDisplay = topShowDisplay.slice(0,-1);
        }
        operator = '*';
    }

    if (value == '/') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber);
            firstNumber = result;
            secondNumber = '';
            topShowDisplay = result;
        }else{
            let operatorCheck = topShowDisplay[topShowDisplay.length -1];
            if(operators.includes(operatorCheck))
            topShowDisplay = topShowDisplay.slice(0,-1);
        }
        operator = '/';
    }

    if (value == '%') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber);
            firstNumber = result;
            secondNumber = '';
            topShowDisplay = result;
        }else{
            let operatorCheck = topShowDisplay[topShowDisplay.length -1];
            if(operators.includes(operatorCheck))
            topShowDisplay = topShowDisplay.slice(0,-1);
        }
        operator = '%';
    }

    if (value == '=') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber);
            firstNumber = result;
            secondNumber = '';
            topShowDisplay = result;
        }
    }

    let operatorCheck = topShowDisplay[topShowDisplay.length -1];
    if(!operators.includes(operatorCheck)) 
        topShowDisplay = topShowDisplay + operator;

    display();
}

function numbersClicked(value) {

    if(operator == ''){
        firstNumber = firstNumber + value;
    }else {
        secondNumber = secondNumber + value;
    }
    topShowDisplay = topShowDisplay + value;
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
    return (num2 * num1) / 100;
}

function clearValues() {
    let bottomTextArea = document.querySelector(".bottom");
    let topTextArea = document.querySelector(".top");

    firstNumber = '';
    secondNumber = '';
    operator = '';
    topShowDisplay = '';
    result = 0;

    topTextArea.textContent = '';
    bottomTextArea.textContent = '';
}

function display(numberClicked){
    let bottomTextArea = document.querySelector(".bottom");
    let topTextArea = document.querySelector(".top");

    if(result == 0){
        topTextArea.textContent = topShowDisplay;
        bottomTextArea.textContent = numberClicked;
    }else{
        bottomTextArea.textContent = result;
    }

    if(firstNumber !== '' && secondNumber !== ''){
        topTextArea.textContent = topShowDisplay;
        bottomTextArea.textContent = result;
        if(result == 0) bottomTextArea.textContent = numberClicked;
    }
}