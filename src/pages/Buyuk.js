import Campaigns from 'components/Campaigns'
import Cards from 'components/Cards'
import Categories from 'components/Categories'
import Favorites from 'components/Favorites'
import Footer from 'components/Footer'
import Header from 'components/Header'
import HeroBig from 'components/HeroBig'
import MobileApp from 'components/MobileApp'
import React from 'react'

export default function Buyuk() {
  return (
    <div>Buyuk

    <Header/>
    <HeroBig/>

   <Categories/>
   <div className="container mx-auto"> 
   <Campaigns/>
   <div className=' mt-4'>
   <MobileApp/>
   </div>
   <Cards/>
   </div>
    <Footer/>
    </div>
  )
}
