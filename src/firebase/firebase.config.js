// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdfbWPjP4nAl44Y5Of4SroBsznolOFqvs",
  authDomain: "yoga-school-project.firebaseapp.com",
  projectId: "yoga-school-project",
  storageBucket: "yoga-school-project.appspot.com",
  messagingSenderId: "659878232816",
  appId: "1:659878232816:web:dbee0ab95412152a5c7835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;