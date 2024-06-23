import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDdxP5OE_Xw0ELYLS6aEVItK4mS2mRzHoU",
  authDomain: "sportpit-47d69.firebaseapp.com",
  projectId: "sportpit-47d69",
  storageBucket: "sportpit-47d69.appspot.com",
  messagingSenderId: "381561802490",
  appId: "1:381561802490:web:d948aadb4cb1ae4edb0343",
  measurementId: "G-N6HSTTZF4M"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
