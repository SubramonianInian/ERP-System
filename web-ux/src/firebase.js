// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'

// The firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_FIREBASE_APP_ID,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firestore database
export const db = getFirestore(app)
// Initialize the firebase authentication providers
export const auth = getAuth(app)
export const googleAuth = new GoogleAuthProvider(app)
