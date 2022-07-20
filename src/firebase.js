// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, sendEmailVerification, signOut} from "firebase/auth";
import toast from 'react-hot-toast';
import store from './store';
import {login as loginHandle, logout as logoutHandle } from './store/auth';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MEESAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register= async(email,password) =>{
  try{
  const {user} = await createUserWithEmailAndPassword(auth,email,password )
  return user }
  catch (error) {
    toast.error(error.message);
  }
}

export const login = async (email, password) =>{
  try {
  const {user} =  await signInWithEmailAndPassword(auth,email,password)
  return user }
  catch (error) {
    toast.error(error.message);
  }
}

export const logout = async () =>{
  try {
   await signOut(auth)
  return true }
  catch (error) {
    toast.error(error.message);
  }
}
 export const emailVerification = async () =>{
  
   await  sendEmailVerification(auth.currentUser).then(()=>{ toast.message("Hata")
  }).catch(success=>{toast.success(`E-Posta onay kodu ${auth.currentUser.email} adresine gönderildi.`)})
 }

onAuthStateChanged(auth, (user) => {
  if (user) {
   
    store.dispatch(loginHandle(user))
  } else {
    store.dispatch(logoutHandle())
  }
});

export default app;