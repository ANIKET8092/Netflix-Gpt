import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptSuggetedMovieResults: null,
    gptSuggestedMoviesNames: null,
  },
  reducers: {
    toggleGptSearchView(state) {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult(state, action) {
      const { gptSuggestedMovies, tmdbSearchResult } = action.payload;
      state.gptSuggetedMovieResults = tmdbSearchResult;
      state.gptSuggestedMoviesNames = gptSuggestedMovies;
    },
  },
});

export const gptSliceReducers = gptSlice.reducer;
export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
