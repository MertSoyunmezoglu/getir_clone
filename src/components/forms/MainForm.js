
import React from "react";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { CgDanger } from "react-icons/cg";
import store from "store";
import { openModal } from "store/modal";
export default function MainForm() {
  const [selected, setSelected] = useState("TR");
  const [inputValue, setInputValue] = useState("");

  const handleLoginModal = () => {
    store.dispatch(openModal({ name: "login" }));
  };
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
    <div className="    rounded-lg text-center md:w-[400px] w-[600px]   px-20 md:px-0   h-[200px]  bg-gray-50  ">
      <h4 className="text-primary-brand-color  font-semibold text-center mt-6  text-md ">
        Giriş Yap veya Kayıt Ol
      </h4>
      <div className="flex mt-3 ml-1  gap-2 ">
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
          className="flag-select w-30 "
        />
        <label className=" mx-5 relative block group">
          <input
          onClick={handleLoginModal}
            required
            type="text"
            maxLength={11}
            value={inputValue}
            onChange={(e) => handleInput(e)}
            className={`border-2 peer  border-gray-300  rounded-md h-14  w-60  hover:border-primary-brand-color  ${
              inputValue.length < 11 ? "focus:border-red-400 " : "null"
            } `}
          />
          {inputValue.length >= 1 && inputValue.length < 11 ? (
            <span className=" absolute text-red-600 top-4  right-0 h-full px-4">
              <CgDanger size={24} />
            </span>
          ) : null}
          <span className=" absolute -top-1 left-0 h-full px-2 text-sm text-gray-500 flex items-center peer-focus:text-primary-brand-color  text-md peer-focus:h-5 mt-1 peer-focus:text-xs transition-all peer-valid:h-5 ml-2 peer-valid:text-xs peer-valid:text-secondary-brand-color">
            Telefon Numarası
          </span>
        </label>
      </div>
      {inputValue.length >= 1 && inputValue.length < 11 ? (
        <span className="ml-28 text-xs  text-red-600">
          Lütfen geçerli bir telefon numarası giriniz.
        </span>
      ) : null}
      <button
        type="submit"
        className=" bg-brand-yellow ml-5 mt-1 mb-4  h-12 text-secondary-brand-color hover:text-brand-yellow hover:bg-secondary-brand-color w-[360px] flex items-center transition-all justify-center rounded-md font-semibold text-md font-sans"
      >
        Telefon numarası ile devam et{" "}
      </button>
    </div>
  );
}
