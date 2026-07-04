import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAg_v6kN6ZTWXQ-HSMD2aV7bQuh3SNplcs",
  authDomain: "mira-y-aprende-321c0.firebaseapp.com",
  databaseURL: "https://mira-y-aprende-321c0-default-rtdb.firebaseio.com",
  projectId: "mira-y-aprende-321c0",
  storageBucket: "mira-y-aprende-321c0.appspot.com",
  messagingSenderId: "1085961832739",
  appId: "1:1085961832739:web:da32eacb00fbe8c4a5a496"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function guardarTicket(ticket){

const nuevoTicket = push(ref(db, "tickets"));

set(nuevoTicket, ticket);

}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc6J2XPUQhYqkn24ByKelTE6A4pZyWuOg",
  authDomain: "mira-y-aprendev2.firebaseapp.com",
  databaseURL: "https://mira-y-aprendev2-default-rtdb.firebaseio.com",
  projectId: "mira-y-aprendev2",
  storageBucket: "mira-y-aprendev2.firebasestorage.app",
  messagingSenderId: "339955052391",
  appId: "1:339955052391:web:825746f55757bbf02149c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
