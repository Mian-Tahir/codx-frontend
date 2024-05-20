import React from "react";
import Navbar from "../../components/navbar";
import SideMenu from "../../components/sideMenu/sideMenu";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex mt-5">
        <SideMenu />
        <main className="flex-1">{children}</main>{" "}
      </div>
    </div>
  );
};

export default Layout;
