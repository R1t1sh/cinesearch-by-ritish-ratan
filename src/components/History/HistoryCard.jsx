import React from "react";

import useMovieStore from "../../store/useMovieStore";

const HistoryCard = ({ info }) => {
  const { currentMovie, setCurrentMovie } = useMovieStore();

  const handleClick = () => {
    setCurrentMovie(info);
  };

  console.log("from history card", currentMovie);

  return (
    <div
      className={`bg-slate-600 text-black flex h-full w-full cursor-pointer items-center justify-center rounded-xl p-2 ${
        String(info.imdbID) === String(currentMovie?.imdbID)
          ? "bg-blue"
          : "bg-lightblue"
      }`}
      onClick={handleClick}
    >
      {info.Title}
    </div>
  );
};

export default HistoryCard;
