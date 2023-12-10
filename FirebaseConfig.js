// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0QdIDg5P2BVfvzXLF4YMDpWze5qVNNks",
  authDomain: "wedify-26c18.firebaseapp.com",
  projectId: "wedify-26c18",
  storageBucket: "wedify-26c18.appspot.com",
  messagingSenderId: "753124182745",
  appId: "1:753124182745:web:0a9ea36b54ad1f7f150cc8"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP)