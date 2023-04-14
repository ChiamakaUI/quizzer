import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey: "AIzaSyBugGXnqBvn-mpsg0TQPTttpywNCXpXfzQ",
  authDomain: "quiz-app-386e5.firebaseapp.com",
  projectId: "quiz-app-386e5",
  storageBucket: "quiz-app-386e5.appspot.com",
  messagingSenderId: "365123644946",
  appId: "1:365123644946:web:4bfc2ac3e106f7066b72cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
