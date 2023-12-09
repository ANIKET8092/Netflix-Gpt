import React from "react";
import MovieList from "./movieList";
import { useSelector } from "react-redux";
const GptMovieSuggestion = () => {
  const { gptSuggetedMovieResults, gptSuggestedMoviesNames } = useSelector(
    (store) => store.gpt
  );
  if (!gptSuggestedMoviesNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white absolute top-[40%] w-[98vw] bg-opacity-70 ">
      <div>
        {gptSuggestedMoviesNames.map((movieaName, index) => (
          <MovieList
            key={movieaName}
            title={movieaName}
            movies={gptSuggetedMovieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
