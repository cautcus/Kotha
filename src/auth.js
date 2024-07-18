// src/auth.js
import { auth } from "./firebase";
import { signInWithEmailAndPassword, signOut as firebaseSignOut, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword  } from "firebase/auth";

// Sign in with email and password
export const signInWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed in:", user.uid);
    return user;
  } catch (error) {
    throw error;
  }
};

// Sign in with Google
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    console.log("User signed in with Google:", user.uid);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signUpWithEmailPassword = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed up:', user.uid);
      return user;
    } catch (error) {
      console.error('Error signing up with email/password:', error);
      throw error;
    }
}

// Sign out
export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    console.log("User signed out");
  } catch (error) {
    throw error;
  }
};
