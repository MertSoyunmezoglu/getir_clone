import React from "react";
import Campaigns from "components/Campaigns";
import { useState } from "react";
import Search from "components/Search";
import PriceBar from "components/PriceBar";
import MainGrid from "components/MainGrid";

function Kategoriler() {
  const [validHomeBanner, setvalidHomeBanner] = useState(true);

  return (
    <div>
      <Search />
      <PriceBar />
      <div className=" container mx-auto">
        <Campaigns validHomeBanner={validHomeBanner} />
      </div>
      <MainGrid />
    </div>
  );
}

export default Kategoriler;
