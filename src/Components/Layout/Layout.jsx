import React, { useState } from "react";
import Navbar from "../Navbar";
import DrawerLeft from "../DrawerLeft";
import Footer from "../Footer";
import DrawerRight from "../DrawerRight";
import { useMediaQuery } from "react-responsive";

const Layout = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const [expandedRight, setExpandedRight] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div className="h-screen flex flex-col">
      <Navbar className="h-[60px] fixed w-full top-0 z-50" />

      <div className="flex flex-grow ">
        <div sName="w-64 min-w-[16rem] flex-none">
          <DrawerLeft expanded={expanded} setExpanded={setExpanded} />
        </div>

        <div sName="w-64 min-w-[16rem] flex-none">
          <DrawerRight
            expanded={expandedRight}
            setExpanded={setExpandedRight}
            selectedCard={selectedCard}
          />
        </div>

        <div
          className={`flex-grow text-white mr-5 transition-all duration-300 pb-[105px] 
    ${!isMobile && expanded ? "ml-48" : ""} 
    ${!isMobile && expandedRight ? "mr-75" : ""}`}
        >
          {React.cloneElement(children, {
            onCardClick: (card) => {
              setSelectedCard(card);
              setExpandedRight(true);
            },
          })}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-black">
        <Footer className="w-full" />
      </div>
    </div>
  );
};

export default Layout;
