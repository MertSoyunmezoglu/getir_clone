import Campaigns from 'components/Campaigns'
import Search from 'components/Search'
import React, { useState } from 'react'

export default function Restoranlar() {
  const [validFoodBanner, setValidFoodBanner] = useState(true)

  return (
    <div>
  
    <Search/>
<Campaigns validFoodBanner={validFoodBanner}/>
    Restoranlar
    </div>
  )
}
