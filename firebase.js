import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDrZ1IbQz6F2wimjKrlnFTbMFGm2nzVpnE",
    authDomain: "setup-login-system.firebaseapp.com",
    projectId: "setup-login-system",
    storageBucket: "setup-login-system.firebasestorage.app",
    messagingSenderId: "925202257372",
    appId: "1:925202257372:web:198cd9840e035c90762b19"
};

const app = initializeApp(firebaseConfig);

export default app;