function add(num1, num2){
    if(Number.isInteger(Number((num1 + num2).toFixed(1)))!=true){
        decimal.point=true;
        decimal.number=true;
    }
    return Number((num1 + num2).toFixed(1));
}

function subtract(num1, num2){
    if(Number.isInteger(Number((num1 + num2).toFixed(1)))!=true){
        decimal.point=true;
        decimal.number=true;
    }
    return Number((num1 - num2).toFixed(1));
}

function multiply(num1,num2){
    if(Number.isInteger(Number((num1 + num2).toFixed(1)))!=true){
        decimal.point=true;
        decimal.number=true;
    }
    return Number((num1 * num2).toFixed(1));
}

function divide(num1, num2){
    if(Number.isInteger(Number((num1 + num2).toFixed(1)))!=true){
        decimal.point=true;
        decimal.number=true;
    }
    return Number((num1/num2).toFixed(1));
}

let number1 = '';
let number2 = '';
let decimal ={point:false, number:false};
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
            if(number2===0){
                return 'ERROR, cannot divide by 0';
            }else{
                return divide(number1, number2);
            }
        default:
            return 'Operation not supported, try again';
    }
}

function handle(e){
    let btn = e.target.id.split('')[1];
    if(btn=='+'||btn=='-'||btn=='*'||btn=='/'){
        if(number1==''){ 
            number1=Number(display.textContent);
            decimal.point=false;
            decimal.number=false;
        }else if(operator!=''){
            number2=Number(number2);
            display.textContent=operate(number1,number2,operator);
            number1=operate(number1,number2,operator);
            number2='';
            decimal.point=false;
            decimal.number=false;
        }
        operator=btn;
        display.textContent+=btn;
    }else if(btn=='.'){
        if(decimal.point==false){
            decimal.point=true;
            if(operator!==''){
                number2+=btn;
                display.textContent+=btn;
            }else{
                display.textContent+=btn;
            }
        }
    }else if(btn=='='){
        number2=Number(number2);
        display.textContent=operate(number1,number2,operator);
        number1=operate(number1,number2,operator);
        number2='';
        operator='';
        decimal.point=false;
        decimal.number=false;
    }else if(btn=='C'){
        display.textContent='';
        number1='';
        number2='';
        result='';
        operator='';
        decimal.point=false;
        decimal.number=false;
    }else{
        if(decimal.point==false){
            if(number1!==''){
                if(operator!==''){
                    number2+=btn;
                    display.textContent+=btn;
                }else{
                    display.textContent='';
                    number1='';
                    display.textContent=btn;
                }
            }else{
                display.textContent+=btn;
            }
        }else if(decimal.point==true&&decimal.number==false){
            if(number1!==''){
                if(operator!==''){
                    number2+=btn;
                    display.textContent+=btn;
                    decimal.number=true;
                }else{//change this
                    number1+=btn;
                    display.textContent+=btn;
                    decimal.number=true;
                }
            }else{
                display.textContent+=btn;
            }
        }
    }
}

const display = document.querySelector('#display');
const buttons = document.querySelector('#buttons');

buttons.addEventListener('click', handle);