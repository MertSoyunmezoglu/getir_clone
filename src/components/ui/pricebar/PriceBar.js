
import React from "react";
import PriceBarBig from "./PriceBarBig";
import PriceBarHome from "./PriceBarHome";
import PriceBarWater from "./PriceBarWater";

export default function PriceBar() {



  const pathname = window.location.pathname 

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
