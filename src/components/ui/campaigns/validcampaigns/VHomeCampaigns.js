import React from "react";

export default function VHomeCampaigns({ banner: { index, validHome } }) {
  return (
    <div key={index}>
      <div className="md:px-2   w-full h-full">
        <img src={validHome} alt="Kampanyalar" className="md:rounded-lg" />
      </div>
    </div>
  );
}
