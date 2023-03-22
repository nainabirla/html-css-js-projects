//CURRENT DAY AND TIME
// var today=new Date();
// console.log(today);
// var day=today.getDay();
// var daylist=["sunday","monday","tuesday","wednesday","thursday","fri day","saturday"];
// console.log("Today is : " + daylist[day]);
// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();
// console.log(hour, minute, second);
// let prepand=(hour>=12)?"PM":"AM";
// hour=(hour>=12)?hour-12:hour;
// if(hour===0&&prepand==='PM'){
//     if(minute===0&&second===0){
//         hour=12;
//         prepand='noon';
//     }
//     else{
//         hour=12;
//         prepand='PM'
//     }
// }
// if(hour===0&&prepand==='AM'){
//     if(minute===0&&second===0){
//         hour=12;
//         prepand='Midnight';
//     }
//     else{
//         hour=12;
//         prepand='AM'
//     }
// }
// console.log("Current time: "+ hour+prepand+" : "+ minute+second);

// const num = Math.ceil(Math.random()*10);
// console.log(num);

// const guessnum = prompt("Enter a number between 1 and 10")
// if(guessnum==num){
//     alert("number matched");
// }
// else{
//     alert("not matched");
// }

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

