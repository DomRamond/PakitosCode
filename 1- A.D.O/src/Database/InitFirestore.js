import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const myKey = process.env.REACT_APP_FIREBASE_CONFIG
const firebaseConfig = JSON.parse(myKey)

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
