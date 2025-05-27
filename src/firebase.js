// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnbuaQRTDm_U8iooFicDh_G7j2-nIa-cw",
    authDomain: "axljoven-33680.firebaseapp.com",
    projectId: "axljoven-33680",
    storageBucket: "axljoven-33680.firebasestorage.app",
    messagingSenderId: "1073281000591",
    appId: "1:1073281000591:web:cb1ee9b95c375802833cfa",
    measurementId: "G-98S1WDFWZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);