// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl5O9QclyGXuBu1yoDInEaiYGd6a93O78",
  authDomain: "nt-pagery.firebaseapp.com",
  projectId: "nt-pagery",
  storageBucket: "nt-pagery.appspot.com",
  messagingSenderId: "1032846398247",
  appId: "1:1032846398247:web:94eaaa88908dd497d98f02",
  measurementId: "G-ZM2YVVGLS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase Authentication
const auth = firebase.auth();

// Button and input field references
const sendLinkButton = document.getElementById('sendLink');
const emailInput = document.getElementById('email');
const statusMessage = document.getElementById('status');

// Set up your action code settings for email link login
const actionCodeSettings = {
  url: 'https://your-website.com', // Redirect after login (use your domain here)
  handleCodeInApp: true // Important: Set to true for email link login
};

// Send the email login link
sendLinkButton.addEventListener('click', async () => {
  const email = emailInput.value;

  try {
    await auth.sendSignInLinkToEmail(email, actionCodeSettings);
    window.localStorage.setItem('emailForSignIn', email); // Store email temporarily
    statusMessage.textContent = 'Login link sent! Check your email.';
  } catch (error) {
    console.error('Error sending email link:', error);
    statusMessage.textContent = `Error: ${error.message}`;
  }
});

// Handle sign-in from the email link
window.addEventListener('load', async () => {
  if (auth.isSignInWithEmailLink(window.location.href)) {
    let email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      email = prompt('Please provide your email for confirmation.');
    }

    try {
      const result = await auth.signInWithEmailLink(email, window.location.href);
      console.log('Successfully signed in:', result.user);
      statusMessage.textContent = `Welcome, ${result.user.email}!`;
      window.localStorage.removeItem('emailForSignIn'); // Clean up stored email
    } catch (error) {
      console.error('Error signing in:', error);
      statusMessage.textContent = `Error: ${error.message}`;
    }
  }
});
