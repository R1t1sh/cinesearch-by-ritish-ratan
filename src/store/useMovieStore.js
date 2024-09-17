import create from "zustand";

const useMovieStore = create(set => ({
  currentMovie: null,
  history: [],

  setCurrentMovie: movie =>
    set(state => ({
      currentMovie: movie,
      history: state.history.includes(movie)
        ? state.history
        : [...state.history, movie],
    })),

  setHistory: newHistory => set({ history: newHistory }),
}));

export default useMovieStore;
