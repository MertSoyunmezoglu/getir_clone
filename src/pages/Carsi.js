import Campaigns from 'components/Campaigns'
import Cards from 'components/Cards'
import Categories from 'components/Categories'
import Favorites from 'components/Favorites'
import Footer from 'components/Footer'
import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import MobileApp from 'components/MobileApp'
import React from 'react'
import { useState } from 'react'
import {Helmet} from 'react-helmet'

export default function Carsi() {
  const [bazaarCard, setBazaarCard] = useState(true)
  return (
    <div>
    <Helmet><title>GetirÇarşı - Haftanın her günü kapınızda </title></Helmet>
    <HeroSection/>
    <div className="container mx-auto"> 
    <Categories/>
    <Campaigns/>
    <Favorites/>
    <MobileApp/>
    <Cards bazaarCard={bazaarCard}/>
    </div>
     <Footer/>
     </div>
  )
}
