import React, { useState, useEffect } from "react";
import { useAuth } from "../../../components/Authentication";
import { useNavigate } from "react-router-dom";
import "./style.css";

const AccountManagement = () => {
  const { userInfo: username, logout } = useAuth();
  const navigate = useNavigate();
  const storedPassword = localStorage.getItem("password");

  const [accountDetails, setAccountDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "", // Để trống cho người dùng nhập
    newusername: "",
    email: "",
    realname: "",
    birthdate: "",
    gender: "",
    newpassword: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (username && storedPassword) {
      setFormData((prev) => ({
        ...prev,
        username, // Chỉ set username, không set password
      }));
      fetchAccountDetails();
    }
  }, [username, storedPassword]);

  const fetchAccountDetails = async () => {
    try {
      const response = await fetch(
        `http://54.200.166.229/account_details/${username}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: storedPassword }),
        }
      );

      if (!response.ok) {
        throw new Error("Không thể lấy thông tin tài khoản");
      }

      const data = await response.json();
      setAccountDetails(data[0]);
      setFormData((prev) => ({
        ...prev,
        newusername: data[0].username || "",
        email: data[0].email || "",
        realname: data[0].realname || "",
        birthdate: data[0].birthdate || "",
        gender: data[0].gender || "",
        password: "", // Đảm bảo password luôn trống khi bắt đầu chỉnh sửa
        newpassword: "",
      }));
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // Kiểm tra mật khẩu hiện tại
    if (formData.password !== storedPassword) {
      setError("Mật khẩu hiện tại không chính xác");
      return; // Dừng việc thực thi tiếp
    }

    try {
      const response = await fetch(
        `http://54.200.166.229/modify_accounts/${formData.username}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Cập nhật thông tin thành công! Đang đăng xuất...");
        setIsEditing(false);

        setTimeout(() => {
          logout();
          navigate("/dang-nhap");
          window.location.reload();
        }, 2000);
      } else {
        setError(result.error || "Không thể cập nhật thông tin");
      }
    } catch (err) {
      setError("Đã xảy ra lỗi khi cập nhật thông tin");
    }
  };

  if (!username || !storedPassword) {
    return (
      <div className="account-management">
        Vui lòng đăng nhập để xem thông tin tài khoản
      </div>
    );
  }

  return (
    <div className="account-management">
      <div className="card">
        <div className="card-header">
          <h1>Thông tin tài khoản</h1>
        </div>

        <div className="card-content">
          {error && <div className="message error">{error}</div>}
          {successMessage && (
            <div className="message success">{successMessage}</div>
          )}

          {!isEditing && accountDetails && (
            <div className="details-container">
              <div className="detail-item">
                <span className="label">Tên đăng nhập:</span>
                {accountDetails.username}
              </div>
              <div className="detail-item">
                <span className="label">Email:</span>
                {accountDetails.email}
              </div>
              <div className="detail-item">
                <span className="label">Họ và tên:</span>
                {accountDetails.realname}
              </div>
              <div className="detail-item">
                <span className="label">Ngày sinh:</span>
                {accountDetails.birthdate}
              </div>
              <div className="detail-item">
                <span className="label">Giới tính:</span>
                {accountDetails.gender === "male" ? "Nam" : "Nữ"}
              </div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setIsEditing(true);
                  setError(""); // Xóa error khi bắt đầu chỉnh sửa
                  setFormData((prev) => ({
                    ...prev,
                    password: "", // Reset password field khi bắt đầu chỉnh sửa
                  }));
                }}
              >
                Chỉnh sửa thông tin
              </button>
            </div>
          )}

          {isEditing && (
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-group">
                <label htmlFor="username">Tên đăng nhập hiện tại:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  readOnly // Không cho phép sửa username hiện tại
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Mật khẩu hiện tại:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleInputChange}
                  required
                  placeholder="Nhập mật khẩu hiện tại của bạn"
                />
              </div>

              <div className="form-group">
                <label htmlFor="newusername">Tên đăng nhập mới:</label>
                <input
                  type="text"
                  id="newusername"
                  name="newusername"
                  value={formData.newusername}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="realname">Họ và tên:</label>
                <input
                  type="text"
                  id="realname"
                  name="realname"
                  value={formData.realname}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="birthdate">Ngày sinh:</label>
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Giới tính:</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Chọn giới tính</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="newpassword">Mật khẩu mới:</label>
                <input
                  type="password"
                  id="newpassword"
                  name="newpassword"
                  value={formData.newpassword}
                  onChange={handleInputChange}
                  placeholder="Để trống nếu không muốn đổi mật khẩu"
                />
              </div>

              <div className="button-group">
                <button type="submit" className="btn btn-primary">
                  Lưu thay đổi
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setIsEditing(false);
                    setError("");
                    setSuccessMessage("");
                    fetchAccountDetails();
                  }}
                >
                  Hủy
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
