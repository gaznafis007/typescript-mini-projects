const getValueFromElement = (elementId:string)=>{
    let element = document.getElementById(elementId);
    let value = element?.innerText;
    console.log(value);
    return value
}