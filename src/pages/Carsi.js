import Campaigns from 'components/Campaigns'
import Cards from 'components/Cards'
import Categories from 'components/Categories'
import Favorites from 'components/Favorites'
import Footer from 'components/Footer'
import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import MobileApp from 'components/MobileApp'
import React from 'react'

export default function Carsi() {
  return (
    <div>Carsi
    <Header/>
    <HeroSection/>
    <div className="container mx-auto"> 
    <Categories/>
    <Campaigns/>
    <Favorites/>
    <MobileApp/>
    <Cards/>
    </div>
     <Footer/>
     </div>
  )
}
