// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Ni8hFnyEPx1EaJ5YKpBSUMCvXO9NBuc",
  authDomain: "admin-7801a.firebaseapp.com",
  projectId: "admin-7801a",
  storageBucket: "admin-7801a.appspot.com",
  messagingSenderId: "1025801914549",
  appId: "1:1025801914549:web:51af0c1efa89780bf356fc",
  measurementId: "G-B53GK5EYR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
