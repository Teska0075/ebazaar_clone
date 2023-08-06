import Layout from "./Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/Authentication/SignIn/SignIn";
import HomePage from "./Pages/HomePage";
import UserProvider from "./context";
import Auth from "./Pages/Authentication/auth";

function App() {
  const checkValid = localStorage.getItem("ebazaar_token");
  console.log("TOKEN CHECK", checkValid);

  // if (!checkValid) {
  //   return <Navigate to={"/auth"} />;
  // } else {
  return (
    <UserProvider>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </UserProvider>
  );
  // }
}

export default App;
