// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPkltxXl58jvCMz8OgS98htvPE_IftSIk",
  authDomain: "smart-printing-service-23a0d.firebaseapp.com",
  projectId: "smart-printing-service-23a0d",
  storageBucket: "smart-printing-service-23a0d.appspot.com",
  messagingSenderId: "884092661685",
  appId: "1:884092661685:web:b15645a6b31520fc5733fc",
  measurementId: "G-ECT1Z51FHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);