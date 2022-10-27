import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

import "react-toastify/dist/ReactToastify.css";

import { modalClose } from "helper/helper";
import { ContextProvider } from "context/GlobalContext";

const AddressModal = () => {
  const {  setAddress } = ContextProvider();
  const [name, setName] = useState("")
  const handleSubmit = (e) => {
    setAddress(name)
    e.preventDefault();
    

    modalClose();
  };

  return (
    <>
      <div className="    rounded-lg text-center w-[500px] h-[340px]  bg-white  ">
      <label>Lütfen Adres Bilgilerinizi Ekleyiniz</label>
        <div className="p-4 box">
          <Form onSubmit={handleSubmit} >
          
            <Form.Group className="mb-5 mt-12" controlId="textarea">
              <label className=" mx-3 relative block group"> 
                <input
                  required
                  type="text"
                  className=" border-2 peer pt-4  border-gray-300  rounded-md h-44  w-full  hover:border-primary-brand-color"
                 onChange={(e) => setName(e.target.value)}
                />

                <span className=" absolute select-none pointer-event -top-16 left-3 h-full text text-md text-gray-500 flex items-center peer-focus:text-primary-brand-color  text-md peer-focus:h-36 mt-1 peer-focus:text-xs transition-all peer-valid:h-36 ml-2 peer-valid:text-xs peer-valid:text-secondary-brand-color">
                Lütfen açık adres bilgilerinizi giriniz.
                </span>
              </label>
            </Form.Group>

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
      </div>
    </>
  );
};

export default AddressModal;
