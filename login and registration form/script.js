let x= document.getElementById("login");
let y= document.getElementById("register");
let z= document.getElementById("btn");

function register(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}
function login(){
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0";
}

const passwordEl = document.getElementById("password");
const cpasswordEl = document.getElementById("c-password");
const buttonEl = document.getElementById("submit-button");
const  loginsubEl= document.getElementById("loginsubEl");
const loginusernameEl = document.getElementById("login-username");
const loginpasswordEl = document.getElementById("login-password");

loginsubEl.addEventListener("click", ()=>{
    if(loginusernameEl.value == "nainabirla24" && loginpasswordEl.value == "naina24"){
        alert("Login Successful");
    }
    else{
        alert("Wrong Username or Password");
    }
    

});


buttonEl.addEventListener("click", ()=>{
    
        if(cpasswordEl.value == passwordEl.value){
            alert("Registration successful");

        }
        else{
            alert("Try again, passwords do not match");
        }
    
    
});

