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
  <button onClick={HandleSignOut} style={{padding:"0px 8px 0px 8px", backgroundColor:"transparent", color:"white"}}>Sign Out</button>
  </>;
};

export default SignOut;
