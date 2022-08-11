import React from "react";

import { Link, useNavigate } from "react-router-dom";


import Header from "components/Header";

import Campaigns from "components/Campaigns";


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


