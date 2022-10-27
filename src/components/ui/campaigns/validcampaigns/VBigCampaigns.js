import React from 'react'

export default function VBigCampaigns({ banner: { index, validBig }}) {
  return (
    <div key={index}>
    <div className="px-2  w-full h-full">
      <img src={validBig} alt="Kampanyalar" className="rounded-lg" />
    </div>
  </div>
  )
}
