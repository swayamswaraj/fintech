// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYWW3snAsK8mZHAS8FIL8y2qB0YWiDZdw",
  authDomain: "fintech-16d80.firebaseapp.com",
  projectId: "fintech-16d80",
  storageBucket: "fintech-16d80.firebasestorage.app",
  messagingSenderId: "178694916744",
  appId: "1:178694916744:web:e1231d2e3f9a12f3a72d3d",
  measurementId: "G-MR0NR30P7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);