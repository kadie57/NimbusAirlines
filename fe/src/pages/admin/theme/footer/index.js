import { memo } from "react";
import "./style.scss";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div class="wrapper">
        <div class="content"></div>
        <div class="footer">
          <div class="social-icons">
            <a href="#">
              <i class="fab fa-facebook-f">
                <BsFacebook />
              </i>
            </a>
            <a href="#">
              <i class="fab fa-twitter">
                <BsTwitter />
              </i>
            </a>
            <a href="#">
              <i class="fab fa-instagram">
                <BsInstagram />
              </i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in">
                <BsLinkedin />
              </i>
            </a>
          </div>
          <div class="footer-links">
            <a href="#">Trang chủ</a>
            <a href="#">Đặt vé</a>
            <a href="#">Tìm chuyến</a>
            <a href="#">Tài khoản</a>
          </div>
          <p>&copy; 2023 QAirlines. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default memo(Footer);
