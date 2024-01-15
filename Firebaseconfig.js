// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEklQma0IJPBhazg128cFyA2StI5moQBQ",
  authDomain: "thuan-f6f6c.firebaseapp.com",
  projectId: "thuan-f6f6c",
  storageBucket: "thuan-f6f6c.appspot.com",
  messagingSenderId: "991440468375",
  appId: "1:991440468375:web:7644333e5d8bb2f50f2cd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const database = getFirestore();

export { authentication, database };