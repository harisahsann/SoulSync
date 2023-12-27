// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8oX9gw9-ZmyoCcYguAtWwL08lZ_spjH8",
  authDomain: "soulsync-f2360.firebaseapp.com",
  projectId: "soulsync-f2360",
  storageBucket: "soulsync-f2360.appspot.com",
  messagingSenderId: "426051036596",
  appId: "1:426051036596:web:865309ba6914ef3d6dfee1",
  measurementId: "G-FJENED45D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export{app,auth};