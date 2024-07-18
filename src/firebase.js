import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAy-ZvLKUtH3uX3GD7XKpJw48JqSUTbPg",
    authDomain: "chatapp-8d741.firebaseapp.com",
    projectId: "chatapp-8d741",
    storageBucket: "chatapp-8d741.appspot.com",
    messagingSenderId: "656846697751",
    appId: "1:656846697751:web:1ed25d86108654f19df352",
    measurementId: "G-7S2N6G6R88"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { db,auth, googleProvider, signInWithPopup };

