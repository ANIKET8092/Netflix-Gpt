import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useNowPlayingHook } from "../customHooks/useNowPlayingHook";
import { usePopularMovies } from "../customHooks/usePopularMovies";

const Browse = () => {
  useNowPlayingHook();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
