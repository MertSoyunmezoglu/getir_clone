import React from 'react';
import Slider from "react-slick";
import  { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function HeroSection() {
  const [selected, setSelected] = useState("TR");
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:4000,
    cssEase:'linear'
  };
  return (
    <div className="relative mx-auto items-center h-auto overflow-hidden before:w-full before:h-full before:z-10 before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 ">
    <Slider className="h-full hidden sm:block" {...settings}>
          <div>
            <img className='w-full object-cover h-[500px]' src ='https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg'/>
          </div>
          <div>
            <img className='w-full object-cover h-[500px]' src ='https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg'/>
          </div>
          <div>
            <img className='w-full object-cover h-[500px]' src ='https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg'/>
          </div>
          <div>
            <img className='w-full object-cover h-[500px]' src ='https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg'/>
          </div>
          <div>
            <img className='w-full object-cover h-[500px]' src ='https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg'/>
          </div>
       </Slider>
        <div className="relative sm:absolute inset-0 px-0 sm:px-8 z-[40] flex items-center"> 
          <div className="w-full sm:container flex mx-auto justify-between items-center" >
             <div className='gap-y-10 flex-col hidden sm:flex'>
           <img src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg'/>
            <h3 className=" text-2xl gap-4 xl:text-3xl  mt-8 text-white font-semibold ">Dakikalar içinde <br/> kapınızda!</h3> 
            </div>
          

          <div className="  ml-12  rounded-lg text-center sm:w-80 sm:h-44  bg-gray-50  ">
            <h4 className="text-primary-brand-color font-semibold text-center mt-4  text-sm ">Giriş Yap veya Kayıt Ol</h4>
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
            <button type='submit' className=' bg-brand-yellow h-12 text-primary-brand-color hover:text-brand-yellow hover:bg-primary-brand-color  w-72 ml-4 flex items-center justify-center rounded-md font-semibold text-sm font-sans'>Telefon numarası ile devam et</button>
          </div>
          </div>
        </div>
    
      </div>
  )
}
