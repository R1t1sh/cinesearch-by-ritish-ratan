import React from "react";

import { useMovie } from "../../store/MovieStore";

const MovieThumbnail = () => {
  const { currentMovie } = useMovie();

  if (!currentMovie) {
    return (
      <div className="min-h-72  mx-auto mb-3.5 mt-3.5 flex w-48 cursor-pointer flex-col items-center justify-center gap-1 text-center">
        <h6 className="mt-1.5 flex h-full w-full items-center justify-center italic text-gray-500">
          Please select a movie from serach to see details
        </h6>
      </div>
    );
  }

  return (
    <div className="min-h-72 mx-auto mt-3.5 flex w-48 cursor-pointer flex-col items-center justify-center gap-1 text-center">
      <img
        alt={currentMovie?.Title}
        className="h-[90%] object-contain"
        src={currentMovie?.Poster}
      />
      <h5 className="mt-1.5 font-bold">{currentMovie?.Title}</h5>
      <h5 className="font-bold">{currentMovie?.Language?.split(",")[0]}</h5>
      <h5>
        <span className="font-bold">Type: </span>
        {currentMovie?.Type}
      </h5>
      <h5>
        <span className="font-bold">Year: </span>
        {currentMovie?.Year}
      </h5>
    </div>
  );
};

export default MovieThumbnail;
