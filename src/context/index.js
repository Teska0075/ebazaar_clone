import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const navigate = useNavigate()
  const [isLogged,setIsLogged]=useState(localStorage.getItem("isLogged") === "true")
  const [phoneNum, setPhoneNum] = useState();
  const [pass, setPass] = useState("");

  const login = async (number, password) => {
    console.log("LOGIN PASS:", pass);
    try {
      const res = await axios.get(
        `https://api.ebazaar.mn/api/login?phone=${number}&password=${password}`
      );
      localStorage.setItem("ebazaar_token", res.data.ebazaar_token);
      localStorage.setItem("isLogged","true")
      setIsLogged(prevIsLogged => !prevIsLogged);
      console.log(res);
      console.log("LCLSTRG: ",typeof localStorage.getItem("isLogged"))
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    localStorage.removeItem("ebazaar_token");
    localStorage.removeItem("isLogged")
    navigate('/auth', { replace: true });
  };

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        phoneNum,
        setPhoneNum,
        pass,
        setPass,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
