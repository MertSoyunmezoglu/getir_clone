import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAme8bW5kn1tKi6INUvdJ_2htO-ab7L7JY",
  authDomain: "mert-auth.firebaseapp.com",
  projectId: "mert-auth",
  storageBucket: "mert-auth.appspot.com",
  messagingSenderId: "91953277204",
  appId: "1:91953277204:web:113ac1c6a99946ad5e3a01",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
