import React from 'react'

export default function VFoodCampaigns({ banner: { id, imageFood } }) {
  return (
    <div key={id}>
    <div className="px-2  w-full h-full">
      <img src={imageFood} alt="Kampanyalar" className="rounded-lg" />
    </div>
  </div>
  )
}
