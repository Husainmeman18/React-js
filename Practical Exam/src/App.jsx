import React, { useEffect, useState } from "react";
import SignUp from "./SignUp";
import { app } from "./Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MainCompo from "./MainCompo";
import { Route, Routes } from "react-router-dom";
import PassReset from "./PassReset"
import SignIn from "./SignIn";

const auth = getAuth(app);

export default function App() {
  const [User, SetUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
    {User ? (
        < MainCompo/>
    ):( 
       <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/PassReset" element={<PassReset/>}/>
       </Routes>
    )}
    </>
  );
}
