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
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state=>state.auth)
 

   const handleLogout = async ()=>{
        await logout()
        dispatch(logoutHandle())
        navigate('/login', {
          replace:true
        })
    }
    const handleVerification = async () =>{

      await emailVerification()
    }
  

  if(user){
   return ( <div>
      Oturum açık {user.email}
      <button type='submit' onClick={handleLogout} className=' bg-brand-yellow h-12 mt-2 mb-5 text-primary-brand-color hover:text-brand-yellow hover:bg-primary-brand-color  w-20  flex items-center justify-center rounded-md font-semibold text-sm font-sans'>Çıkış Yap</button>
      {!user.emailVerified && 
      <button type='submit' onClick={handleVerification} className=' bg-brand-yellow h-12 mt-2 mb-5 text-primary-brand-color hover:text-brand-yellow hover:bg-primary-brand-color  w-20  flex items-center justify-center rounded-md font-semibold text-sm font-sans'>E-Posta Onayla</button>}
    </div>)
  }



  return (

    <div>
    <Helmet><title>Getir - Dakikalar içinde Kapınızda</title></Helmet>
    <Link to="/register" > Kayıt ol</Link>
    <Link to="/login" > Giriş yap</Link>
   <HeroSection homeSection={homeSection}/>
   <Categories/>
   <div className="container mx-auto"> 
 
   <Campaigns homeBanner={homeBanner}/>

   <MobileApp/>
   <Cards homeCard={homeCard} />
   </div>
    <Footer/>
    </div>
  )
}
