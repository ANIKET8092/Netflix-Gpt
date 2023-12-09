import React, { useEffect } from "react";
import { signOut } from "@firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { userSliceAction } from "../store/userSlice";
import { toggleGptSearchView } from "../store/gptSlice";
const Header = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    // Any change in login,signup signout
    const unsunscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          userSliceAction.addUser({ uid, email, displayName, photoURL })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(userSliceAction.removeUser());
        navigate("/");
      }
    });
    return () => unsunscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute px-8 py-8 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between ">
      <img
        className=" w-44 mx-auto md:mx-[0]"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      {user && (
        <div className="flex p-2 justify-between">
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 hidden md:!block "
            src={user?.photoURL}
            alt="user-icon"
          />
          <button className="mx-2 font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
