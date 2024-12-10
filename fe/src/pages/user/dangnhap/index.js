import React, { useState } from "react";
import { memo } from "react";
import "./style.scss";
import Headermini from "../theme/thongtin";

const Dangnhap = () => {
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
    e.preventDefault(); // Prevent default form submission

    try {
      // Send POST request to the backend
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

      // Parse the response
      const data = await response.json();

      // Set message based on response
      setMessage(data.message || data.error || "Login attempt completed");
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred during login");
    }
  };

  return (
    <>
      <Headermini />
      <img src="img/homepage.jpg" alt="" className="background" />
      <div className="login-container">
        <h2>Đăng nhập</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">User Name</label>
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
            <label htmlFor="password">Password</label>
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
              color: message.includes("error") ? "red" : "green",
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
