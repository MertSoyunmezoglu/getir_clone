import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'components/Header';
import HeroSection from 'components/HeroSection';
import Categories from 'components/Categories';
import Campaigns from 'components/Campaigns';

import MobileApp from 'components/MobileApp';
import Cards from 'components/Cards';
import Footer from 'components/Footer';

import { useState } from 'react';

export default function Home() {
  const [homeCard, setHomeCard] = useState(true);
  const [homeBanner, setHomeBanner] = useState(true);
  const [homeSection, setHomeSection] = useState(true);
  const [homeCategory, setHomeCategory] = useState(true);

  return (

    <div>


   <HeroSection homeSection={homeSection}/>
   <Categories homeCategory={homeCategory}/>
   <div className="container mx-auto"> 
 
   <Campaigns homeBanner={homeBanner}/>

   <MobileApp/>
   <Cards homeCard={homeCard} />
   </div>
    <Footer/>
    </div>
  )
}
