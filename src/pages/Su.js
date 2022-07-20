import Campaigns from 'components/Campaigns'
import Cards from 'components/Cards'
import Categories from 'components/Categories'
import Favorites from 'components/Favorites'
import Footer from 'components/Footer'
import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import MobileApp from 'components/MobileApp'
import React from 'react'
import HeroWater from 'components/HeroWater'

export default function Su() {
  return (
    <div>su
    <Header/>
    <HeroWater/>
    <div className="container mx-auto"> 


    <Campaigns />
    <div className=' mt-4'>
    <MobileApp/>
    </div>
    <Cards/>
    </div>
     <Footer/>
     </div>
  )
}
