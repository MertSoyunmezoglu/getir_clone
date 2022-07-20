import ApplyNow from 'components/ApplyNow'
import Campaigns from 'components/Campaigns'
import Cards from 'components/Cards'
import Categories from 'components/Categories'
import Favorites from 'components/Favorites'
import Footer from 'components/Footer'
import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import Kitchens from 'components/Kitchens'
import MobileApp from 'components/MobileApp'
import React from 'react'
import { useState } from 'react'
import burgervid from '../assets/burgervid.mp4'


export default function Yemek() {
  const [active, setActive] = useState(false)

  return (
    <div className='yemek' >Yemek
      <Header/>
        <div className= ' sm:block w-full  object-cover h-[500px] '>
        <video src={burgervid} autoPlay loop muted />
        <Kitchens/>

          <div className='container mx-auto bg-gray-100  '>
          <Cards setActive={true} active={active}/>
          <ApplyNow/>
          </div>
          <Footer/>

       </div>
    </div>
  )
}
