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
