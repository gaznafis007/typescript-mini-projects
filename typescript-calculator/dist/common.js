"use strict";
const getValueFromElement = (elementId) => {
    let element = document.getElementById(elementId);
    let inputDisplay = document.getElementById('input-display');
    let elementValue = element.innerText;
    let newValue;
    if (inputDisplay.innerText) {
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
    let actionValue = actionElement.innerText;
    let inputValue = inputDisplay.innerText;
    if (inputValue) {
        let result = inputDisplay.innerText = `${inputValue}${actionValue}`;
        console.log(result);
    }
    else {
        inputDisplay.innerText = "Add numbers to calculate";
        console.log(false);
    }
};
