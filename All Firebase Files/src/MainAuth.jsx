import React, { useEffect, useState } from "react";
import SignUp from "./SignUp";
import SignIN from "./SignIn";
import { app } from "./Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MainCompo from "./MainCompo";
import { Route, Routes } from "react-router-dom";
import PassAuth from "./PassAuth";

const auth = getAuth(app);

export default function MainAuth() {
  const [User, SetUser] = useState(null);

  useEffect(()=>{
    const stateChanged = onAuthStateChanged(auth,(currentUser)=>{
        SetUser(currentUser);
    })
    return () => stateChanged(); 
  },[])
  return (
    <>
    {User ? (
        < MainCompo/>
    ):( 
       <Routes>
        <Route path="/" element={<SignUp />}/>
        <Route path="/signIn" element={<SignIN />}/>
        <Route path="/PassReset" element={<PassAuth/>}/>
        </Routes>
    )}
    </>
  );
}
