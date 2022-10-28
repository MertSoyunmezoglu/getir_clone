import MainForm from "components/forms/MainForm";
import React from "react";

export default function   HomeContent() {
  return (
    <div className="relative  md:absolute inset-0 sm:px-8 z-[40] flex ">
      <div className="w-full left-0 md:left-1/2 translate-x-0 sm:container flex mx-auto justify-between items-center">
        <div className="gap-y-10  flex-col hidden sm:flex">
          <img
            className=" w-44"
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
          />
          <h3 className=" text-3xl gap-4 xl:text-4xl   text-white font-semibold ">
            Dakikalar içinde <br /> kapınızda!
          </h3>
        </div>
        <MainForm />
      </div>
    </div>
  );
}
