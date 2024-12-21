import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("userRole");
    if (token && username) {
      setIsLoggedIn(true);
      setUserInfo(username);
      setUserRole(role);
    }
  }, []);

  const login = (username, token, role, password) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("username", username);
    localStorage.setItem("userRole", role);
    localStorage.setItem("password", password);
    setIsLoggedIn(true);
    setUserInfo(username);
    setUserRole(role);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    localStorage.removeItem("userRole");
    localStorage.removeItem("password");
    setIsLoggedIn(false);
    setUserInfo(null);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userInfo,
        userRole,
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
