import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const username = localStorage.getItem("username");
    if (token && username) {
      setIsLoggedIn(true);
      setUserInfo(username);
    }
  }, []);

  const login = (username, token) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("username", username);
    setIsLoggedIn(true);
    setUserInfo(username);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userInfo,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
