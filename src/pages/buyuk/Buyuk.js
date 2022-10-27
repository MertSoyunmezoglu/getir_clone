import Campaigns from "components/ui/campaigns/CampaignsRouter";
import Cards from "components/ui/cards/CardsRouter";
import Categories from "components/ui/categories/Categories";

import HeroSection from "components/ui/herosections/HeroSection";
import MobileApp from "components/MobileApp";
import React from "react";
import { useState } from "react";
import Title from "helper/Title";
 

export default function Buyuk() {
  const [bigCard, setBigCard] = useState(true);
  const [bigBanner, setBigBanner] = useState(true);
  const [bigSection, setBigSection] = useState(true);
  return (
    <div>
 

      <HeroSection bigSection={bigSection} />
      
      <Categories />
      <div className="container mx-auto">
      <Title>Kampanyalar</Title>
        <Campaigns bigBanner={bigBanner} />
        <div className=" mt-4">
          <MobileApp />
        </div>
        <Cards bigCard={bigCard} />
      </div>
  
    </div>
  );
}
