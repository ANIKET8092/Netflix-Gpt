import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./movieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-[30rem] relative z-30 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Popular"} movies={movies.popularVideo} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovie} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
