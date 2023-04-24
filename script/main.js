//Gunish Sharma

/*----- constants -----*/   	

const emptyDisplay = ''

/*----- state variables -----*/

let firstNum;
let secondNum;
let result;
let operator;

/*----- cached elements  -----*/  

const boardEls =[...document.querySelectorAll('#board > button')]
const operatorEls =[...document.querySelectorAll('#operators > button')]
const display = document.querySelector('#display > h1')
const equalsBtnEl = document.querySelector("#equals")
const clearBtn = document.getElementById("c")

/*----- event listeners -----*/

for(let numBtns of boardEls){
    numBtns.addEventListener('click',handleNumClick)
}
for(let operatorBtns of operatorEls){
    operatorBtns.addEventListener('click',handleOperClick)
}
equalsBtnEl.addEventListener('click',handleEqualsClick)
clearBtn.addEventListener('click',clearAll)

/*----- functions -----*/
init()
function init(){
    firstNum = 0
    secondNum = 0
    result = 0
    operator = null
    //display.innerText = 'Enter a Num...'
    
}


function handleNumClick(e){
    const clickedNum = e.currentTarget.getAttribute('id')
    console.log('clicked Num',clickedNum)
    display.innerHTML = display.innerHTML +clickedNum
    
}

function handleOperClick(e){
    firstNum = parseInt(display.innerHTML)
    console.log('the first num is',firstNum)
    operator = e.currentTarget.getAttribute('id')
    console.log(operator)
    clearDisplay()

    
}

function handleEqualsClick(){
    secondNum = parseInt(display.innerHTML)
    console.log('second num is',secondNum)
    clearDisplay()
    result = doMath(firstNum,secondNum,operator)
    console.log('The result is',result)
    display.innerHTML = result
    
    
    firstNum =result
}


function doMath(num1,num2,operation){
  
    if(operation === "+"){
      let result = num1+num2
      return result
    } else if (operation === "-"){
      let result = num1-num2
      return result
    } else if (operation === "*"){
      let result = num1*num2
      return result
    }else if (operation === "/"){
      let result = num1/num2
      return result
    }
  
  }

function clearDisplay(){
    display.innerText =emptyDisplay
}

function clearAll(){
    firstNum = 0
    secondNum = 0
    result = 0
    display.innerText =emptyDisplay
}
