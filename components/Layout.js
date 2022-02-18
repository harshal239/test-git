import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, active }) {
  return (
    <>
      <Header active={active} />
      {children}
      <Footer />
    </>
  );
}
