import React, { useState } from "react";
import { memo } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.scss";
import Headermini from "../theme/thongtin";

const Dangky = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // State to manage form submission message
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
    e.preventDefault(); // Prevent default form submission

    // Prepare data object
    const data = {
      username: formData.username,
      email: formData.email,
      password_hash: formData.password,
    };

    try {
      // Send POST request to the backend
      const response = await fetch("http://54.200.166.229/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Parse the response
      const responseData = await response.json();

      // Handle response
      if (response.ok) {
        // Đăng ký thành công
        setMessage({
          text: "Đăng ký thành công. Chuyển hướng đến trang đăng nhập...",
          color: "green",
        });

        // Chuyển hướng đến trang đăng nhập sau 2 giây
        setTimeout(() => {
          navigate('/dang-nhap');
        }, 2000);
      } else {
        // Đăng ký thất bại
        setMessage({
          text: responseData.error || "Đăng ký không thành công",
          color: "red",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({
        text: "Đã xảy ra lỗi. Vui lòng thử lại.",
        color: "red",
      });
    }
  };

  return (
    <>
      <Headermini />
      <img src="img/homepage.jpg" alt="" className="background" />
      <div className="container-register">
        <h2>Tạo tài khoản</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Tên đăng nhập</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <i className="user"></i>
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <i className="mail"></i>
          </div>
          <div className="input-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <i className="lock"></i>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" required />
            <span>Tôi đồng ý với các điều khoản và dịch vụ</span>
          </div>
          <button type="submit" className="register-btn">
            Đăng ký
          </button>
        </form>
        {message.text && (
          <div
            style={{
              color: message.color,
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            {message.text}
          </div>
        )}
        <p className="login-link">
          Bạn đã có tài khoản? <Link to="/dang-nhap">Đăng nhập</Link>
        </p>
      </div>
    </>
  );
};

export default memo(Dangky);