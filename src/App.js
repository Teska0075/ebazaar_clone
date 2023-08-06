import React, { useEffect } from "react";
import { Routes, Route} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import UserProvider from "./context";
import Auth from "./Pages/Authentication/auth";

function App() {
  // const {user}=useContext(UserContext)
  const isLogged=localStorage.getItem("isLogged")
  console.log("APP:", isLogged)
  if(isLogged === "true"){
    return (
      <UserProvider>
        <Routes>            
            <Route path="/" element={<HomePage />} />
        </Routes>
      </UserProvider>
    );
  }else{
    return (
      <UserProvider>
        <Routes>
            <Route exact path="auth" element={<Auth />} />
            {/* <Route exact path="signup" element={<Auth />} /> */}
        </Routes>
      </UserProvider>
    )
  }

}

export default App;