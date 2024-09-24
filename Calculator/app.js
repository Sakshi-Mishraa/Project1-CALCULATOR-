let expression=document.querySelector("#exp");
let dig7=document.querySelector("#seven");
let dig8=document.querySelector("#eight");
let dig9=document.querySelector("#nine");
let dig6=document.querySelector("#six");
let dig5=document.querySelector("#five");
let dig4=document.querySelector("#four");
let dig3=document.querySelector("#three");
let dig2=document.querySelector("#two");
let dig1=document.querySelector("#one");
let dig0=document.querySelector("#zero");
let digDecimal=document.querySelector("#decimal");
let clear=document.querySelector("#Clr");
let add=document.querySelector("#add");
let sub=document.querySelector("#sub");
let mul=document.querySelector("#multiply");
let div=document.querySelector("#divide");
let result=document.querySelector("#result");
let erase=document.querySelector("#erase");
dig7.addEventListener("click",inputButtonValue);
dig8.addEventListener("click",inputButtonValue);
dig9.addEventListener("click",inputButtonValue);
dig6.addEventListener("click",inputButtonValue);
dig5.addEventListener("click",inputButtonValue);
dig4.addEventListener("click",inputButtonValue);
dig3.addEventListener("click",inputButtonValue);
dig2.addEventListener("click",inputButtonValue);
dig1.addEventListener("click",inputButtonValue);
dig0.addEventListener("click",inputButtonValue);
add.addEventListener("click",inputButtonValue);
sub.addEventListener("click",inputButtonValue);
mul.addEventListener("click",inputButtonValue);
div.addEventListener("click",inputButtonValue);
digDecimal.addEventListener("click",inputButtonValue);
power.addEventListener("click",inputButtonValue);
clear.addEventListener("click",function(){
    let expression=document.querySelector("#exp");
    expression.value="";
});
function inputButtonValue(){
    let expression=document.querySelector("#exp");
    expression.value+=this.innerText;
}
erase.addEventListener("click",function(){
    let expression=document.querySelector("#exp");
    expression.value=expression.value.substring(0,expression.value.length-1);
});
result.addEventListener("click",function(){
    let expression=document.querySelector("#exp");
    let finalResult=eval(expression.value);
    expression.value=finalResult;
});
expression.addEventListener("keyup",function(event){
    if(event.key==="Enter"){
        let finalResult=eval(this.value);
        this.value=finalResult;
    }
});

