import ApplyNow from "components/ApplyNow";
import Campaigns from "components/Campaigns";
import Cards from "components/Cards";
import Categories from "components/Categories";
import Favorites from "components/Favorites";
import Footer from "components/Footer";
import Header from "components/Header";
import HeroSection from "components/HeroSection";
import MobileApp from "components/MobileApp";
import React from "react";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import burgervid from "../assets/burgervid.mp4";
import { BsSearch } from "react-icons/bs";
import { BiCrosshair } from "react-icons/bi";
import { Helmet } from "react-helmet";
import { openModal } from "store/modal";
import store from "store";
import { CgDanger } from "react-icons/cg";

export default function LocationForm({ show }) {
  const [selected, setSelected] = useState("TR");
  const handleMapsModal = () => {
    store.dispatch(openModal({ name: "maps" }));
  };
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedPhoneNumber);
  };
  function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\0-9]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) {
      return phoneNumber;
    }
    if (phoneNumberLength < 12) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(4)}`;
    }
  }
  return (
    <div className=" absolute inset-0  sm:px-8 justify-end mr-16 flex items-center">
      <div className="   rounded-lg text-center w-[395px] pt-5  h-[365px] mx-12 bg-gray-50  ">
        <div>
          {show === true ? null : (
            <h4 className="text-primary-brand-color font-semibold tracking-normal text-center mb-4  text-md">
              Adresine getiren restoranları gör{" "}
            </h4>
          )}
          <label className="  relative block group mt-8 ">
            <button onClick={handleMapsModal}>
              <input
                required
                type="text"
                className="border-2 peer  border-gray-300  rounded-md h-16  w-[355px] group-focus:border-primary-brand-color peer-focus:border-primary-brand-color group-hover:border-secondary-brand-color "
              />
              <span className=" absolute -top-1 left-0 h-full px-4 ml-6 text-sm text-gray-500 flex items-center text-md gap-x-3 transition-all mt-1">
                <BsSearch color="#5c3cbb" size={16} /> Örn. Etiler Mah.
              </span>
              <a
                href="#"
                onClick={handleMapsModal}
                className=" absolute -top-1 right-0 h-10 mr-10  font-semibold   text-primary-brand-color px-2 rounded-lg  bg-secondary-brand-color bg-opacity-10 gap-x-1  flex items-center text-sm transition-all mt-4"
              >
                <BiCrosshair size={20} />
                Konumumu Bul
              </a>
            </button>
          </label>
        </div>
        <div className="justify-between absolute flex flex-row mt-2 ml-2  ">
          <div className=" flex   border-t-2 border-primary-brand-color opacity-10 w-44 -ml-2 mt-3 "></div>
          <div className=" font-semibold text-sm opacity-60 mx-2 mt-1">
            veya
          </div>
          <div className=" flex border-t-2 border-primary-brand-color opacity-10  w-44   mt-3 "></div>
        </div>

        <h4 className="text-primary-brand-color font-semibold text-center mt-12  text-md ">
          Giriş Yap veya Kayıt Ol
        </h4>
        <div className="flex mt-4">
          {" "}
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
            className="flag-select"
          />
          <label className=" mx-5 relative block group">
            <input
              required
              type="text"
              maxLength={11}
              value={inputValue}
              onChange={(e) => handleInput(e)}
              className={` flex-nowrap border-2 peer  hover:border-primary-brand-color   border-gray-300  rounded-md h-14 w-[252px]   ${
                inputValue.length < 11 ? "focus:border-red-400 " : "null"
              } `}
            />
            {inputValue.length >= 1 && inputValue.length < 11 ? (
              <span className=" absolute text-red-600 top-4 right-0 h-full px-4">
                <CgDanger size={24} />
              </span>
            ) : null}
            <span className=" absolute -top-1 left-0 h-full px-2 text-sm text-gray-500 flex items-center text-md peer-focus:h-5  ml-2 peer-focus:mt-1 peer-valid:mt-1 peer-focus:text-xs transition-all peer-valid:h-5 peer-valid:text-xs peer-valid:text-secondary-brand-color">
              Telefon Numarası
            </span>
          </label>
        </div>
        {inputValue.length >= 1 && inputValue.length < 11 ? (
          <span className="ml-24 text-xs text-red-600">
            Lütfen geçerli bir telefon numarası giriniz.
          </span>
        ) : null}
        <button
          type="submit"
          className=" bg-brand-yellow ml-5 mt-2 h-12 text-secondary-brand-color hover:text-brand-yellow hover:bg-secondary-brand-color w-[360px] flex items-center transition-all justify-center rounded-md font-semibold text-md font-sans"
        >
          Telefon numarası ile devam et{" "}
        </button>
      </div>
    </div>
  );
}
