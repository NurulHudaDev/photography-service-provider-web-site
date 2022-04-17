import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJQtGf9L82FFYgTrmAd5ZWeMymCzNS-R0",
  authDomain: "photographer-assignment-10.firebaseapp.com",
  projectId: "photographer-assignment-10",
  storageBucket: "photographer-assignment-10.appspot.com",
  messagingSenderId: "858801436231",
  appId: "1:858801436231:web:ab9b28723b11e62848a362"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;