// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// The firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_FIREBASE_APP_ID,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore database
export const db = getFirestore(app);