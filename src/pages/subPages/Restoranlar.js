import Campaigns from 'components/Campaigns'
import Header from 'components/Header'
import PriceBar from 'components/PriceBar'
import Search from 'components/Search'
import React, { useState } from 'react'

export default function Restoranlar() {
  const [validFoodBanner, setValidFoodBanner] = useState(true)

  return (
    <div>
    <Header/>
    <Search/>
<Campaigns validFoodBanner={validFoodBanner}/>
    Restoranlar
    </div>
  )
}
