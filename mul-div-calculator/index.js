const num1=prompt("Enter number 1");
const num2=prompt("Enter number 2");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const second = document.getElementById("second");
mul.addEventListener("click",()=>{
    second.innerText=num1*num2;
    
    
})
div.addEventListener("click",()=>{
    second.innerText=num1/num2;
    
})

