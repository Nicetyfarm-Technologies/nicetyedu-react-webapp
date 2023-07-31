import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBlC-F4T0rHZvcPIBQKE98up608LIh5tfU",
  authDomain: "nicetyedu-app.firebaseapp.com",
  projectId: "nicetyedu-app",
  storageBucket: "nicetyedu-app.appspot.com",
  messagingSenderId: "509399461359",
  appId: "1:509399461359:web:266d4b518a78bc78bd5a1a",
  measurementId: "G-QD2L69ZELM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default auth;