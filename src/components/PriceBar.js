import { ContextProvider } from "context/GlobalContext";
import React from "react";
import PriceBarBig from "./ui/pricebar/PriceBarBig";
import PriceBarHome from "./ui/pricebar/PriceBarHome";
import PriceBarWater from "./ui/pricebar/PriceBarWater";

export default function PriceBar() {



  const pathname = window.location.pathname 
  console.log(pathname);
  if (pathname === "/kategoriler") {
    return <PriceBarHome />;
  }
  if (pathname === "/su/kategoriler") {
    return <PriceBarWater />;
  }
  if (pathname === "/buyuk/kategoriler") {
    return <PriceBarBig />;
  }
  return (
    <>
    
    </>
  );
}
