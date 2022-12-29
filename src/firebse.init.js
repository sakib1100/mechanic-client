
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth} from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnFD3nyNyVT0NVrBLR24fLxSlZRgBSbe8",
  authDomain: "mechanic-store-client.firebaseapp.com",
  projectId: "mechanic-store-client",
  storageBucket: "mechanic-store-client.appspot.com",
  messagingSenderId: "488780175575",
  appId: "1:488780175575:web:79b3765269a1113c76b892"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;