import React from 'react'

export default function BigCampaigns({banner:{index,imageBig}}) {
  return (
    <div key={index}>
    <div className="px-2  w-full h-full">
    <img src={imageBig} alt="Kampanyalar" className="rounded-lg"/>
    </div>

    </div>
  )
}
