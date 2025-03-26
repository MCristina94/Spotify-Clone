import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import DataSongs from "../utils/info.json";

const DrawerLeft = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`mx-5 rounded-lg h-screen bg-[#121212] text-white flex transition-all duration-300 ${
        expanded ? "w-64" : "w-20"
      }`}
    >
      {/* Contenedor del Sidebar */}
      <div className="flex flex-col w-full h-full p-4 items-center">
        {/* Botón para expandir/cerrar */}
        <button
          onClick={() => setExpanded(!expanded)}
          className=" flex items-center gap-2 p-2 rounded-lg cursor-pointer"
        >
          <FontAwesomeIcon
            icon={expanded ? faBookmarkSolid : faBookmarkRegular}
            className="text-[#7d7d7d] text-[20px] hover:text-white "
          />
          {expanded && (
            <span className="text-[#7d7d7d]  hover:text-white">
              Tu biblioteca
            </span>
          )}
        </button>

        {/* Menú de navegación */}
        <nav className="mt-4 w-full">
          {expanded ? (
            <div>{/* expandido */}</div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-3xl content-center text-center bg-[#282828] cursor-pointer">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#7d7d7d] hover:text-white"
                />
              </div>
              <div>
                {DataSongs.songsDrawerLeft.map((song, index) => (
                  <img
                    key={index}
                    src={song.image}
                    alt={song.album}
                    className="my-2 rounded-sm"
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
