import ApplyNow from 'components/ApplyNow'
import Campaigns from 'components/Campaigns'
import Cards from 'components/Cards'

import Footer from 'components/Footer'

import React from 'react'
import { useState } from 'react'

import burgervid from '../assets/burgervid.mp4'

import {Helmet} from 'react-helmet'

import LocationForm from 'forms/LocationForm'


export default function Yemek() {

  const [foodCard, setFoodCard] = useState(true);
  const [foodBanner, setFoodBanner] = useState(true);
 
  
  return (
    <div className='yemek' >
    <Helmet><title>GetirYemek - Yemek siparişi artık Getir farkıyla!</title></Helmet>
        <div className= ' sm:block w-full  object-cover h-[600px] relative mx-auto  overflow-hidden '>
          <video src={burgervid} autoPlay loop muted >
        
          </video>
         <LocationForm/>
         
       </div>
   

          <div className='container mx-auto bg-gray-100  '>
          <Campaigns  foodBanner={foodBanner} />
          <Cards foodCard={foodCard} />
          <ApplyNow/>
          </div>
          <Footer/>

       
    </div>
  )
}
