import { memo, useEffect, useState } from "react";
import "./stylehead.scss";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname.length <= 1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const isHome = location.pathname.length <= 1;
    setIsHome(isHome);

    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  // Hàm đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    // Chuyển hướng về trang chủ hoặc trang đăng nhập
    window.location.href = "/dang-nhap";
  };
  return (
    <>
      <div class="navbar">
        <a href="/" className="logo">
          <img src="img/Nimbus.png" alt="logo 'QAirlines'" />
        </a>
        <div class="nav-links">
          <div class="has-dropdown">
            <a href="#">Thông tin hành trình</a>
            <div class="dropdown" style={{ width: "100%", left: "0px" }}>
              <div class="has-sub-dropdown">
                <a href="#">Hành Lý</a>
                <div class="sub-dropdown">
                  <a href="hanh-ly-xach-tay">Hành lý xách tay</a>
                  <a href="hanh-ly-ky-gui">Hành lý ký gửi</a>
                  <a href="hanh-ly-dac-biet">Hành lý đặc biệt</a>
                  <a href="gap-van-de-voi-hanh-ly">Gặp vấn đề với hành lý</a>
                </div>
              </div>
              <div class="has-sub-dropdown">
                <a href="#">Làm thủ tục</a>
                <div class="sub-dropdown" style={{ top: "0px" }}>
                  <a href="tt-truc-tiep">Làm thủ tục trực tiếp</a>
                  <a href="tt-truc-tuyen">Làm thủ tục trực tuyến</a>
                </div>
              </div>
              <div class="has-sub-dropdown">
                <a href="tt-san-bay">Thông tin sân bay</a>
              </div>
              <div class="has-sub-dropdown">
                <a href="#">Cẩm nang bay</a>
                <div class="sub-dropdown" style={{ top: "0px" }}>
                  <a href="noi-dia">Chuyến bay nội địa Việt Nam</a>
                  <a href="nuoc-ngoai">Chuyến bay Việt Nam đi nước ngoài</a>
                </div>
              </div>
            </div>
          </div>
          <a href="tim-chuyen">Tìm chuyến</a>
          <a href="dat-ve">Đặt vé</a>
          <a href="/#tin">Tin tức</a>
          <div class="has-dropdown">
            <a href="#">Tài khoản</a>
            <div
              class="dropdown"
              style={{
                // left: "auto",
                // right: "-8px",

                // width: "101.14px",
                width: "100%",
                left: "0px",
              }}
            >
              {/* Điều kiện render menu dựa trên trạng thái đăng nhập */}
              {!isLoggedIn ? (
                <>
                  <Link to="/dang-nhap">Đăng nhập</Link>
                  <Link to="/dang-ky">Đăng ký</Link>
                </>
              ) : (
                <>
                  <Link to="/sua-doi-thong-tin">Sửa đổi thông tin cá nhân</Link>
                  <a>
                    <button
                      onClick={handleLogout}
                      style={{
                        background: "none",
                        border: "none",
                        color: "inherit",
                        textAlign: "left",
                        width: "100%",
                        padding: "0px",
                        fontWeight: "bold",
                        fontSize: "16px",
                        height: "100%",
                        margin: "0px",
                      }}
                    >
                      Đăng xuất
                    </button>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {isHome && <img className="banner" src="img/homepage.jpg" alt="banner" />}
    </>
  );
};

export default memo(Header);
