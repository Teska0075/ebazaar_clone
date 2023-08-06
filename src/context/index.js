import React, { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [phoneNum, setPhoneNum] = useState();
  const [pass, setPass] = useState("");

  const login = async (number, password) => {
    console.log("LOGIN PASS:", pass);
    try {
      const res = await axios.get(
        `https://api.ebazaar.mn/api/login?phone=${number}&password=${password}`
      );
      localStorage.setItem("ebazaar_token", res.data.ebazaar_token);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    localStorage.removeItem("ebazaar_token");
    // setUser(null);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
