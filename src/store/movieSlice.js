import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
    trailerVideo: null,
    popularVideo: null,
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      state.nowPlayingMovie = action.payload;
    },
    addTrailerVideo(state, action) {
      state.trailerVideo = action.payload;
    },
    addPopularVideo(state, action) {
      state.popularVideo = action.payload;
    },
  },
});

export const movieSliceReducer = movieSlice.reducer;
export const { addNowPlayingMovies, addTrailerVideo, addPopularVideo } =
  movieSlice.actions;
