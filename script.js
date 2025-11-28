function add(num1, num2){
    return Number((num1 + num2).toFixed(2));
}

function subtract(num1, num2){
    return Number((num1 - num2).toFixed(2));
}

function multiply(num1,num2){
    return Number((num1 * num2).toFixed(2));
}

function divide(num1, num2){
    return Number((num1/num2).toFixed(2));
}

let number1 = '';
let number2 = '';
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

const display = document.querySelector('#display');
const buttons = document.querySelector('#buttons');

buttons.addEventListener('click', (e)=>{
    switch(e.target.id){
        case 'b1':
            if(number1!==''){
                number2+='1';
                display.textContent+='1';
                break;
            }else{
                display.textContent+='1';
                break;
            }
        case 'b2':
            if(number1!=''){
                number2+='2';
                display.textContent+='2';
                break;
            }else{
                display.textContent+='2';
                break;
            }
        case 'b3':
            if(number1!=''){
                number2+='3';
                display.textContent+='3';
                break;
            }else{
                display.textContent+='3';
                break;
            }
        case 'b4':
            if(number1!=''){
                number2+='4';
                display.textContent+='4';
                break;
            }else{
                display.textContent+='4';
                break;
            }
        case 'b5':
            if(number1!=''){
                number2+='5';
                display.textContent+='5';
                break;
            }else{
                display.textContent+='5';
                break;
            }
        case 'b6':
            if(number1!=''){
                number2+='6';
                display.textContent+='6';
                break;
            }else{
                display.textContent+='6';
                break;
            }
        case 'b7':
            if(number1!=''){
                number2+='7';
                display.textContent+='7';
                break;
            }else{
                display.textContent+='7';
                break;
            }
        case 'b8':
            if(number1!=''){
                number2+='8';
                display.textContent+='8';
                break;
            }else{
                display.textContent+='8';
                break;
            }
        case 'b9':
            if(number1!=''){
                number2+='9';
                display.textContent+='9';
                break;
            }else{
                display.textContent+='9';
                break;
            }
        case 'b0':
            if(number1!=''){
                number2+='0';
                display.textContent+='0';
                break;
            }else{
                display.textContent+='0';
                break;
            }
        case 'b+':
            if(number1==''){ 
                number1=Number(display.textContent);
            }else if(operator!=''){
                number2=Number(number2);
                display.textContent=operate(number1,number2,operator);
                number1=operate(number1,number2,operator);
                number2='';
            }
            operator='+';
            display.textContent+='+';
            break;
        case 'b-':
            if(number1==''){ 
                number1=Number(display.textContent);
            }else if(operator!=''){
                number2=Number(number2);
                display.textContent=operate(number1,number2,operator);
                number1=operate(number1,number2,operator);
                number2='';
            }
            operator='-';
            display.textContent+='-';
            break;
        case 'b*':
            if(number1==''){ 
                number1=Number(display.textContent);
            }else if(operator!=''){
                number2=Number(number2);
                display.textContent=operate(number1,number2,operator);
                number1=operate(number1,number2,operator);
                number2='';
            }
            operator='*';
            display.textContent+='*';
            break;
        case 'b/':
            if(number1==''){ 
                number1=Number(display.textContent);
            }else if(operator!=''){
                number2=Number(number2);
                display.textContent=operate(number1,number2,operator);
                number1=operate(number1,number2,operator);
                number2='';
            }
            operator='/';
            display.textContent+='/';
            break;
        case 'b=':
            number2=Number(number2);
            display.textContent=operate(number1,number2,operator);
            number1=operate(number1,number2,operator);
            number2='';
            operator='';
            break;
        case 'bC':
            display.textContent='';
            number1='';
            number2='';
            operator='';
            break;
    }
});