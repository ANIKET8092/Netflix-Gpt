import React, { useEffect } from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { userSliceAction } from "../store/userSlice";
import { onAuthStateChanged } from "@firebase/auth";
const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    // Any change in login,signup signout
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          userSliceAction.addUser({ uid, email, displayName, photoURL })
        );

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(userSliceAction.removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
