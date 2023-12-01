import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "./userSlice";
import { movieSliceReducer } from "./movieSlice";
import { gptSliceReducers } from "./gptSlice";
const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: movieSliceReducer,
    gpt: gptSliceReducers,
  },
});

export default appStore;
