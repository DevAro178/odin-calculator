let screen=document.querySelector('div.display')
let keysContainer=document.querySelector('div.keys')
let firstNumber=''
let secondNumber=''
let firstOperator=''
let secondOperator=''
let result;

const display=(data)=>{
    screen.textContent=data.toString()
}

const addNum=(x,y)=>{
    return x+y
}

const subtractNum=(x,y)=>{
    return x-y
}

const multiplyNum=(x,y)=>{
    return x*y
}

const divideNum=(x,y)=>{
    return x/y
}

const moduloNum=(x,y)=>{
    return x%y
}

const changeSign=()=>{
    if(secondNumber==''){
        firstNumber.includes('-') ? firstNumber=firstNumber.replace('-','') : firstNumber='-'+firstNumber
        display(firstNumber)
    }else{
        secondNumber.includes('-') ? secondNumber=secondNumber.replace('-','') : secondNumber='-'+secondNumber
        display(secondNumber)
    }
}

const calculate=()=>{
    if(firstNumber!='' || secondNumber!='' || firstOperator!=''){
        switch(firstOperator){
            case '%':
                result=moduloNum(parseFloat(firstNumber),parseFloat(secondNumber)).toFixed(2)
                break
            case '/':
                result=divideNum(parseFloat(firstNumber),parseFloat(secondNumber)).toFixed(2)
                break
            case '*':
                result=multiplyNum(parseFloat(firstNumber),parseFloat(secondNumber)).toFixed(2)
                break
            case '-':
                result=subtractNum(parseFloat(firstNumber),parseFloat(secondNumber)).toFixed(2)
                break
            case '+':
                result=addNum(parseFloat(firstNumber),parseFloat(secondNumber)).toFixed(2)
                break
        }
        display(result)
        firstNumber=result.toString()
        firstOperator=secondOperator
        secondNumber=''
        secondOperator=''
    }
}


keysContainer.addEventListener('click',e=>{
    const divValue=e.target.dataset.value
    switch(divValue){
        case '%':
        case '/':
        case '*':
        case '-':
        case '+':
            if(secondNumber=='')
                firstOperator=divValue
            else{
                secondOperator=divValue
                calculate();
            }
            break
        case '=':
            calculate()
            break
        case '+/-':
            changeSign()
            break
        case 'ac':
            firstNumber=''
            secondNumber=''
            firstOperator=''
            secondOperator=''
            result=null;
            display(0)
            break
        default:
            if(firstOperator==''){
                firstNumber=firstNumber.concat(divValue)
                display(firstNumber)
            }else{
                secondNumber=secondNumber.concat(divValue)
                display(secondNumber)
            }
    }
})