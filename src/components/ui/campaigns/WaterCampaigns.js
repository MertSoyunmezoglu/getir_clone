import React from "react";

export default function WaterCampaigns({ banner: { index, imageWater } }) {
  return (
    <div key={index}>
      <div className="px-2  w-full h-full">
        <img src={imageWater} alt="Kampanyalar" className="rounded-lg" />
      </div>
    </div>
  );
}
