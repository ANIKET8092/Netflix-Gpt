import React, { useEffect } from "react";
import { signOut } from "@firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { userSliceAction } from "../store/userSlice";
const Header = () => {
  const dispatch = useDispatch();
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

  return (
    <div className="absolute px-8 py-8 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img
        className=" w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      {user && (
        <div className="flex justify-evenly p-2">
          <img className="w-12 h-12 " src={user?.photoURL} alt="user-icon" />
          <button className="mx-2 font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
