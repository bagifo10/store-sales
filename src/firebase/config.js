import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace with your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDEB7AhLzLRYO0pmHm3XFR1uPEIo6Zsj3Q",
    authDomain: "shop-689bc.firebaseapp.com",
    projectId: "shop-689bc",
    storageBucket: "shop-689bc.appspot.com",
    messagingSenderId: "429258787233",
    appId: "1:429258787233:web:aae7d9792caa0a7f1a23e0",
    measurementId: "G-93WTDCTB2X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
storage.maxUploadRetryTime = 10000;

export default app;
