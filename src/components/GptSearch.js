import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { LOGO_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          className="h-screen object-cover md:h-[100%]"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
