import Footer from "components/ui/footer/Footer";
import Header from "components/ui/header/Header";
import Search from "components/Search";
 
import React, { useEffect } from "react";

import { Outlet } from "react-router-dom";
import Options from "../../components/ui/profile/Options";

export default function AccountLayout() {
  
  
 
  return (
    <div>
      <Header />
      <Search />
     
    
      <div className=" grid grid-flow-col justify-start ">
        <div className=" mt-24 w-80 rounded-lg  bg-white my-8 mx-24 text-base text-gray-500 opacity-90 font-semibold ">
          <Options />
        </div>
      
       <div className="-ml-16"> <Outlet  /></div>
         
  
      </div>

      <Footer />
    </div>
  );
}
