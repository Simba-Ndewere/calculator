let firstNumber = '';
let secondNumber = '';
let operator = '';
let bottomShow = '';
let topShow = '';
let result = 0;

function deleteClicked(){
    let value = arguments[0];
    console.log(value);
}

function orangeClicked(){
    let value = arguments[0];
    if(value=='-' && firstNumber == ''){
        firstNumber = firstNumber + '-';
    }

    if(value=='+'){
        operator = '+';
    }

    if(value=='-'){
        operator = '-';
    }

    if(value=='*'){
        operator = '*';
    }

    if(value=='/'){
        operator = '/';
    }

    if(value=='='){
        console.log(firstNumber);
        console.log('space');
        console.log(secondNumber);
        console.log('space');
        console.log(operator);
        console.log('space');
        console.log(operate(operator,+firstNumber,+secondNumber));
    }

}

function numbersClicked(){
    let value = arguments[0];
    console.log(operator + 'operator');
    if(operator==''){
        firstNumber = firstNumber + value;
        console.log(firstNumber + 'first');
    }else{
        secondNumber = secondNumber + value;
    }
}

function operate(operator, firstNumber, secondNumber){
    switch(operator){
        case '+': return add(firstNumber,secondNumber);
        
        case '-': return subtract(firstNumber,secondNumber);
        
        case '*': return multiply(firstNumber,secondNumber);
        
        case '/': return divide(firstNumber,secondNumber);
       
        case '%': return percent(firstNumber,secondNumber);
       
    }
}

function add(num1, num2){
    operator = '';
    return num1+num2;
}

function subtract(num1,num2){
    operator = '';
    return num1-num2;
}

function multiply(num1, num2){
    operator = '';
    return num1*num2;
}

function divide(num1, num2){
    operator = '';
    return num1/num2;
}

function percent(num1, num2){
    operator = '';
    return num1%num2;
}