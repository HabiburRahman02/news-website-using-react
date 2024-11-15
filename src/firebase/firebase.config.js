// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9MzK0hl8M1z104eVKzSy89LGopDHBMC0",
  authDomain: "news-web-4d0dd.firebaseapp.com",
  projectId: "news-web-4d0dd",
  storageBucket: "news-web-4d0dd.firebasestorage.app",
  messagingSenderId: "687674960768",
  appId: "1:687674960768:web:60ea2f71296f7a214d6f65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
