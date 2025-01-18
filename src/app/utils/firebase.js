// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextblog-142bc.firebaseapp.com",
  projectId: "nextblog-142bc",
  storageBucket: "nextblog-142bc.firebasestorage.app",
  messagingSenderId: "209231334380",
  appId: "1:209231334380:web:0d03abd1dc1d5872c7cec9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);