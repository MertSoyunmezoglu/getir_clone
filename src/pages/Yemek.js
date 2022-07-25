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
import ReactFlagsSelect from 'react-flags-select'
import burgervid from '../assets/burgervid.mp4'
import {BsSearch} from 'react-icons/bs'
import {BiCrosshair} from 'react-icons/bi'
import {Helmet} from 'react-helmet'
import { openModal } from 'store/modal';
import store from 'store';


export default function Yemek() {
  const [selected, setSelected] = useState("TR");
  const [foodCard, setFoodCard] = useState(true);
  const handleMapsModal = ()=>{
    store.dispatch(openModal({name:'maps'}))
    
  }
  
  return (
    <div className='yemek' >
    <Helmet><title>GetirYemek - Yemek siparişi artık Getir farkıyla!</title></Helmet>
        <div className= ' sm:block w-full  object-cover h-[500px] relative mx-auto  overflow-hidden '>
          <video src={burgervid} autoPlay loop muted >
        
          </video>
         
          <div className=' absolute inset-0  sm:px-8 justify-end mr-16 flex items-center'>
          <div className="   rounded-lg text-center sm:w-80 pt-5  h-80 mx-12 bg-gray-50  ">
            <div>
            <h4 className="text-primary-brand-color font-semibold tracking-normal text-center mb-4  text-sm">Adresine getiren restoranları gör </h4>

            <label  className='  relative block group '><button onClick={handleMapsModal} className=''>
            <input required type="text" className='border-2 peer  border-gray-300  rounded-md h-12  w-72 group-focus:border-primary-brand-color peer-focus:border-primary-brand-color group-hover:border-secondary-brand-color ' />
            <span className=' absolute -top-1 left-0 h-full px-4 ml-4 text-sm text-gray-500 flex items-center text-md gap-x-2 transition-all mt-1'><BsSearch color='#5c3cbb' size={14}/> Örn. Etiler Mah.</span>
             <a href='#' onClick={handleMapsModal}  className=' absolute -top-1 right-0 h-8 mr-6 text-xs font-semibold   text-primary-brand-color px-2 rounded-lg  bg-secondary-brand-color bg-opacity-10 gap-x-1  flex items-center text-md transition-all mt-3'><BiCrosshair size={18}/>Konumumu Bul</a>
             </button> </label>
          </div>
          <div className='justify-between absolute flex flex-row mt-2 ml-2  ' >
          <div className=' flex   border-t-2 border-primary-brand-color opacity-10 w-32 mt-3 '></div>
          <div className=' font-bold text-xs opacity-60 mx-2 mt-1'>veya</div>
          <div className=' flex border-t-2 border-primary-brand-color opacity-10  w-32   mt-3 '></div>
          </div>
            <h4 className="text-primary-brand-color font-semibold text-center mt-12  text-sm ">Giriş Yap veya Kayıt Ol</h4>
              <div className='flex mt-4'> <ReactFlagsSelect
                countries={["US", "GB","TR", "FR", "DE", "IT"]}
                customLabels={{ US: "+1", GB: "+10",TR:"+90", FR: "+33", DE: "+75", IT: "+5" }}
                placeholder="Select Country"
                onSelect={code => setSelected(code)}
                selected={selected}
                className="flag-select"
                /> 
                <label  className=' ml-5 relative block group '>
                  <input required type="text" className='border-2 peer  border-gray-300  rounded-md h-12  w-44 group-focus:border-primary-brand-color peer-focus:border-primary-brand-color group-hover:border-secondary-brand-color ' />
                  <span className=' absolute -top-1 left-0 h-full px-2 text-sm text-gray-500 flex items-center peer-focus:text-primary-brand-color focus:border-primary-brand-color text-md peer-focus:h-5 mt-1 peer-focus:text-xs transition-all peer-valid:h-5 peer-valid:text-xs peer-valid:text-secondary-brand-color'>Telefon Numarası</span>
                </label>
              </div>
            <button type='submit' required className=' bg-brand-yellow h-12 text-primary-brand-color hover:text-brand-yellow hover:bg-primary-brand-color  w-72 ml-4 flex items-center justify-center rounded-md font-semibold text-sm font-sans'>Telefon numarası ile devam et</button>
          </div>
          </div>
       </div>
        <Kitchens/>

          <div className='container mx-auto bg-gray-100  '>
          <Cards foodCard={foodCard} />
          <ApplyNow/>
          </div>
          <Footer/>

       
    </div>
  )
}
