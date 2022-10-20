import ApplyNow from "components/ApplyNow";
import Cards from "components/ui/cards/CardsRouting";

import Footer from "components/Footer";

import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "components/HeroSection";
import Categories from "components/ui/categories/Categories";
import Header from "components/ui/header/Header";

export default function Yemek() {
  const [bazaarSection, setBazaarSection] = useState(true);
  const [bazaarCard, setBazaarCard] = useState(true);
  const [bazaarCategory, setBazaarCategory] = useState(true);

  return (
    <div>
      <Helmet>
        <title>GetirYemek - Haftanın her günü kapınızda</title>
      </Helmet>
      <Header />
      <HeroSection bazaarSection={bazaarSection} />

      <Categories bazaarCategory={bazaarCategory} />
      <div className="container mx-auto bg-gray-100  ">
        <Cards bazaarCard={bazaarCard} />
        <ApplyNow />
      </div>
      <Footer />
    </div>
  );
}
