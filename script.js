function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}

let number1 = 0;
let number2 = 0;
let operator = '';

function operate(number1, number2, operator){
    switch(operator){
        case '+':
            return add(number1,number2);
        case '-':
            return subtract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            return divide(number1, number2);
        default:
            return 'Operator not supported';
    }
}