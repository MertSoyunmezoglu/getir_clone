
import Footer from "components/ui/footer/Footer";
import Header from "components/ui/header/Header";
import React from "react";

import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

export default function BuyukLayout() {

  return (
    <div>
    <Header />
      <Helmet>
        <title>GetirBüyük - Binlerce Ürün Uygun Fiyata </title>
      </Helmet>
      <Outlet/>
      <Footer />
    </div>
  );
}
