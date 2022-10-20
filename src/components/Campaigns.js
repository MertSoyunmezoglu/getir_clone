import Slider from "react-slick";
import { useEffect, useState } from "react";
import Banners from "api/banners.json";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Title from "./ui/Title";
import HomeCampaigns from "./ui/campaigns/HomeCampaigns";
import BigCampaigns from "./ui/campaigns/BigCampaigns";
import WaterCampaigns from "./ui/campaigns/WaterCampaigns";
import FoodKitchen from "./ui/campaigns/FoodKitchen";
import Kitchens from "api/kitchens.json";
import VHomeCampaigns from "./ui/campaigns/validcampaigns/VHomeCampaigns";

export default function Campaigns({
  bigBanner,
  homeBanner,
  waterBanner,
  foodBanner,
  validHomeBanner,

}) {
  function NextBtn({onClick }) {
    return (
      <button
        className={`absolute top-1/2 -left-6 -translate-y-1/2 text-brand-color hover:text-yellow-500`}
        onClick={onClick}
      >
        {" "}
        <MdOutlineArrowBackIos size={24} />{" "}
      </button>
    );
  }

  function PrevBtn({  onClick }) {
    return (
      <button
        className={`absolute top-1/2 -right-6  -translate-y-1/2 text-brand-color hover:text-yellow-500`}
        onClick={onClick}
      >
        {" "}
        <MdOutlineArrowForwardIos size={24} />{" "}
      </button>
    );
  }

  const [banners, setBanners] = useState("");
  const [kitchens, setKitchens] = useState("");
  useEffect(() => {
    setBanners(Banners);
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
  return (
    <div className="  bg-slate-100">
      {foodBanner === true ? (
        <Title>Mutfaklar</Title>
      ) : (
        <Title>Kampanyalar</Title>
      )}
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

      </Slider>

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
