


var firebaseConfig = {
    apiKey: "AIzaSyD4rT2oAcEb6oA4qz8dMk0rl73zQHImTw0",
    authDomain: "tur-caqueta.firebaseapp.com",
    databaseURL: "https://tur-caqueta.firebaseio.com",
    projectId: "tur-caqueta",
    storageBucket: "",
    messagingSenderId: "799343399686",
    appId: "1:799343399686:web:9fd18ab70c4b3f54190487"
};


firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();
var correo = document.getElementById('user');
var contrasena = document.getElementById('pass');
//var btnCerrar = document.getElementById('btnCerrar');
//var btnLogin = document.getElementById('btnLogin');
var nombre = document.getElementById('nombre');

function registrarUsuario() {
    firebase.auth().createUserWithEmailAndPassword(correo.value, contrasena.value)
        .then(function () {
            console.log("Usuario registrado");
            //limpiar();
            db.collection("USUARIO").add({
                usuario: correo.value,
                password: contrasena.value

            })
            
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });


            
            
        
        })

        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode + "::" + errorMessage);
        });
}

function login() {
    firebase.auth().signInWithEmailAndPassword(correo.value, contrasena.value)
        .then(function () {
            limpiar();
            console.log("Usuario validado exitosamnte...");
            admin()
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode + "::" + errorMessage);
        });
}

function limpiar() {
    correo.value = "";
    contrasena.value = "";
}

function admin() {
    window.location = "indexAdmin.html";
}

function observador() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            console.log(user);
            //btnCerrar.classList.remove('d-none');
            //btnLogin.classList.add('d-none');
            nombre.innerHTML = `Bienvenido ` + email;

        } else {
            //btnLogin.classList.remove('d-none');
            console.log("Ningun usuario activo");
        }
    });
}

observador();



function salir() {
    firebase.auth().signOut()
        .then(function () {
            limpiar();
            console.log("Usuario cierra sesion");
        })
        .catch(function (error) {
            console.log(error);
        });
}

/*
function login() {
    window.location = "login.html";
}

function registrar() {
    window.location = "register.html";
}
function registrar2() {
    window.location = "../register.html";
}
function principal2() {
    window.location = "../index.html";
}

function principal() {
    window.location = "index.html";
}



function olvidoC() {
    window.location = "Admin/forgot-password.html";
}

function cards() {
    window.location = "Admin/cards.html";
}

function button() {
    window.location = "Admin/buttons.html";
}

function cayonning() {
    window.location = "cayoning.html";
}

function torrentismo() {
    window.location = "torrentismo.html";
}

function trekking() {
    window.location = "trekking.html";
}
*/