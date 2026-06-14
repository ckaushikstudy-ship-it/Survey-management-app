import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjytSJIBeweqRrzevGz3EoTs81Gv6Lq0U",
  authDomain: "surveypro-81129.firebaseapp.com",
  projectId: "surveypro-81129",
  storageBucket: "surveypro-81129.firebasestorage.app",
  messagingSenderId: "339789676701",
  appId: "1:339789676701:web:6edd8452145eae5f9ed474"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
