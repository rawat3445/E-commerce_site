// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8dbY1O9iOustRUFPCm4keamq4qr_FxLg",
  authDomain: "auth-9562f.firebaseapp.com",
  projectId: "auth-9562f",
  storageBucket: "auth-9562f.firebasestorage.app",
  messagingSenderId: "210779788217",
  appId: "1:210779788217:web:176a6b7f2692e53b01dc68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ THIS is the missing part:
export const auth = getAuth(app);