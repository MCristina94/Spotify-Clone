import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";

const Card = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-2 h-[250px] w-[200px] hover:bg-[#282828] cursor-pointer rounded-md group">
      <img
        src="../../public/images/articmonkeys.jpeg"
        alt=""
        className="h-[180px] w-[180px] rounded-md"
      />
      <h3 className="text-[#A6A4A8] group-hover:text-white font-light text-[15px] w-[150px]">
        Recomendación del día para ti
      </h3>

      {/* Círculo verde que aparece al hacer hover en el div principal */}
      <div className="absolute bottom-18 right-5 h-10 w-10 bg-green-500 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex justify-center items-center">
        <FontAwesomeIcon icon={faPlay} className="text-black text-[20px] " />
      </div>
    </div>
  );
};

export default Card;
