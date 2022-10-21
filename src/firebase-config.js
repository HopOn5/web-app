// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1Ej4-GNmh1NRIZfgTrzL_SyIobj_dmj4",
  authDomain: "hopon-d6da5.firebaseapp.com",
  databaseURL: "https://hopon-d6da5-default-rtdb.firebaseio.com",
  projectId: "hopon-d6da5",
  storageBucket: "hopon-d6da5.appspot.com",
  messagingSenderId: "959398577154",
  appId: "1:959398577154:web:8c74000ff49bf8e47a931b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 