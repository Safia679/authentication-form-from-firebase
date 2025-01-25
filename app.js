 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
 import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
 
 const firebaseConfig = {
   apiKey: "AIzaSyAIy1eZBCWR-885uAOK0KCBGEtFMPposNk",
   authDomain: "authentication-form-379fd.firebaseapp.com",
   projectId: "authentication-form-379fd",
   storageBucket: "authentication-form-379fd.firebasestorage.app",
   messagingSenderId: "583217669441",
   appId: "1:583217669441:web:d14f9a9f9e94b535106dc0",
   measurementId: "G-00WVGHZDSC"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


 const handleSignup =() => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email && password){
        createUserWithEmailAndPassword(auth,email,password).then((userCredentials)=>{
       window.location.href = "./login.html"
        })
        .catch((error)=>{
     alert(error.message)
        })
    }
 }
  
 const button = document.getElementById("Signup-btn");
 if(button){
    button.addEventListener("click",(e)=>{
        e.preventDefault();
        handleSignup();
    });
 }
 const handleLogin=()=>{
    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;
    if (email && password){
        signInWithEmailAndPassword(auth,email,password).then((userCredentials)=>{
       console.log(userCredentials.user);
        })
        .catch((error)=>{
       alert(error.message);   
        })
    }
 };
 const loginButton = document.getElementById("Login-btn");
 if (loginButton){
    loginButton.addEventListener("click",(e)=>{
        e.preventDefault();
        handleLogin();
    });
 };
 onAuthStateChanged(auth,(user)=>{
    const logOutButton = document.getElementById("logout");
    if(user){
        logOutButton.style.display = "flex"
        logOutButton.addEventListener("click", (e) => {
            e.preventDefault()
            signOut(auth);
            window.location.href = "./index.html"
          });
    }
    else{
        logOutButton.style.display = "none";
        console.log("user not logged in");
    }
 });
