import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWSS0ljfBbW06_uHcQFdfOrL0X63HJj_E",
  authDomain: "reactjs-a6aaa.firebaseapp.com",
  projectId: "reactjs-a6aaa",
  storageBucket: "reactjs-a6aaa.appspot.com",
  messagingSenderId: "527204978164",
  appId: "1:527204978164:web:7deb4193b7f165e0cb7da1",
  measurementId: "G-YDRW5M51W9",
  Database :"https://reactjs-a6aaa-default-rtdb.firebaseio.com/"
};


export const app = initializeApp(firebaseConfig);
export const dbs = getFirestore(app);
