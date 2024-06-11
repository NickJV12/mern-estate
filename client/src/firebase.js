// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ece5e.firebaseapp.com",
  projectId: "mern-estate-ece5e",
  storageBucket: "mern-estate-ece5e.appspot.com",
  messagingSenderId: "864540702919",
  appId: "1:864540702919:web:7852063e4b55511e0326e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);