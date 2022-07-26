import Campaigns from 'components/Campaigns'
import Cards from 'components/Cards'
import Categories from 'components/Categories'
import Footer from 'components/Footer'
import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import MobileApp from 'components/MobileApp'
import React from 'react'
import { useState } from 'react'
import {Helmet} from 'react-helmet'

export default function Buyuk() {
  const [bigCard, setBigCard] = useState(true)
  const [bigBanner, setBigBanner] = useState(true)
  const [bigSection, setBigSection] = useState(true)
  return (
    <div>
    <Helmet><title>GetirBüyük- Binlerce Ürün Uygun Fiyata </title></Helmet>
    <HeroSection bigSection={bigSection}/>

   <Categories/>
   <div className="container mx-auto"> 
   <Campaigns bigBanner={bigBanner}/>
   <div className=' mt-4'>
   <MobileApp/>
   </div>
   <Cards bigCard={bigCard}/>
   </div>
    <Footer/>
    </div>
  )
}
