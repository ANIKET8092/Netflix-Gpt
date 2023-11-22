import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black  my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "  Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="namr=e"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-900"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-900"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-900"
        />
        <button className="p-4 my-4 w-full bg-red-700 rounded-lg">
          {isSignInForm ? "  Sign In" : "Sign Up"}
        </button>
        <div className="text-white flex justify-between">
          <div className="flex ">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label className="m-1" for="vehicle1">
              {" "}
              Remember Me
            </label>
          </div>
          <p>Need Help?</p>
        </div>

        <p className="py-4 cursor-pointer" onClick={() => toggleSignInForm()}>
          {isSignInForm
            ? "  New to Netflix! Sign In Now"
            : "Already registered"}
        </p>
      </form>
    </div>
  );
};

export default Login;
