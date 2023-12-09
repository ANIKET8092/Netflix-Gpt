import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularVideo } from "../store/movieSlice";
export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const json = await response.json();
    dispatch(addPopularVideo(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};
