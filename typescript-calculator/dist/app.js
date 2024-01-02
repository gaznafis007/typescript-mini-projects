"use strict";
const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');
const btnFour = document.getElementById('btn-four');
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
btnThree.onclick = function () {
    let value = getValueFromElement('btn-three');
    let inputDisplay = document.getElementById('input-display');
    inputDisplay === null || inputDisplay === void 0 ? void 0 : inputDisplay.innerText = value;
};
btnFour.onclick = function () {
    let value = getValueFromElement('btn-four');
    let inputDisplay = document.getElementById('input-display');
    inputDisplay === null || inputDisplay === void 0 ? void 0 : inputDisplay.innerText = value;
};
