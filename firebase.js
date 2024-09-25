// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyBaMTOEd0Q7edvVoSvNHDjDnsf44Cy8R1o",
    authDomain: "vasufilmsproduction-1f69d.firebaseapp.com",
    databaseURL: "https://vasufilmsproduction-1f69d-default-rtdb.firebaseio.com",
    projectId: "vasufilmsproduction-1f69d",
    storageBucket: "vasufilmsproduction-1f69d.appspot.com",
    messagingSenderId: "957033163838",
    appId: "1:957033163838:web:00ff437974d69e6811756f",
    measurementId: "G-NG20C3FV0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User logged in
            alert('Login Successful!');
            document.getElementById('login-form').reset();
            window.location.href = 'addMovies.html';
        })
        .catch((error) => {
            alert(error.message);
        });
});

// // Toggle to register form
// document.getElementById('toggle-to-register').addEventListener('click', function () {
//     // Redirect or show the registration form
//     window.location.href = 'register.html'; // Assuming you have a register.html
// });
