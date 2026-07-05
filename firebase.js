import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAc6J2XPUQhYqkn24ByKelTE6A4pZyWuOg",
  authDomain: "mira-y-aprendev2.firebaseapp.com",
  databaseURL: "https://mira-y-aprendev2-default-rtdb.firebaseio.com",
  projectId: "mira-y-aprendev2",
  storageBucket: "mira-y-aprendev2.firebasestorage.app",
  messagingSenderId: "339955052391",
  appId: "1:339955052391:web:825746f55757bbf02149c2"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function guardarTicket(ticket) {
  const nuevoTicket = push(ref(db, "tickets"));
  return set(nuevoTicket, ticket);
}
