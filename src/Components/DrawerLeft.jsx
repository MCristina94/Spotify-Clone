import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import DataSongs from "../utils/info.json";
import {
  faMagnifyingGlass,
  faList,
  faThumbtack,
} from "@fortawesome/free-solid-svg-icons";

const DrawerLeft = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`mx-5 rounded-lg h-screen bg-[#121212] text-white flex transition-all duration-300  max-h-[full]  ${
        expanded ? "w-68" : "w-20"
      }`}
    >
      <div className="flex flex-col w-full h-full p-4 items-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className=" flex items-center gap-2 p-2 rounded-lg cursor-pointer"
        >
          <FontAwesomeIcon
            icon={expanded ? faBookmarkSolid : faBookmarkRegular}
            className="text-[#7d7d7d] text-[20px] hover:text-white "
          />
          {expanded && (
            <div className="flex flex-row justify-between gap-15">
              <span className="text-[#7d7d7d]  hover:text-white content-center">
                Tu biblioteca
              </span>
              <div className="w-8 h-8 rounded-3xl content-center text-center bg-[#282828] cursor-pointer">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#7d7d7d] hover:text-white"
                />
              </div>
            </div>
          )}
        </button>

        <nav className="mt-4 w-full">
          {expanded ? (
            <div>
              <div className="flex flex-row gap-2">
                <div className=" bg-[#282828] cursor-pointer p-2 px-3 rounded-3xl">
                  <h3 className="text-[13px] font-extralight">Listas</h3>
                </div>
                <div className=" bg-[#282828] cursor-pointer p-2 px-3 rounded-3xl">
                  <h3 className="text-[13px] font-extralight">Artistas</h3>
                </div>
                <div className=" bg-[#282828] cursor-pointer p-2 px-3 rounded-3xl">
                  <h3 className="text-[13px] font-extralight">Albumes</h3>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center my-3">
                <div className="cursor-pointer px-2 py-1 rounded-3xl hover:bg-[#282828]">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-[#7d7d7d] hover:text-white"
                  />
                </div>
                <div className="flex flex-row items-center gap-2 cursor-pointer">
                  <h3 className="text-[14px] text-[#7d7d7d] font-light  hover:text-white">
                    Recientes
                  </h3>
                  <FontAwesomeIcon
                    icon={faList}
                    className="text-[#7d7d7d]  hover:text-white "
                  />
                </div>
              </div>
              <div className="flex flex-col ">
                <div>
                  {DataSongs.songsDrawerLeft.map((song, index) => (
                    <div className="flex flex-row">
                      <img
                        key={index}
                        src={song.image}
                        alt={song.album}
                        className="my-2 rounded-sm h-[50px] w-[50px]"
                      />
                      <div className="content-center">
                        <h3 className="text-[14px] text-white font-light ml-3 ">
                          {song.album}
                        </h3>
                        <h3 className="text-[14px] text-[#7d7d7d]  font-light ml-3 ">
                          {song.album.includes("Canciones que te gustan") && (
                            <FontAwesomeIcon
                              icon={faThumbtack}
                              className="text-green-500 mr-2 rotate-45"
                            />
                          )}
                          {song.info}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-3xl content-center text-center bg-[#282828] cursor-pointer">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#7d7d7d] hover:text-white"
                />
              </div>
              <div className="flex flex-col ">
                {DataSongs.songsDrawerLeft.map((song, index) => (
                  <img
                    key={index}
                    src={song.image}
                    alt={song.album}
                    className="my-2 rounded-sm h-[50px] w-[50px]"
                  />
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default DrawerLeft;
