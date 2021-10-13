import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCaIxq5mK7KYuVHddeZmjkaLlFPwF9zl_Y",
  authDomain: "instagrm-clone-4e7c4.firebaseapp.com",
  projectId: "instagrm-clone-4e7c4",
  storageBucket: "instagrm-clone-4e7c4.appspot.com",
  messagingSenderId: "177643827591",
  appId: "1:177643827591:web:7040abe47cc1b22db02322",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
