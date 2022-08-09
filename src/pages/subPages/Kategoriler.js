import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "components/Header";
import HeroSection from "components/HeroSection";
import Categories from "components/Categories";
import Campaigns from "components/Campaigns";
import Favorites from "components/ProductItems";
import MobileApp from "components/MobileApp";
import Cards from "components/Cards";
import Footer from "components/Footer";
import { Helmet } from "react-helmet";
import { useState } from "react";

import { useUserAuth } from "../../context/UserAuthContext";
import Search from "components/Search";
import PriceBar from "components/PriceBar";
import MainGrid from "components/MainGrid";

 function Kategoriler () {

const [validHomeBanner, setvalidHomeBanner] = useState(true)




  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  console.log(user);
  const handleLogout = () => {
    try {
        logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <div>
    {user && user.email}
      <button  className=" bg-slate-400 h-14" onClick={handleLogout}>
      Log out
    </button>
    <div>
    <Helmet>
      <title>Getir - Dakikalar içinde Kapınızda</title>
    </Helmet>
    <Header />
    <Search/>
    <PriceBar/><div className=" container mx-auto">
   <Campaigns  validHomeBanner={validHomeBanner}/>
   </div>
   <MainGrid/>
    
    
  </div>
    </div>
  );
};

export default Kategoriler;

