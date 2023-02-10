import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBxnZmgiTqa1KntGHYrCkMeTmsrKVbOohs",
  authDomain: "ecomerce-8f318.firebaseapp.com",
  projectId: "ecomerce-8f318",
  storageBucket: "ecomerce-8f318.appspot.com",
  messagingSenderId: "460733727256",
  appId: "1:460733727256:web:882e525e44405302df796d",
  measurementId: "G-W98MEFMHW0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
