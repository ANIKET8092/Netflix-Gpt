// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA019nt1AUmORWIhorcTb-aYNcFsNOq-dI",
  authDomain: "netflixgpt-904d2.firebaseapp.com",
  projectId: "netflixgpt-904d2",
  storageBucket: "netflixgpt-904d2.appspot.com",
  messagingSenderId: "900469006376",
  appId: "1:900469006376:web:8746d1ed4935981924551d",
  measurementId: "G-T55X3QDZMG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
