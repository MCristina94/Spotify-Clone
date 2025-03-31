import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons/faCirclePlay";
import favoriteSong from "/images/favoriteSong.jpeg";
import { useMediaQuery } from "react-responsive";

const DrawerRight = ({ expanded, setExpanded, selectedCard }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  if (isMobile) return null;
  return (
    <div
      className={`flex flex-col fixed top-0 right-0 mt-[85px] h-full w-65 bg-[#121212] rounded-md text-white transition-transform duration-300 ${
        expanded ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div>
        <button
          className="absolute top-4 right-4 text-white cursor-pointer"
          onClick={() => setExpanded(false)}
        >
          ✖
        </button>
      </div>
      <div className="mt-10 mx-5">
        {selectedCard ? (
          <div>
            {" "}
            <div>
              <h4>{selectedCard.song}</h4>
            </div>
            <div className="mt-5">
              <img
                className="rounded-md h-[200px] w-[200px]"
                src={selectedCard.image}
              />
            </div>
            <div className="flex flex-row bg-[#282828] content-center items-center gap-1.5 p-2 rounded-3xl w-[130px] my-5 cursor-pointer hover:scale-105">
              <FontAwesomeIcon icon={faCirclePlay} className=" text-white" />
              <h5 className="text-[12px] ">Cambiar a video</h5>
            </div>
            <div>
              <h2>{selectedCard.song}</h2>
              <h3 className="text-[#9a9797]">{selectedCard.album}</h3>
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <div>
              <h4>Mix de tus canciones favoritas</h4>
            </div>
            <div className="mt-5">
              <img
                className="rounded-md h-[200px] w-[200px]"
                src={favoriteSong}
              />
            </div>
            <div className="flex flex-row bg-[#282828] content-center items-center gap-1.5 p-2 rounded-3xl w-[130px] my-5 cursor-pointer hover:scale-105">
              <FontAwesomeIcon icon={faCirclePlay} className=" text-white" />
              <h5 className="text-[12px] ">Cambiar a video</h5>
            </div>
            <div>
              <h2>Tu Mix de canciones</h2>
              <h3 className="text-[#9a9797]">
                Escucha tus canciones preferidas
              </h3>
            </div>
          </div>
        )}
      </div>
      <div className="my-5 ml-5 flex flex-col items-center w-[85%] py-2 gap-2 bg-[#2c2c2c] rounded-md  ">
        <h2 className="text-[15px]">Canciones relacionadas</h2>
        <img
          img
          className="rounded-md h-[180px] w-[180px] "
          src="/images/thisiscoldplay.jpeg"
        />
        <h2>Yellow</h2>
        <h3 className="text-[#9a9797] text-[12px]">ColdPlay</h3>
      </div>
    </div>
  );
};

export default DrawerRight;
