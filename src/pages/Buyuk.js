import Campaigns from 'components/Campaigns'
import Cards from 'components/Cards'
import Categories from 'components/Categories'
import Favorites from 'components/Favorites'
import Footer from 'components/Footer'
import Header from 'components/Header'
import HeroBig from 'components/HeroBig'
import MobileApp from 'components/MobileApp'
import React from 'react'
import { useState } from 'react'
import {Helmet} from 'react-helmet'

export default function Buyuk() {
  const [bigCard, setBigCard] = useState(true)
  return (
    <div>
    <Helmet><title>GetirBüyük- Binlerce Ürün Uygun Fiyata </title></Helmet>
    <HeroBig/>

   <Categories/>
   <div className="container mx-auto"> 
   <Campaigns/>
   <div className=' mt-4'>
   <MobileApp/>
   </div>
   <Cards bigCard={bigCard}/>
   </div>
    <Footer/>
    </div>
  )
}
