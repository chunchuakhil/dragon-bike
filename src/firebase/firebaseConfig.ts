// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZJvrSDyMKLw-YPX-ysP0DbVURccm93MA",
  authDomain: "dragon-bike.firebaseapp.com",
  projectId: "dragon-bike",
  storageBucket: "dragon-bike.firebasestorage.app",
  messagingSenderId: "1088289408248",
  appId: "1:1088289408248:web:b7688312c83357904d270d",
  measurementId: "G-9P5WDS4YQF",
};
// Initialize Firebase
const firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const firestore_db = getFirestore(firebase_app);

export default firebase_app;
