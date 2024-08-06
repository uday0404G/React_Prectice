// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6V9V7aLXgGY_FQlYWCFgq2KOnVqaTWWU",
  authDomain: "fir-eddf1.firebaseapp.com",
  projectId: "fir-eddf1",
  storageBucket: "fir-eddf1.appspot.com",
  messagingSenderId: "1040015347712",
  appId: "1:1040015347712:web:97cb9fba201937ddf348e5",
  measurementId: "G-4RJJPQGRYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)