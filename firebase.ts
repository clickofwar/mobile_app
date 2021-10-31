import firebase from "firebase";
import { FIREBASE_KEY } from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "choose-cc6fe.firebaseapp.com",
  databaseURL: "https://choose-cc6fe.firebaseio.com",
  projectId: "choose-cc6fe",
  storageBucket: "choose-cc6fe.appspot.com",
  messagingSenderId: "766501638878",
  appId: "1:766501638878:web:d610e9b9fbc717a58a684f",
  measurementId: "G-28EF3SF7PP",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
