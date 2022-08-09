import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactFlagsSelect from "react-flags-select";
import { CgDanger } from "react-icons/cg";
import { modalClose } from "helper";
import { ContextProvider } from "../context/GlobalContext";

const Signup = () => {
  const [selected, setSelected] = useState("TR");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rule, setRule] = useState(false);
  const [inputValue, setInputValue] = useState("");



  const { signUp } = useUserAuth();
 const {  pathname, found, formatPhoneNumber,setPhoneCheck,phoneCheck } = ContextProvider();
  
  let navigate = useNavigate();
console.log(pathname);
  const handleInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedPhoneNumber);
    
  };
  
  useEffect(() => {
    if( inputValue.length >=1 && inputValue.length < 11  ){
      setPhoneCheck(true)
    }else{
      setPhoneCheck(false)
    }

  }, [inputValue])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password, name, );
      if(pathname===found.path)
      { navigate(found.path + found.subPath);}
      else{navigate("kategoriler");}
      console.log(name);
   
      modalClose();
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
      <div className="    rounded-lg text-center w-[500px] h-[630px]  bg-white  ">
        <div className="p-4 box">


          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="flex mt-4 mb-3 gap-5"
              controlId="formBasicNumber"
            >
              <ReactFlagsSelect
                countries={["US", "GB", "TR", "FR", "DE", "IT"]}
                customLabels={{
                  US: "+1",
                  GB: "+10",
                  TR: "+90",
                  FR: "+33",
                  DE: "+75",
                  IT: "+5",
                }}
                placeholder="Select Country"
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select -ml-1"
              />
              <label className=" mx-3  relative block group">
                <input
                  required
                  type="text"
                  maxLength={11}
                  value={inputValue}
                  onChange={handleInput}
                  className={` flex-nowrap border-2 peer  hover:border-primary-brand-color   border-gray-300  rounded-md h-14 w-[322px]    ${
                    phoneCheck === true ? "focus:border-red-400 " : "null"
                  } `}
                />
                {phoneCheck === true  ? (
                  <span className=" absolute text-red-600 top-4 right-0 h-full px-4">
                    <CgDanger size={24} />
                  </span>
                ) : null}
                <span className=" absolute -top-1 left-0 h-full px-2 text-md text-gray-500 flex items-center text-md peer-focus:h-5  ml-2 peer-focus:mt-1 peer-valid:mt-1 peer-focus:text-xs transition-all peer-valid:h-5 peer-valid:text-xs peer-valid:text-secondary-brand-color">
                  Telefon Numarası
                </span>
                {phoneCheck === true  ? (
                  <span className=" text-xs  text-red-600">
                    Lütfen geçerli bir telefon numarası giriniz.
                  </span>
                ) : null}
              </label>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicName">
              <label className=" mx-3 relative block group">
                <input
                  required
                  type="text"
                  className={` border-2 peer  border-gray-300  rounded-md h-14  w-full  hover:border-primary-brand-color  ${
                    phoneCheck === true ? "focus:border-red-400 " : "null"
                  } `}
                  onChange={(e) => setName(e.target.value)}
                />

                <span className=" absolute -top-1 left-3 h-full  text-md text-gray-500 flex items-center peer-focus:text-primary-brand-color  text-md peer-focus:h-5 mt-1 peer-focus:text-xs transition-all peer-valid:h-5 ml-2 peer-valid:text-xs peer-valid:text-secondary-brand-color">
                  Ad Soyad
                </span>
              </label>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicEmail">
              <label className=" mx-3 relative block group">
                <input
                  required
                  type="email"
                  className=" border-2 peer  border-gray-300  rounded-md h-14  w-full  hover:border-primary-brand-color "
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className=" absolute -top-1 left-1 h-full px-2 text-md text-gray-500 flex items-center peer-focus:text-primary-brand-color  text-md peer-focus:h-5 mt-1 peer-focus:text-xs transition-all peer-valid:h-5 ml-2 peer-valid:text-xs peer-valid:text-secondary-brand-color">
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
                <span className=" absolute -top-1 left-1 h-full px-2 text-md text-gray-500 flex items-center peer-focus:text-primary-brand-color  text-md peer-focus:h-5 mt-1 peer-focus:text-xs transition-all peer-valid:h-5 ml-2 peer-valid:text-xs peer-valid:text-secondary-brand-color">
                  Şifre
                </span>
              </label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <label className=" mx-3 relative mt-6 flex hover:cursor-pointer">
                <input
                  type="checkbox"
                  checked={rule}
                  className="border-2 w-7 h-7 border-gray-300  rounded-md  ml-2 hover:border-primary-brand-color transition-all "
                  onChange={(e) => setRule(e.target.checked)}
                />
                <span className="text-left text-sm ml-4 text-gray-400 font-semibold">
                  Getir'in bana özel kampanya, tanıtım ve fırsatlarından <br />{" "}
                  haberdar olmak istiyorum{" "}
                </span>
              </label>
            </Form.Group>

            <ol className="flex flex-col text-left mx-5 mt-6 text-sm gap-y-2 mb-14 font-semibold text-gray-400 ">
              <li>
                <span className="relative before:w-2 before:h-2 mr-2 before:rounded-3xl before:bg-primary-brand-color before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 ">
                  {" "}
                </span>
                Kayıt olmakla{" "}
                <a
                  href="https://getir.com/yardim/kullanim-kosullari/"
                  className=" text-primary-brand-color underline"
                >
                  Kullanım Koşulları'
                </a>
                nı onaylamış olursunuz.
              </li>
              <li>
                <span className="relative before:w-2 before:h-2 mr-2 before:rounded-3xl before:bg-primary-brand-color before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 ">
                  {" "}
                </span>
                Kişisel verilerinize dair Aydınlatma Metni için{" "}
                <a
                  href="https://getir.com/yardim/kvkk/"
                  className=" text-primary-brand-color underline"
                >
                  tıklayınız
                </a>{" "}
                .
              </li>
            </ol>

            <div className="d-grid mx-3">
              <button
                type="Submit"
                className=" bg-primary-brand-color mt-1 h-14 text-white hover:bg-secondary-brand-color w-full flex items-center transition-all justify-center rounded-xl font-semibold text-lg font-sans"
              >
                Kayıt Ol
              </button>
            </div>
          </Form>
        </div>
        <div className="p-6 -m-3 mt-3 tracking,wide  box  text-center text-gray-500 bg-slate-100">
          Getir'e üyeyseniz{" "}
          <Link to="/login" className=" text-primary-brand-color text-md font-semibold">
            Giriş Yap
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
