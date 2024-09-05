import React, { useEffect, useRef } from "react";

import HistoryCard from "./HistoryCard";

import { useMovie } from "../../store/MovieStore";

const History = () => {
  const { currentMovie, history } = useMovie();
  console.log("hist", history);
  const scrollableDivRef = useRef(null);

  const scrollToElement = id => {
    if (scrollableDivRef.current) {
      const element = scrollableDivRef.current.querySelector(`#${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        console.log("Scrolled to element:", id);
      }
    }
  };

  useEffect(() => {
    if (currentMovie && history.some(movie => movie.imdbID === currentMovie)) {
      scrollToElement(currentMovie);
      console.log(
        "Current movie found in history, scrolling to:",
        currentMovie
      );
    }
  }, [currentMovie, history]);

  return (
    <>
      <div className="flex w-full flex-col items-center gap-1 overflow-y-scroll">
        <h3 className="mt-3.5 font-semibold">History</h3>
      </div>
      <div
        className="flex h-full w-full flex-col items-center gap-5 overflow-y-scroll p-3"
        ref={scrollableDivRef}
      >
        {history.length > 0 &&
          [...history].reverse().map(movie => (
            <div className="w-full" id={movie.imdbID} key={movie.imdbID}>
              <HistoryCard info={movie} />
            </div>
          ))}
      </div>
    </>
  );
};

export default History;
