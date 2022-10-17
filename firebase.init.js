// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiShRjSdliS0jfaAqO0HUzft1KBHDE5aU",
  authDomain: "web-volunteer-network.firebaseapp.com",
  projectId: "web-volunteer-network",
  storageBucket: "web-volunteer-network.appspot.com",
  messagingSenderId: "193673709746",
  appId: "1:193673709746:web:b0cb3ec5a649b8db8d21ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
