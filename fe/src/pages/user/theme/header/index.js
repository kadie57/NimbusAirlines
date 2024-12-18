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
        <Link to="/" className="logo">
          <img src="img/Nimbus.png" alt="logo 'QAirlines'" />
        </Link>
        <div class="nav-links">
          <div class="has-dropdown">
            <Link to="#">Thông tin hành trình</Link>
            <div class="dropdown" style={{ width: "100%", left: "0px" }}>
              <div class="has-sub-dropdown">
                <Link to="#">Hành Lý</Link>
                <div class="sub-dropdown">
                  <Link to="/hanh-ly-xach-tay">Hành lý xách tay</Link>
                  <Link to="/hanh-ly-ky-gui">Hành lý ký gửi</Link>
                  <Link to="/hanh-ly-dac-biet">Hành lý đặc biệt</Link>
                  <Link to="/gap-van-de-voi-hanh-ly">
                    Gặp vấn đề với hành lý
                  </Link>
                </div>
              </div>
              <div class="has-sub-dropdown">
                <Link to="#">Làm thủ tục</Link>
                <div class="sub-dropdown" style={{ top: "0px" }}>
                  <Link to="/tt-truc-tiep">Làm thủ tục trực tiếp</Link>
                  <Link to="/tt-truc-tuyen">Làm thủ tục trực tuyến</Link>
                </div>
              </div>
              <div class="has-sub-dropdown">
                <Link to="/tt-san-bay">Thông tin sân bay</Link>
                <div class="sub-dropdown" style={{ top: "0px" }}>
                  <Link to="/phong-khach-thuong-gia">
                    Phòng khách thương gia
                  </Link>
                  <Link to="/dich-vu-uu-tien">Dịch vụ ưu tiên</Link>
                </div>
              </div>
              <div class="has-sub-dropdown">
                <Link to="#">Cẩm nang bay</Link>
                <div class="sub-dropdown" style={{ top: "0px" }}>
                  <Link to="/noi-dia">Chuyến bay nội địa Việt Nam</Link>
                  <Link to="/nuoc-ngoai">Chuyến bay Việt Nam đi quốc tế</Link>
                </div>
              </div>
            </div>
          </div>
          <Link to="/tim-chuyen">Tìm chuyến</Link>
          <Link to="/dat-ve">Đặt vé</Link>
          <Link to="/#tin">Tin tức</Link>
          <div class="has-dropdown">
            <Link to="#">Tài khoản</Link>
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
                  <Link to="/sua-doi-thong-tin">Thông tin cá nhân</Link>
                  <Link to="/ve-da-dat">Vé đã đặt</Link>
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
      {/* {isHome && <img className="banner" src="img/homepage.jpg" alt="banner" />} */}
    </>
  );
};

export default memo(Header);
