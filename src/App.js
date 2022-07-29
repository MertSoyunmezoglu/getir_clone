
import Header from "./components/Header";

import { Link, NavLink, Route,Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Home from "pages/Home";


import Su from "pages/Su";
import Carsi from "pages/Carsi";
import Buyuk from "pages/Buyuk";
import Modal from "components/Modal";
import { useSelector } from "react-redux";
import Page404 from "components/404";
import { useState } from "react";
import ProtectedRoute from "authentication/ProtectedRoute";
import Login from "authentication/Login";
import PhoneSignUp from "authentication/PhoneSignUp";
import Signup from "authentication/Signup";
import Yemek from "pages/Yemek";
import { UserAuthContextProvider } from "context/UserAuthContext";

function App() {
    const {open, data} = useSelector(state=>state.modal)
    const [lost, setLost] = useState("false")
  
  return (
   <> 
   
   <Toaster position="top-right"/>
   {setLost===true ? null: <Header lost={lost}/>}

   <Link to="signup">Kayıt Ol </Link>
   <Link to="login">Giriş Yap </Link> 
   <UserAuthContextProvider>
   <Routes>
    <Route
    path="/home"
    element={
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    }
  />

 <Route path="/" element={<Home />} />
 <Route path="/login" element={<Login />} />
 <Route path="/phonesignup" element={<PhoneSignUp />} />
 <Route path="/signup" element={<Signup />} />
   <Route path="/" element={<Home/>}/>

   <Route path="/login" element={<Login/>}/>
   <Route path="/yemek" element={<Yemek/>}/>
   <Route path="/su" element={<Su/>}/>
   <Route path="/carsi" element={<Carsi/>}/>
   <Route path="/buyuk" element={<Buyuk/>}/>
   <Route path="*" element={<Page404/>}/>
   </Routes>
   </UserAuthContextProvider>
    {open && <Modal name={open} data={data}/>}
   
    

   </> 
  );
}

export default App;
