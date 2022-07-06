import Slider from "react-slick";
import  { useEffect, useState } from "react";
import Banners from "api/banners.json";
import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos} from "react-icons/md";

export default function Campaigns() {

  function NextBtn({ className, onClick }) {
    return  <button className={`absolute top-1/2 -left-6 -translate-y-1/2 text-brand-color hover:text-yellow-500`} onClick={onClick}> <MdOutlineArrowBackIos size={24}/> </button>
  }

  function PrevBtn({ className, onClick }) {
    return  <button className={`absolute top-1/2 -right-6 -translate-y-1/2 text-brand-color hover:text-yellow-500`} onClick={onClick}> <MdOutlineArrowForwardIos size={24}/> </button> 
  }
  
  const [banners, setBanners] = useState("");
 
  useEffect(() => {
    setBanners(Banners)
    }
  , [])
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:4000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
        }
      }
    ],

    nextArrow: <PrevBtn />  ,
    prevArrow: <NextBtn />  ,
  
    
  };
  return ( 
    <div className=" container mx-auto bg-slate-100">
    <h3 className='text-sm font-semibold ml-6 py-6'>Kampanyalar</h3>
        <Slider {...settings} className="mx-2">
          {banners.length && banners.map((banner,index)=>(
            <div key={banner.id}>
            <div className="px-4 w-full h-full">
            <img src={banner.image} className="rounded-lg"/>
            </div>

            </div>

          ))}
        </Slider>
    </div>
  )
}
