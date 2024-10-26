import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "./Firebase";
import "./CSS/App.css";
const auth = getAuth(app);
export default function PassReset() {
  const [email, SetEmail] = useState("");
  const [message, setmessage] = useState("");

  const HandlePassReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => setmessage("Check your Email for Password Reset Link!"))
      .catch((err) => console.log("Something Went Wrong :" + err));
    SetEmail("");
  };
  return (
    <>
      {message && <p>{message}</p>}
      <div className="resetmain">
        <form onSubmit={HandlePassReset} className="forgetform">
          <input
            type="email"
            className="check-email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          <br />
          <br />
          <button type="Submit" className="sentLink">Submit</button>
          <br />
          <span className="p">Return To SignIn Page? <Link to="/signIn">SignIn</Link></span>
        </form>
      </div>
    </>
  );
}
