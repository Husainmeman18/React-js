import React from "react";
import { app } from "./Firebase";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);

const SignOut = () => {
  const HandleSignOut = () => {
    signOut(auth)
    .then(() =>
      console.log("SignOut Succesfully")
    .catch((err) => console.log(err))
    );
  };
  return <>
  <button onClick={HandleSignOut}>Sign Out</button>
  </>;
};

export default SignOut;
