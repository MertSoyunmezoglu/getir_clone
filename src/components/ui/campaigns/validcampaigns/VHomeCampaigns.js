import React from 'react'

export default function VHomeCampaigns({banner:{index,validHome}}) {
  return (
    <div key={index}>
    <div className="px-2  w-full h-full">
    <img src={validHome} alt="Kampanyalar" className="rounded-lg"/>
    </div>

    </div>
  )
}
