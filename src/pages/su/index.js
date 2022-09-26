import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

export default function SuLayout() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Getir - Dakikalar içinde Kapınızda</title>
      </Helmet>
      <Outlet />
      <Footer />
    </div>
  );
}
