import React from 'react'

export default function MobileApp() {
  return (
    <div className=' bg-gray-100  text-white pt-8 px-10 items-center flex justify-between'>
      <div className=" flex flex-col gap-y-3  container mx-auto rounded-md  bg-secondary-brand-color opacity-100 bg-mobile-app h-72 w-11/12">
        <h3 className='text-2xl font-bold mt-20'>Getir'i indirin!</h3>
        <h3 className='text-sm   font-semibold'>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</h3>
        <nav className='flex gap-y-6'>
        <a href='https://www.apple.com/tr/app-store/' className=' scale-95 transition-all hover:scale-100 '><img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'/></a>
        <a href='https://play.google.com/store/games?hl=tr&gl=US' className=' scale-95 transition-all hover:scale-100 '><img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'/></a>
        <a href='https://appgallery.huawei.com/Featured' className=' scale-95 transition-all hover:scale-100 '><img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'/> </a>
        </nav>
        <picture className='absolute right-24 pr-1 -mt-2 '>
        <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="mobile" />
      </picture>
      </div>
   
    </div>
  )
}
