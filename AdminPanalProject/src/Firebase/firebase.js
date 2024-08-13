// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ_IYJbpmxC0RbviVGzixGLkUKNaYDVk0",
  authDomain: "vishal-41654.firebaseapp.com",
  projectId: "vishal-41654",
  storageBucket: "vishal-41654.appspot.com",
  messagingSenderId: "968593681948",
  appId: "1:968593681948:web:b2f8bb18ac197ac833f9d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
