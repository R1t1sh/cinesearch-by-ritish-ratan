// src/AuthContext.js
import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
const MovieContext = createContext();

// Custom hook to use the AuthContext
export const useMovie = () => useContext(MovieContext);

// AuthProvider component
export const MovieProvider = ({ children }) => {
  const [currentMovie, setCurrentMovie] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <MovieContext.Provider
      value={{ currentMovie, setCurrentMovie, history, setHistory }}
    >
      {children}
    </MovieContext.Provider>
  );
};
