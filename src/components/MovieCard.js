import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-36 :md:w-48 m-4">
      <img src={IMAGE_CDN_URL + posterPath} alt="Movie_thumbnail" />
    </div>
  );
};

export default MovieCard;
