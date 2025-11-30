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
    let btn ='';
    if(e.key!=='undefine'){
        btn = e.key;
    }else{
        btn = e.target.id.split('')[1];
    }
    if(btn=='+'||btn=='-'||btn=='*'||btn=='/'){
        if(number1==''){ 
            number1=Number(display.textContent);
            decimal.point=false;
            decimal.number=false;
        }else if(operator!=''){
            decimal.point=false;
            decimal.number=false;
            number1=Number(number1);
            number2=Number(number2);
            display.textContent=operate(number1,number2,operator);
            number1=operate(number1,number2,operator);
            number2='';
        }
        decimal.point=false;
        decimal.number=false;
        operator=btn;
        display.textContent+=btn;
    }else if(btn=='.'){
        if(decimal.point==false){
            decimal.point=true;
            if(operator!==''){
                number2+=btn;
                display.textContent+=btn;
            }else if(number1!==''){
                number1=String(number1).split('');
                number1.push('.');
                number1=number1.join('');
                display.textContent+=btn;
            }else{
                display.textContent+=btn;
            }
        }
    }else if(btn=='='){
        decimal.point=false;
        decimal.number=false;
        number1=Number(number1);
        number2=Number(number2);
        display.textContent=operate(number1,number2,operator);
        number1=operate(number1,number2,operator);
        number2='';
        operator='';
    }else if(btn=='d'){
        if(number2!==''){
            number2=number2.split('');
            number2.pop();
            number2=number2.join('');
            let display2=display.textContent.split('');
            display2.pop();
            display.textContent=display2.join('');
        }else if(operator!==''){
            operator='';
            let display2=display.textContent.split('');
            display2.pop();
            display.textContent=display2.join('');
        }else{
            if(number1!==''){
                number1=String(number1).split('');
                number1.pop();
                number1=Number(number1.join(''));
                let display2=display.textContent.split('');
                display2.pop();
                display.textContent=display2.join('');   
            }else{
                let display2=display.textContent.split('');
                display2.pop();
                display.textContent=display2.join('');
            }
            if(display.textContent.includes('.')!==false){
                decimal.point=false;
                decimal.number=false;
            }
        }
    }else if(btn=='c'){
        display.textContent='';
        number1='';
        number2='';
        result='';
        operator='';
        decimal.point=false;
        decimal.number=false;
    }else if(btn=='1'||btn=='2'||btn=='3'||btn=='4'||btn=='5'||btn=='6'||btn=='7'||btn=='8'||btn=='9'||btn=='0'){
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
                }else{//fix this
                    number1=String(number1).split('');
                    number1.push(btn);
                    number1=Number(number1.join(''));
                    display.textContent+=btn;
                    decimal.number=true;
                }
            }else{
                display.textContent+=btn;
                decimal.number=true;
            }
        }
    }
}

const display = document.querySelector('#display');
const buttons = document.querySelector('#buttons');
const body = document.querySelector('body');

buttons.addEventListener('click', handle);
body.addEventListener('keyup', handle);