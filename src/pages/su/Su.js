import Campaigns from "components/Campaigns";
import Cards from "components/ui/cards/CardsRouting";
import Categories from "components/ui/categories/Categories";
import Favorites from "components/ProductItems";
import Footer from "components/Footer";
import Header from "components/ui/header/Header";
import HeroSection from "components/HeroSection";
import MobileApp from "components/MobileApp";
import React from "react";
import WaterContent from "components/ui/content/WaterContent";
import { Helmet } from "react-helmet";
import { useState } from "react";

export default function Su() {
  const [waterCard, setWaterCard] = useState(true);
  const [waterBanner, setWaterBanner] = useState(true);
  const [waterSection, setWaterSection] = useState(true);
  return (
    <div>
      <Helmet>
        <title>GetirSu - Haftanın her günü kapınızda </title>
      </Helmet>
      <Header />
      <HeroSection waterSection={waterSection} />
      <div className="container mx-auto">
        <Campaigns waterBanner={waterBanner} />
        <div className=" mt-4">
          <MobileApp />
        </div>
        <Cards waterCard={waterCard} />
      </div>
      <Footer />
    </div>
  );
}
