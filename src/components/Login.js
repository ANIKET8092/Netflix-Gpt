import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { checkValidateData } from "../utils/validate";
import { useDispatch } from "react-redux";
import { userSliceAction } from "../store/userSlice";
import { USER_AVATAR, LOGO_URL } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const Email = email.current?.value;
    const Password = password.current?.value;

    const errorMessage = checkValidateData(
      email.current?.value,
      password.current?.value,
      name.current?.value || ""
    );
    console.log(errorMessage);
    setErrorMessage(errorMessage);

    if (errorMessage) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...

              // getting updated data from auth so used "auth.currentUser"
              const { uid, email, displayName, photoURL } = auth.currentUser;
              console.log(56, auth.currentUser);
              dispatch(
                userSliceAction.addUser({ uid, email, displayName, photoURL })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black  my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "  Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="name"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-900"
            ref={name}
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-900"
          ref={email}
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-900"
          ref={password}
        />
        {isSignInForm && errorMessage === "Username Is Not Valid" ? (
          ""
        ) : (
          <p className="text-red-600">{errorMessage}</p>
        )}

        <button
          className="p-4 my-4 w-full bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "  Sign In" : "Sign Up"}
        </button>
        <div className="text-white flex justify-between">
          <div className="flex ">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label className="m-1" htmlFor="vehicle1">
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
