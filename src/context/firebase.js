import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyAS3s-copNGGbKMvLBGUSlffXAOQVr_N-o",
  authDomain: "twiller-70f62.firebaseapp.com",
  projectId: "twiller-70f62",
  storageBucket: "twiller-70f62.appspot.com",
  messagingSenderId: "413864245410",
  appId: "1:413864245410:web:d78af58268e654f60bfffb",
  measurementId: "G-Z329VH3VG8",
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
