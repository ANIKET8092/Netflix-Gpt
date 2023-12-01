import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] w-[50vw] ml-[25%] absolute top-9">
      <form className=" bg-black rounded-lg">
        <input
          type="text"
          placeholder="Enter your Movie Mood"
          className="p-4 m-4 w-[80%] "
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg w-1/6 h-[100px]">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
