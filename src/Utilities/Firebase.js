// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlcMKXlPpaWnQC4dCKJiwdYuRAcBpwmX8",
  authDomain: "gallery-a63c5.firebaseapp.com",
  projectId: "gallery-a63c5",
  storageBucket: "gallery-a63c5.appspot.com",
  messagingSenderId: "371794808061",
  appId: "1:371794808061:web:ff27a0d011e76b5cdd4294",
  measurementId: "G-EJ0HWT09NK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();