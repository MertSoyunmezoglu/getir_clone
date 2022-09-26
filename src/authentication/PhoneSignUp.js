import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/UserAuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { modalClose } from "helper";
import { ContextProvider } from "context/GlobalContext";

const PhoneSignUp = () => {
  const [error, setError] = useState("");

  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const {  pathname, found,number,setNumber } = ContextProvider();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
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

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      if(pathname===found.path)
      { navigate(found.path + found.subPath);}
      else{navigate("kategoriler");}
      modalClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="  my-6  rounded-lg bg-white text-center w-[525px] h-[300px]    ">
        <div className="p-4 mt-10 ">
          <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <div className="border-2 w-28 flex rounded-lg pl-2 h-16  ">
                <PhoneInput
                  className="  gap-20 "
                  id="phone-input-container"
                  defaultCountry="TR"
                  display="none"
                  value={number}
                  onChange={setNumber}
                  placeholder="Telefon Numarası"
                />

                <span className=" absolute flex top-36 left-20  text-base items-center">
                  +90
                </span>
              </div>
              <div id="recaptcha-container" className="mt-2 flex "></div>
            </Form.Group>
            <div className="button-right mr-3">
              <button
                type="submit"
                className=" bg-brand-yellow     h-16 text-secondary-brand-color hover:text-brand-yellow hover:bg-secondary-brand-color w-full  flex items-center transition-all justify-center rounded-xl font-semibold text-lg font-sans"
              >
                Telefon numarası ile devam et
              </button>
            </div>
          </Form>
          <ol
            className="flex flex-col text-left  mt-6 text-sm gap-y-2 mb-14 font-semibold text-gray-400 "
            style={{ display: flag ? "none" : "block" }}
          >
            <li>
              Kişisel verilerinize dair Aydınlatma Metni için{" "}
              <a
                href="https://getir.com/yardim/kvkk/"
                className=" text-primary-brand-color underline"
              >
                tıklayınız
              </a>
              .
            </li>
          </ol>
          <label className=" text-gray-400 mb-9" 
          style={{ display: flag ? "block" : "none" }}
          >
          Lütfen {number} numaralı telefonuna gönderilen tek kullanımlık şifreyi giriniz.
          </label>
          <Form
            onSubmit={verifyOtp}
            style={{ display: flag ? "block" : "none" }}
          >
            <Form.Group className="mb-3" controlId="formBasicOtp">

                
                <label className=" mx-3 relative block group">
                <input
                  required
                  type="password"
                  className=" border-2 peer  border-gray-300  rounded-md h-14  w-full  hover:border-primary-brand-color "
                  onChange={(e) => setOtp(e.target.value)}
                />
                <span className=" absolute -top-1 left-1 h-full px-2 text-md text-gray-500 flex items-center peer-focus:text-primary-brand-color  text-md peer-focus:h-5 mt-1 peer-focus:text-xs transition-all peer-valid:h-5 ml-2 peer-valid:text-xs peer-valid:text-secondary-brand-color">
                  Şifre
                </span>
              </label>
            </Form.Group>
            <div className="button-right">
              <button
                type="submit"
                className=" bg-primary-brand-color mt-12 h-14 text-white hover:bg-secondary-brand-color w-full flex items-center transition-all justify-center rounded-xl font-semibold text-lg font-sans"
              >
                Onayla ve giriş yap
              </button>
            </div>
          </Form>
        </div>
        <div
          className="p-6 -m-3 mt-3 tracking-wide  box  text-center text-gray-500 bg-slate-100"
          style={{ display: flag ? "none" : "block" }}
        >
          Hala kayıt olmadınız mı?{" "}
          <Link to="/signup" className=" text-primary-brand-color">
            Kayıt Ol
          </Link>
        </div>
        
        <div
          className="p-6 -m-3 mt-3 tracking-wide  box  text-center text-gray-500 bg-slate-100"
          style={{ display: flag ? "block" : "none" }}
        >
          Şifre gelmedi mi?{" "}
          <Link to="/signup" className=" text-primary-brand-color font-semibold">
            Tek kullanımlık şifreyi tekrar gönder
          </Link>
        </div>
      </div>
    </>
  );
};

export default PhoneSignUp;
