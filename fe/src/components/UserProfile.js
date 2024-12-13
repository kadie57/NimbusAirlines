import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Authentication";

const Profile = () => {
  const { isLoggedIn, userInfo, logout } = useAuth();
  const navigate = useNavigate();

  // State for user profile data
  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  // State for edit mode and messages
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState({
    text: "",
    color: "",
  });

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserProfile = async () => {
      // Check if logged in
      if (!isLoggedIn) {
        // Redirect to login if not logged in
        navigate("/dang-nhap");
        return;
      }

      try {
        // Get auth token and username from local storage
        const token = localStorage.getItem("authToken");
        const storedUsername = localStorage.getItem("username");

        if (!token || !storedUsername) {
          logout(); // Clear any stale login state
          navigate("/dang-nhap");
          return;
        }

        // Fetch user profile details
        const response = await fetch(
          `http://54.200.166.229/accounts/${storedUsername}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          // Handle unauthorized or token expired
          if (response.status === 401) {
            logout();
            navigate("/dang-nhap");
            return;
          }

          throw new Error("Failed to fetch user profile");
        }

        const data = await response.json();

        // Update profile data
        setProfileData({
          username: data.username,
          email: data.email,
          newPassword: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
        setMessage({
          text: "Không thể tải thông tin người dùng. Vui lòng thử lại.",
          color: "red",
        });
      }
    };

    fetchUserProfile();
  }, [isLoggedIn, navigate, logout]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password
    if (profileData.newPassword !== profileData.confirmPassword) {
      setMessage({
        text: "Mật khẩu xác nhận không khớp",
        color: "red",
      });
      return;
    }

    try {
      // Get auth token from local storage
      const token = localStorage.getItem("authToken");
      if (!token) {
        logout();
        navigate("/dang-nhap");
        return;
      }

      // Prepare update data
      const updateData = {
        username: profileData.username,
        email: profileData.email,
        ...(profileData.newPassword && {
          password_hash: profileData.newPassword,
        }),
      };

      // Send update request
      const response = await fetch(
        `http://54.200.166.229/accounts/${profileData.username}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add token to authorization header
          },
          body: JSON.stringify(updateData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage({
          text: "Cập nhật thông tin thành công",
          color: "green",
        });
        setIsEditing(false);
      } else {
        setMessage({
          text: data.error || "Cập nhật thất bại",
          color: "red",
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage({
        text: "Đã xảy ra lỗi khi cập nhật thông tin",
        color: "red",
      });
    }
  };

  // Render profile view or edit form
  return (
    <>
      <img src="img/homepage.jpg" alt="" className="background" />
      <div className="profile-container">
        <div className="heading-strong">Thông Tin Tài Khoản</div>

        {!isEditing ? (
          <div className="profile-view">
            <div className="profile-detail">
              <label>Tên đăng nhập</label>
              <p>{profileData.username}</p>
            </div>
            <div className="profile-detail">
              <label>Email</label>
              <p>{profileData.email}</p>
            </div>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Chỉnh Sửa Thông Tin
            </button>
          </div>
        ) : (
          <form className="profile-edit-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Tên đăng nhập</label>
              <input
                type="text"
                name="username"
                value={profileData.username}
                onChange={handleInputChange}
                disabled
              />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Mật khẩu mới (để trống nếu không muốn thay đổi)</label>
              <input
                type="password"
                name="newPassword"
                value={profileData.newPassword}
                onChange={handleInputChange}
              />
            </div>
            {profileData.newPassword && (
              <div className="input-group">
                <label>Xác nhận mật khẩu mới</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={profileData.confirmPassword}
                  onChange={handleInputChange}
                  required={!!profileData.newPassword}
                />
              </div>
            )}
            <div className="form-actions">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  setIsEditing(false);
                  setMessage({ text: "", color: "" });
                }}
              >
                Hủy
              </button>
              <button type="submit" className="save-btn">
                Lưu Thay Đổi
              </button>
            </div>
          </form>
        )}

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
      </div>
    </>
  );
};

export default Profile;
