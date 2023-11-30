import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "./userSlice";
import { movieSliceReducer } from "./movieSlice";
const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: movieSliceReducer,
  },
});

export default appStore;
