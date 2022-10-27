import React from "react";
import Campaigns from "components/ui/campaigns/CampaignsRouter";
import { useState } from "react";
import Search from "components/Search";
import PriceBar from "components/ui/pricebar/PriceBar";
import MainGrid from "pages/subpages/MainGrid";

function Kategoriler( ) {
  const [validHomeBanner ] = useState(true);
  const [validBigBanner] = useState(true);
   const pathname = window.location.pathname;

  return (
    <div>
      <Search />
      <PriceBar />
      <div className=" container mx-auto">
       { pathname === "/kategoriler" ?  <Campaigns validHomeBanner={validHomeBanner} /> :
       <Campaigns validBigBanner={validBigBanner} />}
      </div>
      <MainGrid />
    </div>
  );
}

export default Kategoriler;
