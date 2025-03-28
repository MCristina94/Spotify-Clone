import React, { useState } from "react";
import Navbar from "../Navbar";
import DrawerLeft from "../DrawerLeft";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="h-screen flex flex-col">
      <Navbar className="h-[60px] fixed w-full top-0 z-10" />

      <div className="flex flex-grow ">
        <div sName="w-64 min-w-[16rem] flex-none">
          <DrawerLeft expanded={expanded} setExpanded={setExpanded} />
        </div>

        <div
          className={`flex-grow text-white mr-5 transition-all duration-300 pb-[105px] ${
            expanded ? "ml-48" : "null"
          }`}
        >
          {children}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-black">
        <Footer className="w-full" />
      </div>
    </div>
  );
};

export default Layout;
