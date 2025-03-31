import React from "react";
import imageSabrina from "../../public/images/sabrinacarpenter.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons/faCirclePlay";
import {
  faShuffle,
  faForward,
  faBackward,
  faRepeat,
  faMicrophone,
  faList,
  faDesktop,
  faVolumeHigh,
  faUpRightAndDownLeftFromCenter,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay as playIcon } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <>
      {!isMobile ? (
        <footer className="h-[100px] p-5 flex flex-row justify-between mr-10 ">
          <div className="mx-5 flex flex-row">
            <img src={imageSabrina} className="w-[60px] h-[60px] rounded-md" />
            <div className="flex flex-col  mx-5 justify-center ">
              <h2 className="font-light text-[15px]">Taste</h2>
              <div className="flex flex-row gap-2 content-center items-center">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className=" text-[#7d7d7d]"
                />
                <h3 className="font-light text-[13px] text-[#7d7d7d]">
                  Video musical - Sabrina Carpenter
                </h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row gap-4 items-center justify-center">
              <FontAwesomeIcon
                icon={faShuffle}
                className="text-[#2b2b35] text-[20px] cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faBackward}
                className="text-[#7d7d7d] text-[20px] cursor-pointer"
              />
              <FontAwesomeIcon
                icon={playIcon}
                className="text-white text-[30px] cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faForward}
                className="text-[#7d7d7d] text-[20px] cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faRepeat}
                className="text-[#2b2b35] text-[20px] cursor-pointer"
              />
            </div>

            <div className="w-[500px] h-[5px] bg-[#ccc] relative mt-3 rounded-full overflow-hidden">
              <div className="w-[50%] h-full bg-white"></div>
            </div>
          </div>

          <div className="flex flex-row gap-5 content-center items-center">
            <FontAwesomeIcon
              icon={faCirclePlay}
              className="text-[#7d7d7d] cursor-pointer hover:text-white"
            />
            <FontAwesomeIcon
              icon={faMicrophone}
              className="text-[#7d7d7d] cursor-pointer  hover:text-white"
            />
            <FontAwesomeIcon
              icon={faList}
              className="text-[#7d7d7d] cursor-pointer  hover:text-white"
            />
            <FontAwesomeIcon
              icon={faDesktop}
              className="text-[#7d7d7d] cursor-pointer  hover:text-white"
            />
            <FontAwesomeIcon
              icon={faVolumeHigh}
              className="text-[#7d7d7d] cursor-pointer  hover:text-white"
            />

            <div className="w-[100px] h-[5px] bg-[#ccc]  rounded-full overflow-hidden">
              <div className="w-[50%] h-full bg-white"></div>
            </div>

            <FontAwesomeIcon
              icon={faUpRightAndDownLeftFromCenter}
              className=" text-[#7d7d7d] cursor-pointer  hover:text-white"
            />
          </div>
        </footer>
      ) : (
        <footer className="flex flex-row gap-10 justify-center text-center">
          <div>
            {" "}
            <FontAwesomeIcon
              icon={faHouse}
              className=" text-white cursor-pointer "
            />
            <h4 className="text-white">Home</h4>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className=" text-[#7d7d7d] cursor-pointer "
            />
            <h4 className="text-[#7d7d7d] ">Search</h4>
          </div>
          <div>
            {" "}
            <FontAwesomeIcon
              icon={faBookmarkSolid}
              className=" text-[#7d7d7d] cursor-pointer "
            />
            <h4 className="text-[#7d7d7d] ">Your Library</h4>
          </div>
          <div>
            {" "}
            <FontAwesomeIcon
              icon={faPlus}
              className=" text-[#7d7d7d] cursor-pointer "
            />
            <h4 className="text-[#7d7d7d] ">Creast</h4>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
