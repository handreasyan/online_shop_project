import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default Layout;
