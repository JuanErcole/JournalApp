// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'



const firebaseConfig = {
  apiKey: "AIzaSyDI9O2cm_XIWREjCefO2_Lnd71NfxnE-Pc",
  authDomain: "journalapp-jme.firebaseapp.com",
  projectId: "journalapp-jme",
  storageBucket: "journalapp-jme.appspot.com",
  messagingSenderId: "237192144219",
  appId: "1:237192144219:web:9c156f0ecd333542cde67e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );