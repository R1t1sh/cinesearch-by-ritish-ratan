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
        className="min-h-72 flex w-48 cursor-pointer flex-col items-center gap-1"
        onClick={handleClick}
      >
        <img alt="" className="h-[90%]" src={extrainfo && extrainfo.Poster} />
        <h5 className="h-[10%]">{extrainfo && extrainfo.Title}</h5>
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
      className="flex h-72 w-48 cursor-pointer flex-col items-center"
      onClick={handleClick}
    >
      <img alt="" className="h-[90%]" src={info && info.Poster} />
      <h5 className="h-[10%]">{info && info.Title}</h5>
    </div>
  );
};

export default MoviePreviewCard;
