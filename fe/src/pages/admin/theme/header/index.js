import { memo } from "react";
import "./Dashboard.css";

const Header = () => {
  return (
    <>
      <div class="headerAdmin">
        <div class="sidebar">
          <div className="titlemenu">QAIRLINES</div>
          <ul>
            <li>
              <a href="#">
                <i class="fas fa-tachometer-alt"> </i>
                Đăng tin tức
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-users"> </i>
                Thêm dữ liệu chuyến bay
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-briefcase"> </i>
                Thêm dữ liệu máy bay
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-shopping-cart"> </i>
                Thay đổi giờ bay
              </a>
            </li>
          </ul>
        </div>
        <div class="main-content">
          <div class="header">
            <h1>Dashboard</h1>
            <div class="search-bar">
              <input placeholder="Search here" type="text" />
            </div>
            <div class="user-profile">
              <img
                alt="User profile picture"
                height="40"
                src="https://storage.googleapis.com/a1aa/image/KfkaUCcPGgQbS6VSDhC5gWtNxRauKgSZYUg54VPRD6rC5Q9JA.jpg"
                width="40"
              />
              <div class="user-info">
                <p class="name">John Doe</p>
                <p class="role">Super admin</p>
              </div>
            </div>
          </div>
          Xem và thống kê đặt vé của khách hàng
        </div>
      </div>
    </>
  );
};

export default memo(Header);
