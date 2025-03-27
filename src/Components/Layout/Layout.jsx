import React from "react";
import Navbar from "../Navbar";
import DrawerLeft from "../DrawerLeft";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar className="h-[60px] fixed w-full top-0 z-10" />

      <div className="flex flex-grow ">
        <div sName="w-64 min-w-[16rem] flex-none">
          <DrawerLeft />
        </div>

        <div className="flex-grow  text-white overflow-y-auto rounded-md mr-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
