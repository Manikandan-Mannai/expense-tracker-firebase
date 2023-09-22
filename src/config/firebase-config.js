import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCvbHTY7o2u8QDkrP0Uof_7P5IZa9KdB6A",
    authDomain: "expense-tracker-b10c6.firebaseapp.com",
    projectId: "expense-tracker-b10c6",
    storageBucket: "expense-tracker-b10c6.appspot.com",
    messagingSenderId: "766785787460",
    appId: "1:766785787460:web:a9b06e426321bc59738e11"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);