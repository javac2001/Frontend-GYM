const login = document.getElementById('login-box');
const sign = document.getElementById('sinUp-page');
const swap = document.getElementById('swap-login');

const signUp =()=>{
    login.style.display = "none";
    sign.style.display = "flex";
}

const swapPage =()=>{
    login.style.display = "flex";
    sign.style.display = "none";
}