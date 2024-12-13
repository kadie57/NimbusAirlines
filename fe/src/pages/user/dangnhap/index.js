import React, { useState } from "react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../components/Authentication";
import "./style.scss";

const Dangnhap = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // State to manage login message
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://54.200.166.229/login", {
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
        // Sửa đổi ở đây: truyền username và token
        login(formData.username, data.token);
        setMessage("Đăng nhập thành công");
        // Chuyển hướng sau khi đăng nhập
        navigate("/", { replace: true });
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
