import React from "react";
import imageSabrina from "../../public/images/sabrinacarpenter.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons/faCirclePlay";
import {
  faShuffle,
  faForward,
  faBackward,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay as playIcon } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="h-[100px] p-5 flex flex-row ">
      <div className="mx-5 flex flex-row">
        <img src={imageSabrina} className="w-[60px] h-[60px] rounded-md" />
        <div className="flex flex-col  mx-5 justify-center ">
          <h2 className="font-light text-[15px]">Taste</h2>
          <div className="flex flex-row gap-2 content-center items-center">
            <FontAwesomeIcon icon={faCirclePlay} className=" text-[#7d7d7d]" />
            <h3 className="font-light text-[13px] text-[#7d7d7d]">
              Video musical - Sabrina Carpenter
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2 content-center items-center">
        <FontAwesomeIcon
          icon={faShuffle}
          className=" text-[#2b2b35]  text-[20px] mx-3"
        />
        <FontAwesomeIcon
          icon={faBackward}
          className=" text-[#7d7d7d] text-[20px] mx-3"
        />
        <FontAwesomeIcon
          icon={playIcon}
          className=" text-white text-[30px] mx-3"
        />
        <FontAwesomeIcon
          icon={faForward}
          className=" text-[#7d7d7d] text-[20px] mx-3"
        />
        <FontAwesomeIcon
          icon={faRepeat}
          className=" text-[#2b2b35] text-[20px] mx-3"
        />
      </div>

      <div></div>
    </div>
  );
};

export default Footer;
