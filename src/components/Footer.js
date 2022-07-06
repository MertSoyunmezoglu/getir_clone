import React from 'react'
import Menu from 'components/ui/Menu'
import {BsFacebook,BsTwitter,BsInstagram,BsGlobe} from 'react-icons/bs'
export default function Footer() {
  const menus = [
    {
      title:'Getir\'i Keşfedin! ',
      items:
      [
          {title:'Hakkımızda'},
          {title:'Kariyer'},
          {title:'İletişim'},
          {title:'Covid-19 Duyuru'},
          {title:'Sosyal Sorumluluk Projeleri'}
      ]

    },
    {
      title:'Yardıma mı İhtiyacınız var? ',
      items:
      [
          {title:'Sıkça Sorulan Sorular'},
          {title:'Kişisel Verilerin Korunması'},
          {title:'Gizlilik Politikası'},
          {title:'Kullanım Koşulları'},
          {title:'Çerez Politikası'}
      ]

    },
    {
      title:'İş Ortağımız Olun  ',
      items:
      [
          {title:'Bayimiz Olun'},
          {title:'Deponuzu Kiralayın'},
          {title:'GetirYemek Restoranı Olun'},
          {title:'GetirÇarşı İşletmesi Olun'},
          {title:'Zincir Restoranlar'}
      ]

    }

  ]
  return (
    <div className="bg-white  pt-5 ">
      <div className='container mx-auto'>
          <div className=' grid md:grid-cols-2 md:justify-center gap-y-4 lg:grid-cols-4  -pt-5'>
            <section>
              <nav className='grid gap-y-2 '>
              <h6 className=' text-md text-secondary-brand-color  gap-x-2'>Getir'i İndirin</h6>
               <a href="https://www.apple.com/tr/app-store/"><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="App Store" /></a> 
               <a href="https://play.google.com/store/games?hl=tr&gl=US"><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="Google Play" />
               </a>
               <a href="https://appgallery.huawei.com/Featured"><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="Huawei App" />
               </a>
              </nav>
            </section>
              {menus.map((menu,index)=>(
                <Menu key={index} {...menu} />
              ))}
          </div>
      <div className='flex flex-col md:flex-row items-center justify-start xs:justify-center   border-t border-gray-200 mt-6 pt-2'>
          <div className=' container  text-xs  py-6  flex gap-x-2 '>© 2022 Getir  |  
          <a className=' text-secondary-brand-color' href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/18806" >Bilgi Toplum Hizmetleri</a>
   
          </div>
          <nav className=' flex gap-x-2 pr-2'>
          <a className=' hover:text-secondary-brand-color'  href="https://www.facebook.com/"><BsFacebook size={20}/></a>
          <a className=' hover:text-secondary-brand-color' href="https://twitter.com/login?lang=tr"><BsTwitter size={20}/></a>
          <a className=' hover:text-secondary-brand-color' href="https://www.instagram.com"><BsInstagram size={20}/></a>
          </nav>
          </div>
      </div>
    </div>
  )
}
