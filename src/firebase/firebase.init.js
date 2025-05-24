// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC3YH0dEiDo3jp19kD68dZUII8F-boQTk",
  authDomain: "leaf-log-dc82b.firebaseapp.com",
  projectId: "leaf-log-dc82b",
  storageBucket: "leaf-log-dc82b.firebasestorage.app",
  messagingSenderId: "399286336073",
  appId: "1:399286336073:web:6b582b65c109f725ca5d98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
