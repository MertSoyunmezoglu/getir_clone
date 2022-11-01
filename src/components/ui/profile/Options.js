import React from "react";
import { NavLink } from "react-router-dom";

export default function Options({ click }) {
  const options = [
    { name: "Adreslerim", to: "/hesap/adreslerim" },
    { name: "Favori Ürünlerim", to: "/hesap/favori-urunlerim" },
    { name: "Geçmiş Siparişlerim", to: "/hesap/gecmis-siparislerim" },
    { name: "Ödeme Yöntemlerim", to: "/hesap/odeme-yontemlerim" },
    { name: "Fatura Bilgileri", to: "/hesap/fatura" },
    { name: "İletişim Tercihlerim", to: "/hesap/iletisim-tercihleri" },
  ];

  return (
    <>
      {options.map((option) =>
        click ? (
          <NavLink to={option.to} tabindex="5" role="menuitem">
            <button className=" py-3   flex  w-full px-4  leading-5 hover:bg-purple-50 hover:text-secondary-brand-color text-left">
              {option.name}
            </button>
          </NavLink>
        ) : (
          <NavLink to={option.to} tabindex="5" role="menuitem">
            <span className=" mx-5 flex flex-col md:flex-row items-center md:justify-start justify-center      border-t border-gray-200">
              <button className=" py-4   flex justify-center sm:justify-between w-full   leading-5   hover:text-primary-brand-color text-left">
                {option.name}
              </button>
            </span>
          </NavLink>
        )
      )}
    </>
  );
}
