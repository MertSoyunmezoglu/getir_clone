import React from "react";
import { useWindowWidth } from "@react-hook/window-size";

import FoodSiBarItem from "./FoodSideBarItem";

export default function FoodSideBar() {
  const windowWidth = useWindowWidth();
  const menus = [
    {
      title: "Sıralama ",
      items: [
        { title: "Akıllı Sıralama" },
        { title: "Restoran Puanı" },
        { title: "Teslimat Süresi" },
        { title: "En Çok Değerlendirilenler" },
        { title: "İndirim Oranı" },
      ],
    },
    {
      title: "Akıllı Filtreler ",
      items: [
        { title: "Sadece Müdavim Restoranlar" },
        { title: "Sadece Kampanyalı Restoranlar" },
        { title: "Gerçek Yemek Fotoğraflı Restoranlar" },
      ],
    },
    {
      title: "Mutfaklar",
      items: [
        { title: "Tümü" },
        { title: "İndirimler" },
        { title: "Müdavim" },
        { title: "Burger" },
        { title: "Döner" },
        { title: "Kebap" },
        { title: "Lahmacun" },
        { title: "Kokoreç" },
        { title: "Salata" },
        { title: "Tost" },
        { title: "Sushi" },
        { title: "Pide" },
        { title: "Pasta" },
        { title: "Köfte" },
        { title: "Börek" },
      ],
    },
    {
      title: "Ödeme Yöntemleri",
      items: [
        { title: "Online Ödeme" },
        { title: "Sodexo" },
        { title: "Ticket" },
        { title: "Kredi/Banka Kartı" },
        { title: "Multinet" },
        { title: "Setcard" },
        { title: "Metropol" },
      ],
    },
  ];
  return <div className="  bg-white rounded-lg  ">
  {menus.map((menu, index) => (
    <FoodSiBarItem index={index} {...menu} />
  ))}{" "}
   
  </div>;
}
