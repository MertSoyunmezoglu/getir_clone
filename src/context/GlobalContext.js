import { createContext, React, useContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [phoneCheck, setPhoneCheck] = useState(false);

  function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\0-9]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) {
      return phoneNumber.replace(/[6-9]/g, "");
    }
    if (4 < phoneNumberLength < 12) {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(4)}`;
    }
  }

  const paths = [
    { path: "/", subPath: "kategoriler" },
    { path: "/yemek", subPath: "/restoranlar" },
    { path: "/buyuk", subPath: "/kategoriler" },
    { path: "/su", subPath: "/kategoriler" },
    { path: "/carsi", subPath: "/isletmeler" },
  ];
  const pathname = window.location.pathname;
  const found = paths.find((path) => path.path === pathname);

  return (
    <GlobalContext.Provider
      value={{ pathname, found, formatPhoneNumber, phoneCheck, setPhoneCheck }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export function ContextProvider() {
  return useContext(GlobalContext);
}
