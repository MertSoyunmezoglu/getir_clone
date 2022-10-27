import Campaigns from "components/ui/campaigns/CampaignsRouter";
import Search from "components/Search";
import React, { useState } from "react";
import Title from "helper/Title";
import PastOrders from "components/ui/order/PastOrders";
import FoodSideBar from "components/ui/sidebar/food/FoodSideBar";
import Footer from "components/ui/footer/Footer";
import RestaurantList from "components/ui/RestaurantList";
import EmptyBasket from "components/ui/basket/EmptyBasket";
import Basket from "components/ui/basket/Basket";

export default function Restoranlar() {
  const [validFoodBanner, setValidFoodBanner] = useState(true);
  const [exploreBanner, setExploreBanner] = useState(true);
  const [foodBanner, setFoodBanner] = useState(true);
  const [whatEatBanner, setWhatEatBanner] = useState(true);
  return (
    <>
      <Search />

      <div className=" container mx-auto">
        <Title>Kampanyalar</Title>
        <Campaigns validFoodBanner={validFoodBanner} />
        <Title>Keşfet</Title>
        <Campaigns exploreBanner={exploreBanner} />
        <Title>Mutfaklar</Title> <Campaigns foodBanner={foodBanner} />
        <div className="grid grid-cols-8 gap-4 my-8">
          <div className="  col-span-2">
            <Title>Ne Yesem?</Title>
            <Campaigns whatEatBanner={whatEatBanner} />
            <Title>Filtreler</Title>
            <FoodSideBar />
          </div>
          <div className=" mt-10 col-span-4"><RestaurantList/></div>
          <div className=" col-span-2 ">
          <div className="  mt-5 mx-auto w-64   "> <Basket/></div>
           
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
