import Header from "./components/Header";

import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Carsi from "pages/Carsi";

import Modal from "components/Modal";
import { useSelector } from "react-redux";
import Page404 from "components/404";
import { useEffect, useState } from "react";
import ProtectedRoute from "authentication/ProtectedRoute";
import Login from "authentication/Login";
import PhoneSignUp from "authentication/PhoneSignUp";
import Signup from "authentication/Signup";

import HomeLayout from "pages/anasayfa";
import Home from "pages/anasayfa/Home";
import YemekLayout from "pages/yemek";
import Yemek from "pages/yemek/Yemek";
import BuyukLayout from "pages/buyuk";
import Buyuk from "pages/buyuk/Buyuk";
import SuLayout from "pages/su";
import Su from "pages/su/Su";
import { UserAuthContextProvider } from "context/UserAuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Kategoriler from "pages/subPages/Kategoriler";
import Isletmeler from "pages/subPages/Isletmeler";
import Restoranlar from "pages/yemek/Restoranlar";
import { GlobalContextProvider } from "context/GlobalContext";
import category from "api/categories.json";

function App() {
  const { open, data } = useSelector((state) => state.modal);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(category);
  }, []);

  return (
    <>
      <ToastContainer />

      <GlobalContextProvider>
        <UserAuthContextProvider>
          {open && <Modal name={open} data={data} />}
          <Routes>
            <Route path="/phonesignup" element={<PhoneSignUp />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<HomeLayout />}>
              <Route index={true} element={<Home />} />
              <Route
                path="kategoriler"
                element={
                  <ProtectedRoute>
                    <Kategoriler />
                  </ProtectedRoute>
                }
              >
                <Route path=":id" element={<Kategoriler />}>
                  <Route path=":number" element={<Kategoriler />} />
                </Route>
              </Route>
            </Route>

            <Route path="/yemek" element={<YemekLayout />}>
              <Route index={true} element={<Yemek />} />
              <Route
                path="restoranlar"
                element={
                  <ProtectedRoute>
                    <Restoranlar />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="/buyuk" element={<BuyukLayout />}>
              <Route index={true} element={<Buyuk />} />
              <Route
                path="kategoriler"
                element={
                  <ProtectedRoute>
                    <Kategoriler />
                  </ProtectedRoute>
                }
              />
              <Route path=":list" element={<Kategoriler />}>
                <Route path=":sublist" element={<Kategoriler />}>
                  <Route path=":id" element={<Kategoriler />} />
                </Route>
              </Route>
            </Route>

            <Route path="/su" element={<SuLayout />}>
              <Route index={true} element={<Su />} />
              <Route
                path="kategoriler"
                element={
                  <ProtectedRoute>
                    <Kategoriler />
                  </ProtectedRoute>
                }
              />
              <Route path=":list" element={<Kategoriler />}>
              <Route path=":sublist" element={<Kategoriler />}>
                <Route path=":id" element={<Kategoriler />} />
              </Route>
            </Route>
            </Route>

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
      </GlobalContextProvider>
    </>
  );
}

export default App;
