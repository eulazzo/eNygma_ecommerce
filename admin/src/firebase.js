// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCinR_ZiiPtA7aS_A-MbT7AKueYwV9bLvM",
  authDomain: "ecommerce-5b04f.firebaseapp.com",
  projectId: "ecommerce-5b04f",
  storageBucket: "ecommerce-5b04f.appspot.com",
  messagingSenderId: "556234963679",
  appId: "1:556234963679:web:bf6e9fbe09c44fb87e476a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app