import { memo, useEffect, useState } from "react";
import "./stylehead.scss";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname.length <= 1);
  useEffect(() => {
    const isHome = location.pathname.length <= 1;
    setIsHome(isHome);
  }, []);
  return (
    <>
      <div class="navbar">
        <img src="img/Nimbus.png" alt="logo 'QAirlines'" />
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
              <a href="dang-nhap">Đăng nhập</a>
            </div>
          </div>
        </div>
      </div>
      {isHome && <img className="banner" src="img/banner.png" alt="banner" />}
    </>
  );
};

export default memo(Header);
