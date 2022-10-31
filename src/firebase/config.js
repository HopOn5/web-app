import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_DB_API_KEY,
  authDomain: process.env.REACT_APP_DB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_DBURL,
  projectId: process.env.REACT_APP_DB_PROJ_ID,
  storageBucket: process.env.REACT_APP_DB_STORAGE_BKT,
  messagingSenderId: process.env.REACT_APP_DB_MESSAGING_SNDR_ID,
  appId: process.env.REACT_APP_DB_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage(app);
export const auth = getAuth(app);
