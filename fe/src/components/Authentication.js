import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [credentials, setCredentials] = useState(null); // Thêm state cho credentials

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("userRole");
    const password = localStorage.getItem("password");
    if (token && username) {
      setIsLoggedIn(true);
      setUserInfo(username);
      setUserRole(role);
      setCredentials({ username, password }); // Lưu credentials vào state
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
    setCredentials({ username, password }); // Cập nhật credentials khi đăng nhập
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    localStorage.removeItem("userRole");
    localStorage.removeItem("password");
    setIsLoggedIn(false);
    setUserInfo(null);
    setUserRole(null);
    setCredentials(null); // Xóa credentials khi đăng xuất
  };

  // Thêm hàm lấy credentials
  const getCredentials = () => {
    return {
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
    };
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userInfo,
        userRole,
        credentials, // Thêm credentials vào context
        login,
        logout,
        getCredentials, // Thêm hàm getCredentials vào context
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
