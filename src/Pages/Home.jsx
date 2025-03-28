import React from "react";
import dataSongsHome from "../utils/info.json";
import Card from "../Components/Card";

const Home = ({ onCardClick }) => {
  const songsHome = dataSongsHome.songsHome;
  const songsRecomendation = dataSongsHome.recomendations;
  const mostListened = dataSongsHome.mostListened;

  return (
    <main
      className=" w-[94%] flex flex-col pt-10 px-10 mt-22 ml-30 rounded-md "
      style={{
        background:
          "linear-gradient(180deg, rgba(67,70,100,1) 10%, rgba(45,46,65,1) 22%, rgba(18,18,18,1) 100%)",
      }}
    >
      <div className="flex flex-row mb-5 gap-2 ml-2  ">
        <div className=" bg-[rgba(89,90,116,0.6)] cursor-pointer p-2 px-3 rounded-3xl hover:bg-white hover:text-black">
          <h3 className="text-[13px] font-light">Todo</h3>
        </div>
        <div className=" bg-[rgba(89,90,116,0.6)] cursor-pointer p-2 px-3 rounded-3xl  hover:bg-white hover:text-black">
          <h3 className="text-[13px] font-light">Música</h3>
        </div>
        <div className=" bg-[rgba(89,90,116,0.6)] cursor-pointer p-2 px-3 rounded-3xl  hover:bg-white hover:text-black">
          <h3 className="text-[13px] font-light">Pódcasts</h3>
        </div>
      </div>

      <div className="flex flex-wrap cursor-pointer">
        {songsHome.map((song, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-3 bg-[rgba(89,90,116,0.6)] m-2 rounded-sm h-[70px] w-90 hover:bg-[rgba(81,86,127,0.5)]"
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
        <div className="flex flex-wrap gap-2">
          {songsRecomendation.map((song, index) => (
            <Card key={index} recomendations={song} onCardClick={onCardClick} />
          ))}
        </div>
      </div>

      <div className="ml-2 my-5 flex flex-col">
        <h2 className="text-[24px] font-bold">Los artistas más escuchados</h2>
        <div className="flex flex-wrap gap-2">
          {mostListened.map((song, index) => (
            <Card key={index} recomendations={song} onCardClick={onCardClick} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
