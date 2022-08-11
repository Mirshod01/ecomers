import React from "react";
import Navbar from "./Navbar/Navbar";
import Saidbar from "./Saidbar/Saidbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = ({ myUser }) => {
  return (
    <>
      <div>
        <Navbar myUser={myUser} />
        <Saidbar myUser={myUser} />
      </div>
      <div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
