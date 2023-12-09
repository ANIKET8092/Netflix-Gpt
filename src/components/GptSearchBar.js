import React from "react";
import { useRef } from "react";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../store/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  let searchText = useRef();

  // Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    return data.results;
  };

  const handleGptSearchClick = async () => {
    // Make an APi Call here get results
    const gptQuery =
      "Act as a Movie Recomendation system and suggest some movies for the query : " +
      searchText.current.value +
      " only give me 5 names of movies, comma sepratedlike the example result given ahead. Exapmle result:Gadar, sholay, Don, Golmaal, Koi Mil Gaya";
    const openAiResponse = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(12, openAiResponse.choices);
    const { content } = openAiResponse?.choices[0]?.message;
    const gptMovies = content?.split(",");
    const promiseArray = gptMovies.map((currMovie) =>
      searchMovieTMDB(currMovie)
    );
    const tmdbSearchResult = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ gptSuggestedMovies: gptMovies, tmdbSearchResult })
    );
  };
  return (
    <div className="pt-[49%] md:pt-[10%]  flex justify-center ">
      <form
        className="w-full md:w-1/2 bg-black rounded-lg grid grid-cols-12  "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="Enter your Movie Mood"
          className="p-4 m-4 col-span-9 "
        />
        <button
          className="col-span-3 m-4n py-2 px-4 bg-red-700 text-white rounded-lg "
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
