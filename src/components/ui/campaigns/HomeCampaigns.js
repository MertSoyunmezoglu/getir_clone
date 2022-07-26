import React from 'react'

export default function HomeCampaigns({banner:{index,image}}) {
  return (
    <div key={index}>
    <div className="px-2  w-full h-full">
    <img src={image} alt="Kampanyalar" className="rounded-lg"/>
    </div>

    </div>
  )
}
