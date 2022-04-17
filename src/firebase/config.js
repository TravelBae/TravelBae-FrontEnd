// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjhmEC2qOJBZCTWC2F5lumEBKBpU_y6xk",
  authDomain: "travelbae-9f9a6.firebaseapp.com",
  projectId: "travelbae-9f9a6",
  storageBucket: "travelbae-9f9a6.appspot.com",
  messagingSenderId: "207402345806",
  appId: "1:207402345806:web:1ef0fa08c07c22395eaa1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
