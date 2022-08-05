import React from "react";
import Menu from "components/ui/Menu";
import { BsFacebook, BsTwitter, BsInstagram, BsGlobe } from "react-icons/bs";
import { useWindowWidth } from "@react-hook/window-size";
export default function Footer() {
  const windowWidth = useWindowWidth();
  const menus = [
    {
      title: "Getir'i keşfedin! ",
      items: [
        { title: "Hakkımızda" },
        { title: "Kariyer" },
        { title: "İletişim" },
        { title: "Covid-19 Duyuru" },
        { title: "Sosyal Sorumluluk Projeleri" },
      ],
    },
    {
      title: "Yardıma mı ihtiyacınız var? ",
      items: [
        { title: "Sıkça Sorulan Sorular" },
        { title: "Kişisel Verilerin Korunması" },
        { title: "Gizlilik Politikası" },
        { title: "Kullanım Koşulları" },
        { title: "Çerez Politikası" },
      ],
    },
    {
      title: "İş Ortağımız Olun  ",
      items: [
        { title: "Bayimiz Olun" },
        { title: "Deponuzu Kiralayın" },
        { title: "GetirYemek Restoranı Olun" },
        { title: "GetirÇarşı İşletmesi Olun" },
        { title: "Zincir Restoranlar" },
      ],
    },
  ];
  return (
    <div className="bg-white  pt-5 ">
      <div className="container mx-auto">
        <div className=" grid sm:grid-cols-2 md:justify-center md:grid-cols-4 gap-x-2 pl-4 -mx-4 lg:grid-cols-4 xl:grid-cols-5  -pt-5">
          <section>
            <nav className="grid gap-y-4 ">
              <h6 className=" text-lg text-secondary-brand-color">
                Getir'i indirin
              </h6>
              <a href="https://www.apple.com/tr/app-store/">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt="App Store"
                />
              </a>
              <a href="https://play.google.com/store/games?hl=tr&gl=US">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt="Google Play"
                />
              </a>
              <a href="https://appgallery.huawei.com/Featured">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt="Huawei App"
                />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}{" "}
          {windowWidth > 1280 && (
            <div className=" flex items-center w-28 border-2 rounded-lg shadow-md ml-8 h-28 px-18">
              <a href="https://www.eticaret.gov.tr/siteprofil/A8C52359B2F14075B6829557FC4306B1/getircom">
                <img
                  className="w-20 mx-3 pl-1 "
                  src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png"
                  alt="Etbis"
                />{" "}
              </a>
            </div>
          )}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-start xs:justify-center   border-t border-gray-200 mt-6 pt-2">
          <div className=" container  md:-ml-16 xl:-ml-24  text-md  py-6  flex  ">
            © 2022 Getir
            <span className="relative before:w-1 ml-5 before:h-1   before:rounded-3xl before:bg-primary-brand-color before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 ">
              {" "}
            </span>
            <a
              className=" text-primary-brand-color  text-sm mt-0.5"
              href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/18806"
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <div>
            <nav className=" flex gap-x-2 pr-2">
              <div className="  hover:bg-purple-50 px-2 py-2 rounded-lg">
                <a
                  className=" hover:text-secondary-brand-color opacity-60 hover:opacity-90"
                  href="https://www.facebook.com/"
                >
                  <BsFacebook size={20} />
                </a>
              </div>
              <div className=" hover:bg-purple-50 px-2 py-2 rounded-lg">
                <a
                  className=" hover:text-secondary-brand-color opacity-60 hover:opacity-90"
                  href="https://twitter.com/login?lang=tr"
                >
                  <BsTwitter size={20} />
                </a>
              </div>
              <div className=" hover:bg-purple-50 px-2 py-2 rounded-lg">
                <a
                  className=" hover:text-secondary-brand-color opacity-60 hover:opacity-90"
                  href="https://www.instagram.com"
                >
                  <BsInstagram size={20} />
                </a>
              </div>
              <div className=" hover:bg-purple-50  w-32  px-2 py-2  border-x-2 shadow-sm rounded-lg">
                <a
                  className="flex items-center hover:text-secondary-brand-color opacity-60 hover:opacity-90"
                  href="#"
                >
                  <BsGlobe size={18} />{" "}
                  <span className="ml-2 text-sm">Türkçe (TR)</span>{" "}
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
