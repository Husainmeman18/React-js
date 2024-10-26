import React, { useState } from "react";
import "./CSS/SigninPage.css";
import { app } from "./Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import googleIcon from "./assets/new-google-favicon-512.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const auth = getAuth(app);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Success sign in");
      })
      .catch((err) => {
        console.log("Error in sign in: " + err);
        setErrorMessage("Failed to sign in. Please check your credentials.");
      });
    setEmail("");
    setPassword("");
  };
  const SignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

   await signInWithPopup(auth,provider)
      .then(() => {
        console.log("Success sign in");
        setErrorMessage("");
      })
      .catch((err) => {
        // console.error("Full Error: ", err);
        setErrorMessage("Failed to sign in. Please check your credentials.");
      });
  };

  return (
    <div className="main">
      <div className="bg">
        <h4 className="heading">Welcome back!</h4>
        <h5 className="subheading">
          Get access to your Orders, Wishlist and Recommendations.
        </h5>
      </div>
      <div className="loginmain">
        <div className="sign">
          <h3 className="signup">Sign In</h3>
        </div>
        <form onSubmit={handleSignIn}>
          <div className="info">
            <h4 className="email">Email Address</h4>
            <input
              type="email"
              className="enteremail"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pass">
            <h4 className="password">Password</h4>
            <input
              type="password"
              className="enterpass"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forgot">
            Forgot Your Password? <Link to="/PassReset">Reset Here</Link>
          </div>
          <div className="signin-btn">
            <button type="submit" className="b1">
              Sign In
            </button>
          </div>
          <p style={{ marginTop: "10px", marginLeft: "55px" }}>
            Don't have an Account? <Link to="/">SignUp</Link>
          </p>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <div className="line">
          <span className="hr">Or with Social Profile</span>
          <hr className="first" />
        </div>
        <div className="png">
          <img
            src={googleIcon}
            onClick={SignInWithGoogle}
            className="google p"
            alt="Google"
            style={{cursor:"pointer"}}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
