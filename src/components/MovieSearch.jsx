import React, { useState } from "react";

import { Input, Spinner } from "@bigbinary/neetoui";
import axios from "axios";

import MoviePreviewCard from "./Movies/MoviePreviewCard";

import { useMovie } from "../store/MovieStore";

const MovieSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { currentMovie } = useMovie(); //SKIPPED SETCURRENTMOVIE
  const [movieList, setMovieList] = useState(null);
  const [error, setError] = useState("");
  const handleChange = async e => {
    try {
      setIsLoading(false);
      setError(null);
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=e4fc4dee&s=${e.target.value}`
      );

      console.log(response.data);
      if (response.data.Response === "False") {
        if (response.data.Error === "Incorrect IMDb ID.") {
          setError("Please type a query to retrieve relevant result");
        } else setError(response.data.Error);
      }
      setMovieList(response.data.Search);
    } catch (e) {
      console.log("error in searching", e);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(currentMovie);

  return (
    <div className="flex h-screen w-full flex-col items-center bg-gradient-to-b p-4  text-white">
      <div className="mb-6 w-full max-w-lg">
        <Input
          className="w-full rounded-lg p-4 text-gray-800 shadow-lg focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
          placeholder="Search for movies..."
          onChange={handleChange}
        />
      </div>
      {isLoading ? (
        <Spinner className="mt-6" size="large" />
      ) : (
        <div className="mt-6 flex w-full max-w-6xl flex-wrap justify-center gap-8">
          {error ? (
            <h2 className="text-red-500">{error}</h2>
          ) : (
            <>
              {movieList &&
                movieList.length > 0 &&
                movieList
                  .reverse()
                  .map(itm => <MoviePreviewCard info={itm} key={itm.imdbID} />)}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
