const display = document.querySelector('h1')
const buttons = document.querySelectorAll('button');
const clearBtn = document.querySelector('.clear')


//variables 
let firstValue = 0;
let operatorValue = '';
let nextInOueue = false
const calculation = {
    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
    '=': (firstNumber, secondNumber) => secondNumber,
}

// console.log(buttons)

//Functions
function displayItem(item){
    if(nextInOueue){
        display.textContent = item;
        nextInOueue = false;
    }else{
        let displayValue = display.textContent;
        display.innerText = displayValue == 0 ? item : displayValue + item;
    }

    
}

function useOperator(operator){                                                     
      const currentValue = Number(display.textContent);
      if(!firstValue){
          firstValue = currentValue
      }else{
          //console.log(currentValue)
          const calculate = calculation[operatorValue](firstValue, currentValue);
          display.textContent = calculate;
          firstValue = calculate

      }
    //   console.log(firstValue)
    //   console.log(operator)
      nextInOueue = true;
      operatorValue = operator
}

function addDecimal(){
if(nextInOueue){
    return;
}

    if(!display.textContent.includes('.')){
        display.textContent = `${display.textContent}.`;
    }
}

function reset(){
    let firstValue = 0;
   let operatorValue = '';
   let nextInOueue = false;
    display.textContent = '0'
}


//Event Listeners
buttons.forEach((inputBtn) => {
    if(inputBtn.classList.length == 0) {
        inputBtn.addEventListener('click', () => displayItem(inputBtn.value))
    }
    else if(inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value))
    }
    else if(inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click', () => addDecimal())
    }
})

clearBtn.addEventListener('click', reset)