// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc6WMDMvPqKF4aO4-BNm96idh-pZxGQbk",
  authDomain: "e-commerce-tec-847f0.firebaseapp.com",
  projectId: "e-commerce-tec-847f0",
  storageBucket: "e-commerce-tec-847f0.appspot.com",
  messagingSenderId: "853580644258",
  appId: "1:853580644258:web:203c566af9ced5cda2fcfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore();

export default db;
