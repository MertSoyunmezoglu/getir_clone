import React from "react";
import HeroSection from "components/ui/herosections/HeroSection";
import Categories from "components/ui/categories/Categories";
import Campaigns from "components/ui/campaigns/CampaignsRouter";

import MobileApp from "components/MobileApp";
import Cards from "components/ui/cards/CardsRouter";
import Footer from "components/ui/footer/Footer";

import { useState } from "react";
import Title from "helper/Title";

export default function Home() {
  const [homeCard, setHomeCard] = useState(true);
  const [homeBanner, setHomeBanner] = useState(true);
  const [homeSection, setHomeSection] = useState(true);

  return (
    <div>
      <HeroSection homeSection={homeSection} />
      <Categories />
      <div className="container mx-auto">
      <Title>Kampanyalar</Title>
        <Campaigns homeBanner={homeBanner} />
        <MobileApp />
        <Cards homeCard={homeCard} />
      </div>
    
    </div>
  );
}
