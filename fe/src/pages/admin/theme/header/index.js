import { memo } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Header = () => {
  return (
    <>
      <div className="headerAdmin">
        <div className="sidebar">
          <Link to="/">
            {" "}
            <img
              src="../img/Nimbus.png"
              alt="logo 'QAirlines'"
              width={"200px"}
              style={{ marginBottom: "30px" }}
            />
          </Link>
          <ul>
            <li>
              <Link to={"/admin/news-management"}>
                <i className="fas fa-tachometer-alt"> </i>
                Đăng tin tức
              </Link>
            </li>
            <li>
              <Link to="/admin/plane-management">
                <i className="fas fa-briefcase"> </i>
                Thêm dữ liệu máy bay
              </Link>
            </li>
            <li>
              <Link to="/admin/flight-management">
                <i className="fas fa-users"> </i>
                Thay đổi dữ liệu chuyến bay
              </Link>
            </li>

            <li>
              {/* <a href="#">
                <i className="fas fa-shopping-cart"> </i>
                Thay đổi giờ bay
              </a> */}
            </li>
          </ul>
        </div>
        <div className="main-content">
          <div className="header">
            <h1>Dashboard</h1>
            {/* <div className="search-bar">
              <input placeholder="Search here" type="text" />
            </div> */}
          </div>
          {/* Xem và thống kê đặt vé của khách hàng */}
        </div>
      </div>
    </>
  );
};

export default memo(Header);
