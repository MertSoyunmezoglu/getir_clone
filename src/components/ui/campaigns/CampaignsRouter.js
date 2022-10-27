import Slider from "react-slick";
import { useEffect, useState } from "react";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import HomeCampaigns from "./HomeCampaigns";
import BigCampaigns from "./BigCampaigns";
import WaterCampaigns from "./WaterCampaigns";
import FoodKitchen from "./FoodCampaigns";
import Kitchens from "api/kitchens.json";
import VHomeCampaigns from "./validcampaigns/VHomeCampaigns";
import VFoodCampaigns from "./validcampaigns/VFoodCampaigns";
import RestaurantCampaigns from "./RestaurantCampaigns";
import Restaurants from "api/restaurants.json";
import Banners from "api/banners.json";
import WhatEat from "./WhatEat";
import VBigCampaigns from "./validcampaigns/VBigCampaigns";

export default function Campaigns({
  bigBanner,
  homeBanner,
  waterBanner,
  foodBanner,
  validHomeBanner,
  validBigBanner,
  validFoodBanner,
  exploreBanner,
  whatEatBanner
})
 {
  function NextBtn({ onClick }) {
    return (
      <button
        className={`absolute top-1/2 -left-6 -translate-y-1/2 text-brand-color hover:text-yellow-500`}
        onClick={onClick}
      >
        <MdOutlineArrowBackIos size={24} />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        className={`absolute top-1/2 -right-6  -translate-y-1/2 text-brand-color hover:text-yellow-500`}
        onClick={onClick}
      >
        <MdOutlineArrowForwardIos size={24} />
      </button>
    );
  }
  
  const [banners, setBanners] = useState("");
  const [restaurants, setRestaurants] = useState("");
  const [kitchens, setKitchens] = useState("");
  useEffect(() => {
    setBanners(Banners);
    setRestaurants(Restaurants);
  }, []);

  useEffect(() => {
    setKitchens(Kitchens);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    nextArrow: <PrevBtn />,
    prevArrow: <NextBtn />,
  };
  const settingsFood = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],

    nextArrow: <PrevBtn />,
    prevArrow: <NextBtn />,
  };
  const foodExplore = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    nextArrow: <PrevBtn />,
    prevArrow: <NextBtn />,
  };
  const foodWhatEat = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrow:false
  };
  return (
    <div className="  bg-slate-100 w-auto">
      <Slider {...settings}>
        {banners.length &&
          homeBanner === true &&
          banners.map((banner, index) => (
            <HomeCampaigns banner={banner} index={index} />
          ))}

        {banners.length &&
          bigBanner === true &&
          banners.map((banner, index) => (
            <BigCampaigns banner={banner} index={index} />
          ))}

        {banners.length &&
          waterBanner === true &&
          banners.map((banner, index) => (
            <WaterCampaigns banner={banner} index={index} />
          ))}

        {banners.length &&
          validHomeBanner === true &&
          banners.map((banner, index) => (
            <VHomeCampaigns banner={banner} index={index} />
          ))}
          {banners.length &&
            validBigBanner === true &&
            banners.map((banner, index) => (
              <VBigCampaigns banner={banner} index={index} />
            ))}
        {banners.length &&
          validFoodBanner === true &&
          banners.map((banner, id) => (
            <VFoodCampaigns banner={banner} id={id} />
          ))}
      </Slider>

      <div>
        <Slider {...foodExplore} className=" w-full">
          {restaurants.length &&
            exploreBanner === true &&
            restaurants.map((restaurant, id) => (
              <RestaurantCampaigns restaurant={restaurant} id={id} />
               
            ))}
        </Slider>
      </div>
      <>
        <Slider {...foodWhatEat}>
          {restaurants.length &&
            whatEatBanner === true &&
            restaurants.map((restaurant, id) => (
              <WhatEat restaurant={restaurant} id={id} />
            ))}
        </Slider>
      </>

      <>
        <Slider {...settingsFood} className="mx-2 ">
          {kitchens.length &&
            foodBanner === true &&
            kitchens.map((kitchen, index) => (
              <FoodKitchen kitchen={kitchen} index={index} />
            ))}
        </Slider>
      </>
    </div>
  );
}
