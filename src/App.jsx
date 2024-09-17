import React from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import MovieThumbnail from "components/Movies/MovieThumbnail";

import "./App.css";
import SearchHistory from "./components/History/SearchHistory";
import MovieSearch from "./components/MovieSearch";
import { queryClient } from "./utils/queryClient";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="flex h-screen w-[100vw] overflow-hidden">
      <div className="flex h-full w-2/3 flex-col items-center justify-center p-2">
        <MovieSearch />
      </div>
      <div className="h-screen w-1/3 flex-col border-l">
        <div className="flex h-3/5 w-full items-center justify-center border-b-2">
          {/* <MoviePreviewCard /> */}
          <MovieThumbnail />
        </div>
        <div className="h-2/5 w-full flex-col gap-3">
          <SearchHistory />
        </div>
      </div>
    </div>
  </QueryClientProvider>
);

export default App;
