import React from "react";
function MobileApp() {
  return (
    <>
      <div className="bg-primary-brand-color mb-12 mt-4 flex flex-col sm:flex-row items-center sm:pl-12 justify-between bg-mobile-app rounded-lg">
        <div className="text-white p-5 sm:p-0 text-sm text-center sm:text-left">
          <h3 className="	tracking-tighter font-bold md:text-3xl md:mt-6 sm:text-xl">
            Getir'i indirin!
          </h3>
          <p className="font-semibold text-md  md:text-xl sm:text- mt-3">
            İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
          </p>
          <div className="grid sm:flex grid-cols-2 gap-2 mt-4 mb-10">
            <a href="https://www.apple.com/tr/app-store/">
              <img
                className=" hover:scale-105"
                src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              />
            </a>
            <a href="https://play.google.com/store/games?hl=tr&gl=US">
              <img
                className=" hover:scale-105"
                src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              />
            </a>
            <a href="https://appgallery.huawei.com/Featured">
              <img
                className=" hover:scale-105"
                src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              />
            </a>
          </div>
        </div>
        <div className="self-end mt-4">
          <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" />
        </div>
      </div>
    </>
  );
}

export default MobileApp;
