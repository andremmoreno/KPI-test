// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDWdPwjv5H6nnWtYJE5g2_lsYHpcMIoxY",
  authDomain: "kpiandre.firebaseapp.com",
  projectId: "kpiandre",
  storageBucket: "kpiandre.appspot.com",
  messagingSenderId: "279392307618",
  appId: "1:279392307618:web:210a1755da0912a007cafb",
  measurementId: "G-GPQ3ELJ57G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);