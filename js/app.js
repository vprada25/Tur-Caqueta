


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
            db.collection("USUARIO").add({
                usuario: correo.value,
                password: contrasena.value

            })

                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    limpiar();

                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                    limpiar();
                });

                var user = firebase.auth().currentUser;

                user.sendEmailVerification().then(function() {
                  // Email sent.
                  console.log("mensaje enviado....");
                  limpiar();
                }).catch(function(error) {
                  // An error happened.
                  console.log("correo invalido...");
                  limpiar();
                });
                firebase.auth().languageCode = 'fr';

        })

        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode + "::" + errorMessage);
        });
}



function login() {
    firebase.auth().signInWithEmailAndPassword(correo.value, contrasena.value)
        .then(function () {
            console.log("Usuario validado exitosamnte...");
            window.location.href = "indexAdmin.html";
            limpiar();
        })
        .catch(function (error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode + "::" + errorMessage);
        });
}

function limpiar() {
    correo.value = "";
    contrasena.value = "";
}



function observador() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            var displayName = user.email;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            console.log(user);
            //btnCerrar.classList.remove('d-none');
            //btnLogin.classList.add('d-none');
            //nombre.innerHTML = `Bienvenido ` + email;

        } else {
            console.log("Ningun usuario activo");
        }
    });
}

function salir() {
    firebase.auth().signOut()
        .then(function () {
            console.log("Usuario cierra sesion");
            window.location.href = "index.html";
            limpiar();

        })
        .catch(function (error) {
            console.log(error);
        });
}

observador();