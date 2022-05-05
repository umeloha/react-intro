import React from "react";
import { Outlet } from "react-router-dom";
import { default as Header } from "./Header";
import { default as Footer } from "./Footer";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
