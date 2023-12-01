import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { LOGO_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <div className=" ">
      <div className="">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
