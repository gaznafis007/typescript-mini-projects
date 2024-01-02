const btnOne = document.getElementById('btn-one') as HTMLElement;
const btnTwo = document.getElementById('btn-two') as HTMLElement;
const btnThree = document.getElementById('btn-three') as HTMLElement;
const btnFour = document.getElementById('btn-four') as HTMLElement;

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
btnThree.onclick= function (){
   let value= getValueFromElement('btn-three')
   let inputDisplay = document.getElementById('input-display') as HTMLElement
   inputDisplay?.innerText=value
}
btnFour.onclick= function (){
   let value= getValueFromElement('btn-four')
   let inputDisplay = document.getElementById('input-display') as HTMLElement
   inputDisplay?.innerText=value;
}