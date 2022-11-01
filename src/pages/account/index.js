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
     
    
      <div className=" grid sm:pt-24 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-start mx-8 lg:mx-24 ">
        <div className=" sm:mt-24 col-span-1 md:w-80 w-auto rounded-lg   bg-white my-8  text-base text-gray-500 opacity-90 font-semibold ">
          <Options />
        </div>
      
       <div className=" lg:col-span-2"> <Outlet  /></div>
         
  
      </div>

      <Footer />
    </div>
  );
}
