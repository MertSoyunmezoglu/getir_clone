
import Footer from "components/ui/footer/Footer";
import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "components/ui/header/Header";
import { Outlet } from "react-router-dom";

export default function YemekLayout() {
  const [foodCard, setFoodCard] = useState(true);
  const [foodBanner, setFoodBanner] = useState(true);

  return (
    <>
    <div className="yemek">
      <Header />
      <Helmet>
        <title>GetirYemek - Yemek siparişi artık Getir farkıyla!</title>
      </Helmet>

      <Outlet />
      
    </div>
    </>
    
  );
}
