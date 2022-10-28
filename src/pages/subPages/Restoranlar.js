import Campaigns from "components/ui/campaigns/CampaignsRouter";
import Search from "components/Search";
import React, { useState } from "react";
import Title from "helper/Title";
import PastOrders from "components/ui/order/PastOrders";
import FoodSideBar from "components/ui/sidebar/food/FoodSideBar";
import Footer from "components/ui/footer/Footer";
import RestaurantList from "components/ui/RestaurantList";
import Basket from "components/ui/basket/Basket";
import { ContextProvider } from "context/GlobalContext";

export default function Restoranlar() {
  const {windowWidth}= ContextProvider();
  const [validFoodBanner, setValidFoodBanner] = useState(true);
  const [exploreBanner, setExploreBanner] = useState(true);
  const [foodBanner, setFoodBanner] = useState(true);
  const [whatEatBanner, setWhatEatBanner] = useState(true);
  return (
    <>
      <Search />

      <div className=" xl:container mt-8  mx-auto">
        
        <Campaigns validFoodBanner={validFoodBanner} />
        <Title>Keşfet</Title>
        <Campaigns exploreBanner={exploreBanner} />
        <Title>Mutfaklar</Title> <Campaigns foodBanner={foodBanner} />
        <div className="md:grid   md:grid-cols-8 gap-4  xl:mx-0 mx-10 ">
          <div className="   md:col-span-2">
            <Title>Ne Yesem?</Title>
            <Campaigns whatEatBanner={whatEatBanner} />
            {windowWidth>640 ?   (  <div>
              <Title>Filtreler</Title>
              <FoodSideBar />
            </div>):null}
         
          </div>
          <div className="  md:col-span-6 xl:col-span-4 mt-10"><RestaurantList/></div>
          <div className=" xl:col-span-2 hidden  xl:block ">
          <div className="  mt-5 mx-auto w-64   "> <Basket/></div>
           
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
