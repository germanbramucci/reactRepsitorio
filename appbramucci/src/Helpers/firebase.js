// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4kVv_9uHYEglAEeK09q2Ao_tPEdu7q-8",
  authDomain: "appbramucci.firebaseapp.com",
  projectId: "appbramucci",
  storageBucket: "appbramucci.appspot.com",
  messagingSenderId: "848755734830",
  appId: "1:848755734830:web:6f2b6a7daae7f2a0a3e2bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);