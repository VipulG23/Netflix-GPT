// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuib26ieK1UIi0fz4UPDzxlNcXP4DSFTQ",
  authDomain: "netflixgpt-3229e.firebaseapp.com",
  projectId: "netflixgpt-3229e",
  storageBucket: "netflixgpt-3229e.firebasestorage.app",
  messagingSenderId: "933363184306",
  appId: "1:933363184306:web:09c7e1f1d0099b5a840fab",
  measurementId: "G-Y4X5JGE1M0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();