// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxSp22gNfPz5HRQ5GR_JsgLZhqdmUdIU0",
  authDomain: "blog-9859c.firebaseapp.com",
  projectId: "blog-9859c",
  storageBucket: "blog-9859c.appspot.com",
  messagingSenderId: "1030411203323",
  appId: "1:1030411203323:web:d578dd41cbe48efc07765e",
  measurementId: "G-W4CSPWZ2Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)