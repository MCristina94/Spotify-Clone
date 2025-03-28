import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faMagnifyingGlass,
  faCircleArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <header className="flex flex-row justify-between  px-6 fixed bg-black w-[100%]">
      <div className="flex flex-row justify-between p-5">
        <FontAwesomeIcon
          icon={faSpotify}
          style={{ color: "#ffffff", fontSize: "35px" }}
        />
      </div>
      <div className="flex flex-row m-4 gap-2">
        <div className="w-12 h-12 rounded-3xl content-center text-center bg-[#121212] hover:bg-[#2A2A2A] hover:scale-105 transition-transform cursor-pointer">
          <FontAwesomeIcon
            icon={faHouse}
            className="text-[#7d7d7d] text-[20px] hover:text-white transition-colors duration-200 "
          />
        </div>
        <div className="relative w-100">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7d7d7d] text-lg"
          />
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full pl-10 pr-3 py-2.5 text-base placeholder:text-[#7d7d7d] focus:outline-none sm:text-sm rounded-3xl bg-[#121212] hover:bg-[#2A2A2A] border-2 border-transparent hover:border-white focus:border-white transition-all duration-200"
            placeholder="¿Qué quieres reproducir?"
          />
        </div>
      </div>
      <div className="flex flex-row gap-5 items-center ">
        <div className="flex flex-row gap-2 content-center hover:scale-105 cursor-pointer hover:text-white transition-colors ">
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="text-[#9a9a9a] text-[20px] hover:text-white transition-colors"
          />
          <h2 className="text-[#9a9a9a] text-[15px] hover:text-white transition-colors">
            Instalar app
          </h2>
        </div>
        <FontAwesomeIcon
          icon={faBell}
          className="text-[#9a9a9a] text-[20px] hover:text-white transition-colors mt-1 cursor-pointer"
        />
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#333030] text-black text-[15px] ">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4d98f0] text-black text-[15px]">
            MC
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
