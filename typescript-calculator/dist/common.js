"use strict";
const getValueFromElement = (elementId) => {
    let element = document.getElementById(elementId);
    let value = element === null || element === void 0 ? void 0 : element.innerText;
    console.log(value);
    return value;
};
