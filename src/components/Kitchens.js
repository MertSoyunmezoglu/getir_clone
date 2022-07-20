import Slider from "react-slick";
import  { useEffect, useState } from "react";
import Kitchen from "api/kitchens.json";
import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos} from "react-icons/md";

export default function Kitchens() {

  function NextBtn({ className, onClick }) {
    return  <button className={`absolute top-1/2 -left-6 -translate-y-1/2 text-brand-color hover:text-yellow-500`} onClick={onClick}> <MdOutlineArrowBackIos size={14}/> </button>
  }

  function PrevBtn({ className, onClick }) {
    return  <button className={`absolute top-1/2 -right-6 -translate-y-1/2 text-brand-color hover:text-yellow-500`} onClick={onClick}> <MdOutlineArrowForwardIos size={14}/> </button> 
  }
  
  const [kitchens, setKitchens] = useState("");
 
  useEffect(() => {
    setKitchens(Kitchen)
    }
  , [])
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed:4000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, 
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, 
        }
      }
    ],

    nextArrow: <PrevBtn />  ,
    prevArrow: <NextBtn />  ,
  
    
  };
  return ( 
    <div  className=" bg-gray-100 ">
    <div className=" container mx-auto">
    <h3 className='text-sm font-semibold ml-6 py-6'>Mutfaklar</h3>
        <Slider {...settings} className="mx-2 ">
          {kitchens.length && kitchens.map((kitchen,index)=>(
            <div className=" gap-x-1 px-2 w-full h-full ">
            <a href="#" className="  flex flex-col rounded-lg  items-center text-sm transition bg-white  text-center " key={kitchen.id}>
            
            <img src={kitchen.image} className="rounded-lg  w-18 h-18 px-2 "/>
            <h2  className="border-t border-gray-100 pt-2 pb-4 w-full text-xs font-semibold text-primary-brand-color">{kitchen.title}</h2>
            </a>
            </div>

          ))}
        </Slider>
    </div>
    </div>
  )
}
