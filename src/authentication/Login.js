import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";


import { useUserAuth } from "../context/UserAuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextProvider } from "context/GlobalContext";

function Login  () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginTitle, setLoginTitle] = useState(true);
  const { logIn } = useUserAuth();
  const { paths, pathname, found } = ContextProvider();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);

     {      if(pathname===found.path)
      { navigate(found.path + found.subPath);}
      else{navigate("kategoriler");}
    ;}
 
    
    } catch (err) {
      setError(err.message);
      {
        error &&
          toast.error(error, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      }
    }
  };

  return (
    <>
      <div className="    rounded-lg text-center w-[550px] h-[400px]  bg-white  ">
        <div className="p-4 ">
 
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <label className=" mx-3 relative block group">
                <input
                  required
                  type="email"
                  className=" border-2 peer  border-gray-300  rounded-md h-14  w-full  hover:border-primary-brand-color "
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className=" absolute -top-1  h-full px-2 text-md text-gray-500 flex items-center peer-focus:text-primary-brand-color  text-md peer-focus:h-5 mt-1 peer-focus:text-xs transition-all peer-valid:h-5 ml-2 peer-valid:text-xs peer-valid:text-secondary-brand-color">
                  E-Posta
                </span>
              </label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <label className=" mx-3 relative block group">
                <input
                  required
                  type="password"
                  className=" border-2 peer  border-gray-300  rounded-md h-14  w-full  hover:border-primary-brand-color "
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className=" absolute -top-1  h-full px-2 text-md text-gray-500 flex items-center peer-focus:text-primary-brand-color  text-md peer-focus:h-5 mt-1 peer-focus:text-xs transition-all peer-valid:h-5 ml-2 peer-valid:text-xs peer-valid:text-secondary-brand-color">
                  Şifre
                </span>
              </label>
            </Form.Group>

            <div className="d-grid gap-2">
              <button
                type="Submit"
                className=" bg-brand-yellow mt-1 h-14 text-primary-brand-color hover:bg-secondary-brand-color hover:text-brand-yellow w-full flex items-center transition-all justify-center rounded-xl font-semibold text-lg font-sans"
              >
                Giriş Yap
              </button>
            </div>
          </Form>
 
          <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
          <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
          <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
          </div>
          <div className="justify-between absolute flex flex-row -mt-10   ">
            <div className=" flex   border-t-2 border-primary-brand-color opacity-10 w-44 -ml-4 mt-3 "></div>
            <div className=" font-semibold text-sm opacity-60 mx-2 mt-1">
              veya
            </div>
            <div className=" flex border-t-2 border-primary-brand-color opacity-10  w-44   mt-3 "></div>
          </div>
          <Link to="/phonesignup">
            <div className=" mt-12">
              <button
                type="Submit"
                className=" bg-brand-yellow mt-1 h-14 text-primary-brand-color hover:bg-secondary-brand-color hover:text-brand-yellow w-full flex items-center transition-all justify-center rounded-xl font-semibold text-lg font-sans"
              >
                Telefon numarası ile devam et
              </button>
            </div>
          </Link>
        </div>
        <div className="p-4 box mt-3 text-center bg-slate-100">
          Hala kayıt olmadınız mı?{" "}
          <Link to="/signup" className=" text-primary-brand-color">
            Kayıt Ol
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
