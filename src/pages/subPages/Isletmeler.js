import Campaigns from 'components/Campaigns'
import Header from 'components/ui/header/Header'
import PriceBar from 'components/PriceBar'
import Search from 'components/Search'
import React, { useState } from 'react'

export default function Isletmeler() {
  const [validMallsBanner, setValidMallsBanner] = useState(true)
  return (
    <div>
    <Header/>
    <Search/>
<Campaigns validMallsBanner={validMallsBanner}/>
    Isletmeler</div>
  )
}
