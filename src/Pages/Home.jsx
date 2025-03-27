import React from "react";
import dataSongsHome from "../utils/info.json";

const Home = () => {
  const songsHome = dataSongsHome.songsHome;

  return (
    <div
      className="h-full w-full flex flex-col p-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(67,70,100,1) 10%, rgba(45,46,65,1) 22%, rgba(18,18,18,1) 100%)",
      }}
    >
      <div className="flex flex-row mb-5 gap-2 ml-2">
        <div className=" bg-[#595a74] cursor-pointer p-2 px-3 rounded-3xl hover:bg-white hover:text-black">
          <h3 className="text-[13px] font-light">Todo</h3>
        </div>
        <div className=" bg-[#595a74] cursor-pointer p-2 px-3 rounded-3xl  hover:bg-white hover:text-black">
          <h3 className="text-[13px] font-light">Música</h3>
        </div>
        <div className=" bg-[#595a74] cursor-pointer p-2 px-3 rounded-3xl  hover:bg-white hover:text-black">
          <h3 className="text-[13px] font-light">Pódcasts</h3>
        </div>
      </div>

      <div className="flex flex-wrap">
        {songsHome.map((song, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-3 bg-[rgba(89,90,116,0.6)] m-2 rounded-sm h-[70px] w-90"
          >
            <img
              src={song.image}
              alt={song.album}
              className="h-[70px] w-[70px] rounded-bl-sm rounded-tl-sm"
            />
            <h3 className="text-[14px] text-white"> {song.album}</h3>
          </div>
        ))}
      </div>

      <div className="ml-2 my-5 flex flex-col">
        <h2 className="text-[24px] font-bold">Especialmente para ti</h2>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
