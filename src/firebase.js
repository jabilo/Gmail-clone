// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { GoogleAuthProvider, signInWithPopup,getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqvz23J2gghWafoJSxxY3DYp8gJikfjHU",
  authDomain: "clone-bc0de.firebaseapp.com",
  projectId: "clone-bc0de",
  storageBucket: "clone-bc0de.appspot.com",
  messagingSenderId: "263451938977",
  appId: "1:263451938977:web:cef2e9c99dc9ef053ea0e0",
  measurementId: "G-HSP6PMTM7G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db =  firebase.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export {auth,provider};
export default db;

