import React from "react";

import { Spinner } from "@bigbinary/neetoui";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import MoviePreviewCard from "./MoviePreviewCard";

import { useMovie } from "../../store/MovieStore";

const MovieList = () => {
  const { currentMovie } = useMovie();

  const fetchExtraInfo = async currentMovie => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=e4fc4dee&i=${currentMovie}`
    );

    return response.data;
  };

  const {
    data: extrainfo,
    isLoading,
    error,
  } = useQuery(
    ["extraInfo", currentMovie],
    () => fetchExtraInfo(currentMovie),
    {
      enabled: !!currentMovie, // Only fetch when a movie is selected
    }
  );

  if (isLoading) return <Spinner />;

  if (!currentMovie && !isLoading) {
    return <h2>Please select a movie from search result to see details</h2>;
  }

  if (error) {
    console.error("Error fetching movie data:", error);

    return <h2>Error fetching movie data. Please try again later.</h2>;
  }

  return <MoviePreviewCard extrainfo={extrainfo} />;
};

export default MovieList;
