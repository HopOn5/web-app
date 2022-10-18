import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyA1Ej4-GNmh1NRIZfgTrzL_SyIobj_dmj4",
    authDomain: "hopon-d6da5.firebaseapp.com",
    databaseURL: "https://hopon-d6da5-default-rtdb.firebaseio.com",
    projectId: "hopon-d6da5",
    storageBucket: "hopon-d6da5.appspot.com",
    messagingSenderId: "959398577154",
    appId: "1:959398577154:web:8c74000ff49bf8e47a931b"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);