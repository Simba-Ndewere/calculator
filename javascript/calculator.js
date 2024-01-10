let currentNumber = 0;
let secondNumber = 0;
let operator = '';

function operate(operator, currentNumber, secondNumber){
    switch(operator){
        case '+': add(currentNumber,secondNumber);
        break;
        case '-': subtract(currentNumber,secondNumber);
        break;
        case '*': multiply(currentNumber,secondNumber);
        break;
        case '/': divide(currentNumber,secondNumber);
        break;
    }
}

function add(num1, num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}