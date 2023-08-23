// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHYYxhEn18j_2PwtfYr8OtjXUtULnZuN0",
  authDomain: "exofirebase-7b9f1.firebaseapp.com",
  projectId: "exofirebase-7b9f1",
  storageBucket: "exofirebase-7b9f1.appspot.com",
  messagingSenderId: "8716628223",
  appId: "1:8716628223:web:ee76d4b342a57340a1dcca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize FireStore
export const firestore = getFirestore(app) ;