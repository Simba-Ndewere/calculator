let firstNumber = '';
let secondNumber = '';
let operator = '';
let topShowDisplay = '';
let result = '';
let opValue = '';
const operators = ["+", "-", "*", "/", "%"];

function deleteClicked(value) {
    
    if(value==='ac'){
        clearValues();
    }else{
        
        if(opValue != '='){
            result = '';
        }

        if(firstNumber!='' && operator == ''){
            console.log('first' + firstNumber);
            firstNumber = firstNumber.slice(0,-1);
            topShowDisplay = topShowDisplay.slice(0,-1);
        }

        if(operator !='' && secondNumber == ''){
            operator = operator.slice(0,-1);
            topShowDisplay = topShowDisplay.slice(0,-1);
        }

        if(secondNumber != ''){
            secondNumber = secondNumber.slice(0,-1);
            topShowDisplay = topShowDisplay.slice(0,-1);
        }


    }
    display();
}

function orangeClicked() {
    let value = arguments[0];
    if (value == '+') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber).toString();
            firstNumber = result;
            secondNumber = '';
            topShowDisplay = result;
            if(result == 'ERROR')
            setTimeout(function () {
               clearValues();
            }, 1000);
        }else{
            let operatorCheck = topShowDisplay[topShowDisplay.length -1];
            if(operators.includes(operatorCheck))
            topShowDisplay = topShowDisplay.slice(0,-1);
        }
        operator = '+';
        opValue = '';
    }

    if (value == '-') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber).toString();
            firstNumber = result;
            secondNumber = '';
            topShowDisplay = result;
            if(result == 'ERROR')
            setTimeout(function () {
               clearValues();
            }, 1000);
        }else{
            let operatorCheck = topShowDisplay[topShowDisplay.length -1];
            if(operators.includes(operatorCheck))
            topShowDisplay = topShowDisplay.slice(0,-1);
        }
        operator = '-';
        opValue = '';
    }

    if (value == '*') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber).toString();
            firstNumber = result;
            secondNumber = '';
            topShowDisplay = result;
            if(result == 'ERROR')
            setTimeout(function () {
               clearValues();
            }, 1000);
        }else{
            let operatorCheck = topShowDisplay[topShowDisplay.length -1];
            if(operators.includes(operatorCheck))
            topShowDisplay = topShowDisplay.slice(0,-1);
        }
        operator = '*';
        opValue = '';
    }

    if (value == '/') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber).toString();
            firstNumber = result;
            secondNumber = '';
            topShowDisplay = result;
            if(result == 'ERROR')
            setTimeout(function () {
               clearValues();
            }, 1000);
        }else{
            let operatorCheck = topShowDisplay[topShowDisplay.length -1];
            if(operators.includes(operatorCheck))
            topShowDisplay = topShowDisplay.slice(0,-1);
        }
        operator = '/';
        opValue = '';
    }

    if (value == '%') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber).toString();
            firstNumber = result;
            secondNumber = '';
            topShowDisplay = result;
            if(result == 'ERROR')
            setTimeout(function () {
               clearValues();
            }, 1000);
        }else{
            let operatorCheck = topShowDisplay[topShowDisplay.length -1];
            if(operators.includes(operatorCheck))
            topShowDisplay = topShowDisplay.slice(0,-1);
        }
        operator = '%';
        opValue = '';
    }

    if (value == '=') {
        if(firstNumber !== '' && secondNumber !== ''){
            result = operate(operator,firstNumber,secondNumber).toString();
            firstNumber = result;
            secondNumber = '';
            topShowDisplay = result;
            if(result == 'ERROR')
            setTimeout(function () {
               clearValues();
            }, 1000);
        }
        opValue = '=';
    }

    let operatorCheck = topShowDisplay[topShowDisplay.length -1];
    if(!operators.includes(operatorCheck)) 
        
        if(firstNumber!== '' || operator === '-')
            topShowDisplay = topShowDisplay + operator;

    display();
}

function numbersClicked(value) {
    
    if(operator == '-' && firstNumber == ''){
        firstNumber = firstNumber + '-';
        operator = '';
    }

    if(operator !== '-' && firstNumber == ''){
        operator = '';
    }

    if(operator == ''){
        if(firstNumber.length < 9){
            firstNumber = firstNumber + value;
        }
    }else {
        if(secondNumber.length < 9){
            secondNumber = secondNumber + value;
        }
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
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 == 0) return "ERROR";
    return num1 / num2;
}

function percent(num1, num2) {
    return (num2 * num1) / 100;
}

function clearValues() {
    let bottomTextArea = document.querySelector(".bottom");
    let topTextArea = document.querySelector(".top");

    firstNumber = '';
    secondNumber = '';
    operator = '';
    topShowDisplay = '';
    result = '';

    topTextArea.textContent = '';
    bottomTextArea.textContent = '';
}

function display(numberClicked){
    let bottomTextArea = document.querySelector(".bottom");
    let topTextArea = document.querySelector(".top");

    if(result == '' || firstNumber !== '' && secondNumber !== ''){
        topTextArea.textContent = topShowDisplay;
        bottomTextArea.textContent = numberClicked;
    }else{
        bottomTextArea.textContent = result;
    }
}