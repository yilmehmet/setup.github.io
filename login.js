import app from "./firebase.js";

import {
    getAuth,
    signInWithEmailAndPassword
}
    from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";


const auth = getAuth(app);


const loginForm = document.getElementById("loginForm");


loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;



    signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {

            // Giriş başarılı

            window.location.href = "setup.html";

        })

        .catch((error) => {

            alert("Giriş başarısız: " + error.message);

        });

});