"use strict";
// const btnOne = document.getElementById('btn-one') as HTMLElement;
// const btnTwo = document.getElementById('btn-two') as HTMLElement;
// const btnThree = document.getElementById('btn-three') as HTMLElement;
// const btnFour = document.getElementById('btn-four') as HTMLElement;
let handleReset = document.getElementById('reset');
let cancelDigit = document.getElementById('cancel-digit');
let inputDisplay = document.getElementById('input-display');
let outputDisplay = document.getElementById('output-display');
let actionDisplay = document.getElementById('action-display');
let resultBtn = document.getElementById('result');
// AC BUTTON
handleReset.addEventListener('click', () => {
    inputDisplay.innerText = '';
});
cancelDigit.addEventListener('click', () => {
    let inputValue = inputDisplay.innerText;
    let digitLength = inputDisplay.innerText.length;
    console.log(inputValue);
    inputDisplay.innerText = inputValue.slice(0, digitLength - 1);
});
// RESULT BUTTON
resultBtn.addEventListener("click", () => {
    let inputValue = inputDisplay.innerText;
    if (inputValue.includes('+')) {
        let inputValues = inputDisplay.innerText.split('+');
        actionDisplay.innerText = '+';
        let inputNumbers = [...inputValues.map(value => {
                return parseFloat(value);
            })];
        let finalResult = inputNumbers.reduce((prev, curr) => prev + curr, 0);
        outputDisplay.innerText = finalResult.toString();
        console.log(finalResult);
    }
    if (inputValue.includes('-')) {
        let inputValues = inputDisplay.innerText.split('-');
        actionDisplay.innerText = '-';
        let inputNumbers = [...inputValues.map(value => {
                return parseFloat(value);
            })];
        let finalResult = inputNumbers.reduce((prev, curr) => prev - curr, 0);
        outputDisplay.innerText = finalResult.toString();
        console.log(finalResult);
    }
    if (inputValue.includes('X')) {
        let inputValues = inputDisplay.innerText.split('X');
        actionDisplay.innerText = 'X';
        let inputNumbers = [...inputValues.map(value => {
                return parseFloat(value);
            })];
        let finalResult = inputNumbers.reduce((prev, curr) => prev * curr, 1);
        outputDisplay.innerText = finalResult.toString();
        console.log(finalResult);
    }
    if (inputValue.includes('/')) {
        let inputValues = inputDisplay.innerText.split('/');
        actionDisplay.innerText = '/';
        let inputNumbers = [...inputValues.map(value => {
                return parseFloat(value);
            })];
        let finalResult = inputNumbers.reduce((prev, curr) => prev / curr, 1);
        outputDisplay.innerText = finalResult.toString();
        console.log(finalResult);
    }
});
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