// const btnOne = document.getElementById('btn-one') as HTMLElement;
// const btnTwo = document.getElementById('btn-two') as HTMLElement;
// const btnThree = document.getElementById('btn-three') as HTMLElement;
// const btnFour = document.getElementById('btn-four') as HTMLElement;
let handleReset = document.getElementById('reset') as HTMLElement;
let cancelDigit = document.getElementById('cancel-digit') as HTMLElement;
let inputDisplay = document.getElementById('input-display') as HTMLElement;
let outputDisplay = document.getElementById('output-display') as HTMLElement;
let actionDisplay = document.getElementById('action-display') as HTMLElement;
let resultBtn = document.getElementById('result') as HTMLElement;

// AC BUTTON
handleReset.addEventListener('click', ()=>{
    inputDisplay.innerText='';
    outputDisplay.innerText = '';
    actionDisplay.innerText = '';
})
cancelDigit.addEventListener('click', ()=>{
    let inputValue = inputDisplay.innerText
    let digitLength = inputDisplay.innerText.length;
    console.log(inputValue);
    inputDisplay.innerText = inputValue.slice(0,digitLength-1);
})

// RESULT BUTTON
resultBtn.addEventListener("click", ()=>{
    let inputValue = inputDisplay.innerText;
    if(inputValue.includes('+')){
        let inputValues = inputDisplay.innerText.split('+')
        actionDisplay.innerText = '+'
        let inputNumbers = [...inputValues.map(value=>{
            return parseFloat(value)

        })]
        let finalResult = inputNumbers.reduce((prev,curr)=>prev+curr, 0)
        outputDisplay.innerText=finalResult.toString()
        console.log(finalResult);    
    }
    if(inputValue.includes('-')){
        let inputValues = inputDisplay.innerText.split('-')
        actionDisplay.innerText = '-'
        let inputNumbers = [...inputValues.map(value=>{
            return parseFloat(value)
        })]
        let finalResult = inputNumbers.reduce((prev,curr)=>prev-curr)
        outputDisplay.innerText=finalResult.toString()
        console.log(finalResult);   
    }
    if(inputValue.includes('X')){
        let inputValues = inputDisplay.innerText.split('X')
        actionDisplay.innerText = 'X'
        let inputNumbers = [...inputValues.map(value=>{
            return parseFloat(value)
        })]
        let finalResult = inputNumbers.reduce((prev,curr)=>prev*curr, 1)
        outputDisplay.innerText=finalResult.toString()
        console.log(finalResult);   
    }
    if(inputValue.includes('/')){
        let inputValues = inputDisplay.innerText.split('/')
        actionDisplay.innerText = '/'
        let inputNumbers = [...inputValues.map(value=>{
            return parseFloat(value)
        })]

        let finalResult = inputNumbers.reduce((prev,curr)=>{
            console.log(prev);
            console.log(curr);
            console.log(inputNumbers[0]);
            return inputNumbers[0]/curr
        },inputNumbers[0])
        outputDisplay.innerText=finalResult.toString()
        console.log(finalResult);    
    }
    
})


// btnOne.onclick= function(){
//     let value= getValueFromElement('btn-one')
//    let inputDisplay = document.getElementById('input-display') as HTMLElement
//    let textOfInput =inputDisplay?.innerText;
//    textOfInput!=value
// }
// btnTwo.onclick= function (){
//    let value= getValueFromElement('btn-two')
//    let inputDisplay = document.getElementById('input-display') as HTMLElement
//    let textOfInput =inputDisplay?.innerText;
//    textOfInput!=value
// }
// btnThree.onclick= function (){
//    let value= getValueFromElement('btn-three')
//    let inputDisplay = document.getElementById('input-display') as HTMLElement
//    inputDisplay?.innerText=value
// }
// btnFour.onclick= function (){
//    let value= getValueFromElement('btn-four')
//    let inputDisplay = document.getElementById('input-display') as HTMLElement
//    inputDisplay?.innerText=value;
// }