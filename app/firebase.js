import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzoQ1WOL8fmvaV2r-4ZWk-XSnng0Qt5eA",
  authDomain: "notes-share-3ba29.firebaseapp.com",
  projectId: "notes-share-3ba29",
  storageBucket: "notes-share-3ba29.appspot.com",
  messagingSenderId: "617219946694",
  appId: "1:617219946694:web:fdfa70d92ff7529ad2bfc7",
  measurementId: "G-87HQN8Z9VG",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage, ref, uploadBytesResumable, getDownloadURL };
