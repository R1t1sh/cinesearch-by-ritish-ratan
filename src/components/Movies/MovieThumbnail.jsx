import React from "react";

import { useMovie } from "../../store/MovieStore";

const MovieThumbnail = () => {
  const { currentMovie } = useMovie();
  console.log(currentMovie);

  return (
    <div className="min-h-72 mx-auto mt-3.5 flex w-48 cursor-pointer flex-col items-center justify-center gap-1 text-center">
      <img
        alt={currentMovie?.Title}
        className="h-[90%] object-contain"
        src={currentMovie?.Poster}
      />
      <h5 className="mt-1.5 font-bold">{currentMovie?.Title}</h5>
      <h5 className="font-bold">{currentMovie?.Language?.split(",")[0]}</h5>
      <h5 className="font-bold">{currentMovie?.Type}</h5>
      <h5 className="font-bold">{currentMovie?.Year}</h5>
    </div>
  );
};

export default MovieThumbnail;
