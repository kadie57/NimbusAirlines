import React, { createContext, useState, useContext, useEffect } from "react";

// Create AuthContext
const AuthContext = createContext(null);

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  // Check login status on initial load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Verify token with backend if possible
      setIsLoggedIn(true);
    }
  }, []);

  // Login function
  const login = (userData, token) => {
    localStorage.setItem("authToken", token);
    setIsLoggedIn(true);
    setUserInfo(userData);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("authToken");
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

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
