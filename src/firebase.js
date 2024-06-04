import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOXCbCfY--iQQwGwWY4brx0grGFxeJBNU",
  authDomain: "discord-2bddb.firebaseapp.com",
  projectId: "discord-2bddb",
  storageBucket: "discord-2bddb.appspot.com",
  messagingSenderId: "524839354801",
  appId: "1:524839354801:web:aba37ce94ce5ee9f28fd90",
  measurementId: "G-MWT1NRLRG9",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
