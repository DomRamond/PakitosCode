import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const myKey = process.env.REACT_APP_FIREBASE_CONFIG
const firebaseConfig = JSON.parse(myKey)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth