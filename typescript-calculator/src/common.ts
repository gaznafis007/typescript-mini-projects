const getValueFromElement = (elementId:string)=>{
    let element = document.getElementById(elementId) as HTMLElement;
    let inputDisplay = document.getElementById('input-display') as HTMLElement;
    let outputDisplay = document.getElementById('output-display') as HTMLElement;
    let actionDisplay = document.getElementById('action-display') as HTMLElement;
    let elementValue = element.innerText;
    let outputValue = outputDisplay.innerText
    let newValue:string
    if(outputDisplay.innerText){
        newValue =inputDisplay.innerText= outputValue
        outputDisplay.innerText=''
        actionDisplay.innerText=''
        return newValue

    }
    else if(inputDisplay.innerText){
        console.log(false);
        newValue = `${inputDisplay.innerText}${elementValue}`
        inputDisplay.innerText = newValue
        return newValue
    }
    else{
        newValue = inputDisplay.innerText = elementValue
        return newValue
    }
}
const handleAction = (action:string)=>{
    let actionElement = document.getElementById(action) as HTMLElement;
    let inputDisplay = document.getElementById('input-display') as HTMLElement;
    let outputDisplay = document.getElementById('output-display') as HTMLElement;
    let actionValue = actionElement.innerText
    let inputValue = inputDisplay.innerText
    let outputValue = outputDisplay.innerText
    let newValue:string
    if(outputDisplay.innerText){
        newValue =inputDisplay.innerText= outputValue
        outputDisplay.innerText=''
        actionDisplay.innerText=''
        return newValue

    }
    else if(inputValue){
        let result = inputDisplay.innerText = `${inputValue}${actionValue}`
        console.log(result);
    }
    else{
        inputDisplay.innerText = "Add numbers to calculate"
        console.log(false);
    }
}