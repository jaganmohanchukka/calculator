let allclear = document.querySelector("#ac");
let clear = document.querySelector("#c");
let sign = document.querySelector("#sign");
let division = document.querySelector("#division");
let a7 = document.querySelector("#a7");
let a8 = document.querySelector("#a8");
let a9 = document.querySelector("#a9");
let multiplication = document.querySelector("#multiplication");
let a4 = document.querySelector("#a4");
let a5 = document.querySelector("#a5");
let a6 = document.querySelector("#a6");
let subtraction = document.querySelector("#subtraction");
let a1 = document.querySelector("#a1");
let a2 = document.querySelector("#a2");
let a3 = document.querySelector("#a3");
let addition = document.querySelector("#addition");
let aa = document.querySelector("#aa");
let a0 = document.querySelector("#a0");
let point = document.querySelector("#point");
let equalto = document.querySelector("#equalto");
let result = document.querySelector("#result")
result.innerText='';
//adding event listener
a0.addEventListener("click",()=>{
    if(result.innerText.length===0){
        result.innerText='0';
    }
    else{
        result.innerText+='0';
    }
});
a1.addEventListener("click",()=>{
    if(result.innerText.length===0){
        result.innerText='1';
    }
    else{
        result.innerText+='1';
    }
});
a2.addEventListener("click",()=>{
    if(result.innerText.length===0){
        result.innerText='2';
    }
    else{
        result.innerText+='2';
    }
});
a3.addEventListener("click",()=>{
    if(result.innerText.length===0){
        result.innerText='3';
    }
    else{
        result.innerText+='3';
    }
});
a4.addEventListener("click",()=>{
    if(result.innerText.length===0){
        result.innerText='4';
    }
    else{
        result.innerText+='4';
    }
});
a5.addEventListener("click",()=>{
    if(result.innerText.length===0){
        result.innerText='5';
    }
    else{
        result.innerText+='5';
    }
});
a6.addEventListener("click",()=>{
    if(result.innerText.length===0){
        result.innerText='6';
    }
    else{
        result.innerText+='6';
    }
});
a7.addEventListener("click",()=>{
    if(result.innerText.length===0){
        result.innerText='7';
    }
    else{
        result.innerText+='7';
    }
});
a8.addEventListener("click",()=>{
    if(result.innerText.length===0){
        result.innerText='8';
    }
    else{
        result.innerText+='8';
    }
});
a9.addEventListener("click",()=>{
    if(result.innerText.length===0){
        result.innerText='9';
    }
    else{
        result.innerText+='9';
    }
});
aa.addEventListener("click",()=>{
    if(result.innerText.lengt!==0){
        result.innerText+='00';
    }  
});
allclear.addEventListener("click",()=>{
    result.innerText=[];
});
clear.addEventListener("click",()=>{
    if (result.innerText.length > 1) {
        result.innerText = result.innerText.slice(0, -1);
    } 
    else{
        result.innerText = '';
    }
});
addition.addEventListener("click",()=>{
    if(result.innerText.length!==0){
        result.innerText+='+';
    }  
});
subtraction.addEventListener("click",()=>{
    if(result.innerText.length!==0){
        result.innerText+='-';
    }  
});
multiplication.addEventListener("click",()=>{
    if(result.innerText.length!==0){
        result.innerText+='*';
    }  
});
division.addEventListener("click",()=>{
    if(result.innerText.length!==0){
        result.innerText+='/';
    }  
});
sign.addEventListener("click", () => {
    if (result.innerText.length !== 0) {
        if (result.innerText.startsWith('-')) {
            result.innerText = result.innerText.slice(1);
        } else {
            result.innerText = '-' + result.innerText;
        }
    }
});
point.addEventListener("click", () => {
    if (!result.innerText.includes('.')) {
        result.innerText += '.';
    }
});
equalto.addEventListener("click", () => {
    try {
        result.innerText = eval(result.innerText);
    } 
    catch {
        result.innerText = "Error";
    }
});

