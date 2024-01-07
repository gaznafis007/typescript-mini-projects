"use strict";
const getValueFromElement = (elementId) => {
    let element = document.getElementById(elementId);
    let inputDisplay = document.getElementById('input-display');
    let outputDisplay = document.getElementById('output-display');
    let actionDisplay = document.getElementById('action-display');
    let elementValue = element.innerText;
    let outputValue = outputDisplay.innerText;
    let newValue;
    if (outputDisplay.innerText) {
        newValue = inputDisplay.innerText = outputValue;
        outputDisplay.innerText = '';
        actionDisplay.innerText = '';
        return newValue;
    }
    else if (inputDisplay.innerText) {
        console.log(false);
        newValue = `${inputDisplay.innerText}${elementValue}`;
        inputDisplay.innerText = newValue;
        return newValue;
    }
    else {
        newValue = inputDisplay.innerText = elementValue;
        return newValue;
    }
};
const handleAction = (action) => {
    let actionElement = document.getElementById(action);
    let inputDisplay = document.getElementById('input-display');
    let outputDisplay = document.getElementById('output-display');
    let actionValue = actionElement.innerText;
    let inputValue = inputDisplay.innerText;
    let outputValue = outputDisplay.innerText;
    let newValue;
    if (outputDisplay.innerText) {
        newValue = inputDisplay.innerText = outputValue;
        outputDisplay.innerText = '';
        actionDisplay.innerText = '';
        return newValue;
    }
    else if (inputValue) {
        let result = inputDisplay.innerText = `${inputValue}${actionValue}`;
        console.log(result);
    }
    else {
        inputDisplay.innerText = "Add numbers to calculate";
        console.log(false);
    }
};
