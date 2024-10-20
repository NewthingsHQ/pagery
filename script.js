// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu3Ho_xxqHw9kbsihcXa32l8rA2xYFI7w",
  authDomain: "nt-pocket.firebaseapp.com",
  projectId: "nt-pocket",
  storageBucket: "nt-pocket.appspot.com",
  messagingSenderId: "444633071180",
  appId: "1:444633071180:web:f48abf50d1fa7284e37ee9",
  measurementId: "G-4RJH58X1HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);