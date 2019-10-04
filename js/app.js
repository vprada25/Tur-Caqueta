var user = document.getElementById('user');
var pass = document.getElementById('pass');


function inicio() {
    
    if (user.value == "admin" && pass.value == "admin") {
        console.log("credenciales validas");
        window.location = "indexAdmin.html";
    }
    if(user.value=="usuario" && pass.value == "usuario"){
        console.log("credenciales validas");
        window.location = "cliente.html"

    } else {
        console.log("credenciales invalidas")
    }
}


function login(){
    window.location="login.html";
}

function registrar(){
    window.location="register.html";
}
function registrar2(){
    window.location="../register.html";
}
function principal2(){
    window.location="../index.html";
}

function principal(){
    window.location="index.html";
}

function admin(){
    window.location="indexAdmin.html";
}

function olvidoC(){
    window.location="Admin/forgot-password.html";
}

function cards(){
    window.location="Admin/cards.html";
}

function button(){
    window.location="Admin/buttons.html";
}

function cayonning(){
    window.location="cayoning.html";
}

function torrentismo(){
    window.location="torrentismo.html";
}

function trekking(){
    window.location="trekking.html";
}
