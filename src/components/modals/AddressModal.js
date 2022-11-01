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
      <div className="   sm:text-base text-xxs rounded-lg text-center  w-auto sm:w-[500px] h-auto  bg-white  ">
      <div className="  sm:text-xl text-lg  mr-4  text-primary-brand-color font-semibold" >Adres</div>
        <div className="p-4 ">
          <Form onSubmit={handleSubmit} >
          
            <Form.Group className="mb-5 mt-4 sm:mt-12" controlId="textarea">
              <label className=" mx-3 relative block group"> 
                <input
                  required
                  type="text"
                  className=" border-2 peer pt-4  border-gray-300  rounded-md h-44  w-full  hover:border-primary-brand-color"
                 onChange={(e) => setName(e.target.value)}
                />

                <span className=" absolute select-none pointer-event   -top-16 sm:left-3 left-0 h-full    text-md text-gray-500 flex items-center peer-focus:text-primary-brand-color  peer-focus:h-36 mt-1 peer-focus:text-xxs transition-all peer-valid:h-36 ml-2 peer-valid:text-xxs peer-valid:text-secondary-brand-color">
                Lütfen açık adres bilgilerinizi giriniz.
                </span>
              </label>
            </Form.Group>

            <div className="d-grid mx-3">
              <button
             
                type="Submit"
                className=" bg-primary-brand-color mt-1 h-14 text-white hover:bg-secondary-brand-color w-full flex items-center transition-all justify-center rounded-xl font-semibold text-lg font-sans"
              >
                Kaydet
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddressModal;
