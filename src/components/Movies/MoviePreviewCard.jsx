import React from "react";

import { useMovie } from "../../store/MovieStore";

const MoviePreviewCard = ({ info, extrainfo }) => {
  console.log("info", info, "extra", extrainfo);

  const { setCurrentMovie, history, setHistory } = useMovie(); //skipped current movie
  const handleClick = () => {
    if (!info) return;
    setCurrentMovie(info);
    if (!history.includes(info)) {
      setHistory([...history, info]);
    }

    console.log(info.imdbID);
  };

  if (extrainfo) {
    return (
      <div
        className="min-h-55 flex w-48 cursor-pointer flex-col items-center gap-1 rounded-md border-b-2 border-gray-400
       p-2 shadow-md transition-transform duration-300 ease-linear hover:scale-105 hover:shadow-lg"
        onClick={handleClick}
      >
        <img
          alt=""
          className="h-[70%] w-[100%] rounded-sm object-contain"
          src={info && info.Poster}
        />
        <h5 className="text-gray-900 m-0 mt-2 h-[10%] text-center text-sm font-bold">
          {info && info.Title}
        </h5>
        <h5 className="h-[10%]">
          {" "}
          {extrainfo && extrainfo?.Language?.split(",")[0]}
        </h5>
        <h5 className="h-[10%]"> {extrainfo && extrainfo?.Type}</h5>
        <h5 className="h-[10%]"> {extrainfo && extrainfo?.Year}</h5>
      </div>
    );
  }

  return (
    <div
      className="min-h-55 flex w-48 cursor-pointer flex-col items-center gap-1 rounded-md border border-gray-400
       p-2 shadow-md transition-transform duration-300 ease-linear hover:scale-105 hover:shadow-lg"
      onClick={handleClick}
    >
      <img
        alt=""
        className="h-[60%] w-[100%] rounded-sm object-contain"
        src={info && info.Poster}
      />
      <h5 className="text-gray-900 m-0 mt-2 h-[10%] text-center text-sm font-bold">
        {info && info.Title}
      </h5>
    </div>
  );
};

export default MoviePreviewCard;
