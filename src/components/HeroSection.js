import React from 'react';
import Slider from "react-slick";
import  { useState } from "react";
import HomeHero from './ui/herosections/HomeHero';
import { useEffect } from 'react';
import Sections from 'api/sections.json';
import HomeContent from './ui/content/HomeContent';
import BigHero from './ui/herosections/BigHero';
import BigContent from './ui/content/BigContent';
import WaterContent from './ui/content/WaterContent';
import BazaarContent from './ui/content/BazaarContent';

export default function HeroSection({homeSection,bigSection,waterSection,bazaarSection}) {
  const [sections, setSections] = useState("");

  useEffect(() => {
    setSections(Sections)
    }
  , [])
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
  return (<div>
    <div className="relative mx-auto items-center h-auto overflow-hidden before:w-full before:h-full before:z-10 before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 ">
      
    <Slider className="h-full hidden sm:block -mb-2" {...settings}>
      {sections.length && homeSection===true && sections.map((section,index )=>(
        <HomeHero section={section} index={index}/>
          ))}  

      {sections.length && bigSection===true && sections.map((section,index )=>(
        <BigHero section={section} index={index}/>
          ))}

    </Slider>
      {homeSection===true ? <HomeContent/> :null}
      {bigSection===true ? <BigContent/> :null}
      {waterSection===true ? <WaterContent/> :null}
      </div>
      {bazaarSection===true ? <BazaarContent/> :null}

    
   
    </div>
  )
}
