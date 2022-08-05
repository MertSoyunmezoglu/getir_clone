import Header from "./components/Header";

import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Kategoriler from "pages/subPages/Kategoriler";
import Isletmeler from "pages/subPages/Isletmeler";
import Restoranlar from "pages/subPages/Restoranlar";

function App() {
  const { open, data } = useSelector((state) => state.modal);

  return (
    <>
      <ToastContainer />

      <Link to="signup">Kayıt Ol </Link>
      <Link to="login">Giriş Yap </Link>
      <UserAuthContextProvider>
        {open && <Modal name={open} data={data} />}
        <Routes>
          <Route
            path="/kategoriler"
            element={
             // <ProtectedRoute>
                <Kategoriler />
           //   </ProtectedRoute>
            }
          />

          <Route path="/phonesignup" element={<PhoneSignUp />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />

          <Route path="/yemek" element={<Yemek />} />
          <Route
            path="/yemek/restoranlar"
            element={
              <ProtectedRoute>
                <Restoranlar />
              </ProtectedRoute>
            }
          />

          <Route path="/buyuk" element={<Buyuk />} />
          <Route
            path="/buyuk/kategoriler"
            element={
              <ProtectedRoute>
                <Kategoriler />
              </ProtectedRoute>
            }
          />

          <Route path="/su" element={<Su />} />
          <Route
            path="/su/kategoriler"
            element={
              <ProtectedRoute>
                <Kategoriler />
              </ProtectedRoute>
            }
          />

          <Route path="/carsi" element={<Carsi />} />
          <Route
            path="/carsi/isletmeler"
            element={
              <ProtectedRoute>
                <Isletmeler />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
