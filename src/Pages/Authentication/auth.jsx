import React, { useState, useContext } from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return <>{isSignIn ? <SignIn /> : <SignUp />}</>;
};

export default Auth;
