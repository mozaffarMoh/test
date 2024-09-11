// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBb56mkCuUklS8ErwobbXMrYYaMM_SIh6s",
    authDomain: "test-e42b5.firebaseapp.com",
    projectId: "test-e42b5",
    storageBucket: "test-e42b5.appspot.com",
    messagingSenderId: "96955534710",
    appId: "1:96955534710:web:8a5beda23fb1b397d4be57",
    measurementId: "G-CKPKWXCCZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics }