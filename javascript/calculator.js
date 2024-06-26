let firstNumber = '';
let secondNumber = '';
let operator = '';
let topShowDisplay = '';
let result = '';
let opValue = '';
const operators = ["+", "-", "*", "/", "%"];

function deleteClicked(value) {

    if (value === 'ac') {
        clearValues();
    } else {

        if (opValue != '=') {
            result = '';
        }

        if (operator == '') {
            firstNumber = firstNumber.slice(0, -1);
            topShowDisplay = topShowDisplay.slice(0, -1);
        } else {
            if (secondNumber.length != 0) {
                secondNumber = secondNumber.slice(0, -1);
                topShowDisplay = topShowDisplay.slice(0, -1);
            }
        }
    }
    display();
}

function orangeClicked() {
    switch (arguments[0]) {
        case '+': operate('+');
        break;
        case '-': operate('-');
        break;
        case '*': operate('*');
        break;
        case '/': operate('/');
        break;
        case '%': operate('%');
        break;
        case '=': equalsClicked();
    }
}

function equalsClicked() {
    if (firstNumber !== '' && secondNumber !== '') {
        result = calculate(operator, firstNumber, secondNumber).toString();
        firstNumber = result;
        secondNumber = '';
        let resultNum = +result;

        if(resultNum > 999999999999){
            topShowDisplay = resultNum.toExponential(4);
        } else {
            topShowDisplay = resultNum.toLocaleString();
        }

        if (result == 'DUMMY')
            setTimeout(function () {
                clearValues();
            }, 1000);
    }
    opValue = '=';
    let operatorCheck = topShowDisplay[topShowDisplay.length - 1];
    if (!operators.includes(operatorCheck))

        if (firstNumber !== '')
            topShowDisplay = topShowDisplay + operator;

    display();
}

function operate(){
    if (firstNumber !== '' && secondNumber !== '') {
        result = calculate(operator, firstNumber, secondNumber).toString();
        firstNumber = result;
        secondNumber = '';
        let resultNum = +result;

        if(resultNum > 999999999999){
            topShowDisplay = resultNum.toExponential(4);
        } else {
            topShowDisplay = resultNum.toLocaleString();
        }

        if (result == 'DUMMY')
            setTimeout(function() {
                clearValues();
            }, 1000);
    } else {
        let operatorCheck = topShowDisplay[topShowDisplay.length - 1];
        if (operators.includes(operatorCheck))
            topShowDisplay = topShowDisplay.slice(0, -1);
    }
    opValue = '';
    operator = arguments[0];
    let operatorCheck = topShowDisplay[topShowDisplay.length - 1];
    if (!operators.includes(operatorCheck))

        if (firstNumber !== '')
            topShowDisplay = topShowDisplay + operator;

    display();
}

function numbersClicked(value) {

    if (operator == '-' && firstNumber == '') {
        firstNumber = firstNumber + '-';
        topShowDisplay = topShowDisplay + '-';
        operator = '';
    }

    if (operator !== '-' && firstNumber == '') {
        operator = '';
    }

    if (operator == '') {
        if (firstNumber.length < 9) {
            if (value == '.' && firstNumber.includes('.')) {
                value = '';
            } else {
                firstNumber = firstNumber + value;
                topShowDisplay = topShowDisplay + value;
            }
        } else {
            value = '';
        }
    } else {
        if (secondNumber.length < 9) {
            if (value == '.' && secondNumber.includes('.')) {
                value = '';
            } else {
                secondNumber = secondNumber + value;
                topShowDisplay = topShowDisplay + value;
            }
        } else {
            value = '';
        }
    }
    display(value);
}

function calculate(operator, firstNumber, secondNumber) {

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
    let answer = num2 * num1;
    if (answer % 1 !== 0) {
        return answer.toFixed(12);
    } else {
       return answer;
    }
}

function divide(num1, num2) {
    if (num2 == 0) return "DUMMY";
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

function display(numberClicked) {
    let bottomTextArea = document.querySelector(".bottom");
    let topTextArea = document.querySelector(".top");
    if (result == '' || firstNumber !== '' && secondNumber !== '') {
        topTextArea.textContent = topShowDisplay;
        bottomTextArea.textContent = numberClicked;
    } else {
        let resultNum = +result;
        if (resultNum < 999999999999) {
            bottomTextArea.textContent = resultNum.toLocaleString();
        } else {
            bottomTextArea.textContent = resultNum.toExponential(4);
        }
        
    }
}