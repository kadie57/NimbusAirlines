import React, { useState } from "react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../components/Authentication";
import "./style.scss";

const Dangnhap = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const checkAdminAccount = async (username, password) => {
    try {
      const response = await fetch("http://54.200.166.229/admin_accounts", {
        method: "GET",
      });

      if (response.ok) {
        const adminAccounts = await response.json();
        // Kiểm tra xem tài khoản có trong danh sách admin không
        return adminAccounts.some(
          (account) =>
            account.username === username && account.password === password
        );
      }
      return false;
    } catch (error) {
      console.error("Error checking admin account:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kiểm tra xem có phải tài khoản admin không
      const isAdmin = await checkAdminAccount(
        formData.username,
        formData.password
      );

      // Endpoint đăng nhập tương ứng
      const loginEndpoint = "http://54.200.166.229/login";

      const response = await fetch(loginEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Lưu thông tin người dùng với role tương ứng
        login(
          formData.username,
          data.token,
          isAdmin ? "admin" : "user",
          formData.password
        );
        setMessage("Đăng nhập thành công");

        // Chuyển hướng dựa trên role
        if (isAdmin) {
          navigate("/admin", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
        window.location.reload();
      } else {
        setMessage(data.message || "Đăng nhập thất bại");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Đã xảy ra lỗi trong quá trình đăng nhập");
    }
  };

  return (
    <>
      <img src="img/homepage.jpg" alt="" className="background" />
      <div className="login-container">
        <h2>Đăng nhập</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Tên đăng nhập</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <i className="user"></i>
          </div>
          <div className="input-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <i className="lock"></i>
          </div>
          <button type="submit" className="login-btn">
            Đăng nhập
          </button>
        </form>
        {message && (
          <div
            style={{
              color: message.includes("thành công") ? "green" : "red",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            {message}
          </div>
        )}
      </div>
    </>
  );
};

export default memo(Dangnhap);
