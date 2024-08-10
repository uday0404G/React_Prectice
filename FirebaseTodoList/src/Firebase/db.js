// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiVKQeTVAkf_W_8wR7_YhB5taeB4Vz9iM",
  authDomain: "todo-b60cc.firebaseapp.com",
  projectId: "todo-b60cc",
  storageBucket: "todo-b60cc.appspot.com",
  messagingSenderId: "63744324993",
  appId: "1:63744324993:web:14716716b90eed23432480",
  measurementId: "G-CFZDBZFGWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)