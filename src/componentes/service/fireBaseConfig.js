import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBkSlqTC1jlCEEHrn5YVnyUWwiCfjjk0Tk",
  authDomain: "decibelius77.firebaseapp.com",
  projectId: "decibelius77",
  storageBucket: "decibelius77.appspot.com",
  messagingSenderId: "262296061429",
  appId: "1:262296061429:web:33190ce6f7707ee4098cbc"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)