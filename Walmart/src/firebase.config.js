
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBxOOjzIKdic87jHnMFl6JWINTbww5CKCk",
  authDomain: "maltimart-ecea8.firebaseapp.com",
  projectId: "maltimart-ecea8",
  storageBucket: "maltimart-ecea8.appspot.com",
  messagingSenderId: "524502134102",
  appId: "1:524502134102:web:d5a876f7460c4f4afafaf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
// const analytics = getAnalytics(app);