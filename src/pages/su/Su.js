import Campaigns from "components/ui/campaigns/CampaignsRouter";
import Cards from "components/ui/cards/CardsRouter";
import Categories from "components/ui/categories/Categories";
import Favorites from "components/ui/product/ProductItems";
import Footer from "components/ui/footer/Footer";
import Header from "components/ui/header/Header";
import HeroSection from "components/ui/herosections/HeroSection";
import MobileApp from "components/MobileApp";
import React from "react";
import WaterContent from "components/ui/herosections/herocontent/WaterContent";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Title from "helper/Title";

export default function Su() {
  const [waterCard, setWaterCard] = useState(true);
  const [waterBanner, setWaterBanner] = useState(true);
  const [waterSection, setWaterSection] = useState(true);
  return (
    <div>
      <Helmet>
        <title>GetirSu - Haftanın her günü kapınızda </title>
      </Helmet>

      <HeroSection waterSection={waterSection} />
      <div className="container mx-auto">
      <Title>Kampanyalar</Title>
        <Campaigns waterBanner={waterBanner} />
        <div className=" mt-4">
          <MobileApp />
        </div>
        <Cards waterCard={waterCard} />
      </div>
     
    </div>
  );
}
