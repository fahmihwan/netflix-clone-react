// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_4brS8GoXhGS3msBYTCR3W1FKaZbrJNU",
    authDomain: "movie-react-clone-7acf9.firebaseapp.com",
    projectId: "movie-react-clone-7acf9",
    storageBucket: "movie-react-clone-7acf9.appspot.com",
    messagingSenderId: "2569524753",
    appId: "1:2569524753:web:ab18cef1bc6d510e9803b0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
