import React from "react";
import Main from "../Main/Main";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import "./Layout.css";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Main />
      <Cart />
    </div>
  );
}

export default Layout;
