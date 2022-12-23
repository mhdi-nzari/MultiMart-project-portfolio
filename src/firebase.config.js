
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-cUoOUnZlza4CiODaD4fPRSTxFzCXBXo",
  authDomain: "maltimart-521d1.firebaseapp.com",
  projectId: "maltimart-521d1",
  storageBucket: "maltimart-521d1.appspot.com",
  messagingSenderId: "970882979169",
  appId: "1:970882979169:web:658f2ae47713a33e976120",
  measurementId: "G-N7FHR8S4G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app) 
export const storage  = getStorage(app) 

export default  app