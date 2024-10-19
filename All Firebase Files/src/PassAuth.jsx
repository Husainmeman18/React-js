import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "./Firebase";

const auth = getAuth(app);
export default function PassAuth() {
  const [email, SetEmail] = useState("");
  const [message, setmessage] = useState("");

const HandlePassReset = (e) =>{
    e.preventDefault();
    sendPasswordResetEmail(auth,email)
    .then(()=>setmessage("Check your Email for Password Reset Link!"))
    .catch((err)=>console.log("Something Went Wrong :" + err));
    SetEmail("");
}
  return <>
  {message && <p>{message}</p>}
  <form onSubmit={HandlePassReset}>
    <input type="email" placeholder="Enter Your Email" value={email} onChange={(e)=>SetEmail(e.target.value)}/>
    <br /><br />
    <button type="Submit">Submit</button>
  </form>
  Return To SignIn Page? <Link to="/signIn">SignIn</Link>
  </>;
}
