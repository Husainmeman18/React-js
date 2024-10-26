import React, { useState } from "react";
import { useEffect } from "react";
import "./CSS/SignUp.css";
import { app } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
// import googleIcon from "./assets/new-google-favicon-512.png";
const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    document.body.style.display = "flex";
    document.body.style.placeItems = "center"

    return () => {
      document.body.style.display = "";
      document.body.style.placeItems = "";
    };
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Success sign in");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log("Error in sign in: " + err);
        setErrorMessage("Failed to sign Up. Please check your credentials.");
      });
  };
  

  return (
    <div className="main1">
      <div className="bg1">
        <h4 className="heading1">Welcome!</h4>
        <h5 className="subheading1">
          Get access to your Orders, Wishlist and Recommendations.
        </h5>
      </div>
      <div className="loginmain1">
        <div className="sign1">
          <h3 className="signup1">Sign Up</h3>
        </div>
        <form onSubmit={handleSignUp}>
          <div className="info1">
            <h4 className="email1">Email Address</h4>
            <input
              type="email"
              className="enteremail1"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pass1">
            <h4 className="password1">Password</h4>
            <input
              type="password"
              className="enterpass1"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forgot1">
            <span>Already have an Account?</span> <Link to="/signIn">SignIn</Link>
          </div>
          <div className="signin-btn1">
            <button type="submit" className="b11">
              Sign Up
            </button>
          </div>
        </form>
        {errorMessage && <p className="error1">{errorMessage}</p>}
        <div className="line1">
          <span className="hr1">Or with Social Profile</span>
          <hr className="first1" />
        </div>
        {/* <div className="png1">
          <img src={googleIcon} className="google p" alt="Google" />
        </div> */}
      </div>
    </div>
  );
};

export default SignUp;
