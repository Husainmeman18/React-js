import React, { useState } from "react";
import "./App.css";
import { app } from "./Firebase";
import {
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { Link } from "react-router-dom";

const auth = getAuth(app);
function SignIN() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  const HandleSubmit = (e) =>{
    e.preventDefault();
    console.log(Email,Password);
    signInWithEmailAndPassword(auth,Email,Password)
    .then(()=> console.log("Successfully SignIn"))
    .catch((err)=>console.log("SignIn Failed " + err));
    SetEmail("");
    SetPassword("");
  }
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={Email}
          onChange={(e) => SetEmail(e.target.value)}
        /> <br /> <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={Password}
          onChange={(e) => SetPassword(e.target.value)}
        /> <br /><br />
        <button>Sign In</button>
      </form><br />
      Don't have an Account? <Link to="/">SignUp</Link>
      <br />
      Forgot Your Password? <Link to="/PassReset">Reset Here</Link>
    </>
  );
}

export default SignIN;
