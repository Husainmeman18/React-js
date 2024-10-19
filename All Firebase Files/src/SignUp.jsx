import React, { useState } from "react";
import "./App.css";
import { app } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { Link } from "react-router-dom";

const auth = getAuth(app);
function SignUp() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  const HandleSubmit = (e) =>{
    e.preventDefault();
    console.log(Email,Password);
    createUserWithEmailAndPassword(auth,Email,Password)
    .then(()=> console.log("Successfully SignUp"))
    .catch((err)=>console.log("SignUp Failed " + err));
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
        <button>Sign Up</button>
      </form><br />
      Already Have an Account? <Link to="/signIn">SignIn</Link>
    </>
  );
}

export default SignUp;
