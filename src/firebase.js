import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { ref } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcC4868ezexcyGC34UpX2YEv9C7LETRz0",
  authDomain: "e-d9642.firebaseapp.com",
  projectId: "e-d9642",
  storageBucket: "e-d9642.appspot.com",
  messagingSenderId: "5274893733",
  appId: "1:5274893733:web:be7d9df7bbb82d71eb3c4c",
  measurementId: "${config.measurementId}",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);

// to established database
const db = firebaseApp.firestore();

// for Authentications
const auth = firebase.auth();

// provider

var provider = new firebase.auth.GoogleAuthProvider();

const storage = getStorage(firebaseApp);
const storageRef = ref(storage);
export { db, auth, provider, storage, firebase, storageRef };
