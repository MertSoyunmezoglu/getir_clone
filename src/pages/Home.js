import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout , emailVerification} from '../firebase';
import { logout as logoutHandle } from '../store/auth';
import Header from 'components/Header';
import HeroSection from 'components/HeroSection';
import Categories from 'components/Categories';
import Campaigns from 'components/Campaigns';
import Favorites from 'components/Favorites';
import MobileApp from 'components/MobileApp';
import Cards from 'components/Cards';
import Footer from 'components/Footer';
import {Helmet} from 'react-helmet';
import { useState } from 'react';

export default function Home( ) {
  const [homeCard, setHomeCard] = useState(true);
  const [homeBanner, setHomeBanner] = useState(true);
  const [homeSection, setHomeSection] = useState(true);
  const [homeCategory, setHomeCategory] = useState(true);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state=>state.auth)
 





  return (

    <div>
    <Helmet><title>Getir - Dakikalar içinde Kapınızda</title></Helmet>

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
