import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styletin.scss";
const TinTuc = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="tin">
      <div class="container-tin-tuc">
        <div class="title">Thông tin nổi bật</div>
        <Carousel responsive={responsive}>
          <div class="card">
            <img
              alt="A laptop showing an online check-in page"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/OZm8eff9FHI5CJpbgUMO5r5at8Ikd6GfguCczXazZmCtzljPB.jpg"
              width="300"
            />
            <div class="card-content">
              <div class="card-title">Làm thủ tục trực tuyến</div>
              <div class="card-description">
                Chủ động làm thủ tục trên website hoặc ứng dụng di động của
                Vietnam Airlines.
              </div>
            </div>
          </div>
          <div class="card">
            <img
              alt="People in a business lounge"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/ve4BPJI5Uv1QCC01OAtppZIKnxRISeSI2eDqsNew3nw6zljPB.jpg"
              width="300"
            />
            <div class="card-content">
              <div class="card-title">Phòng khách Thương gia</div>
              <div class="card-description">
                Trải nghiệm phòng chờ sang trọng, yên tĩnh và đầy đủ tiện nghi
                trước giờ khởi hành.
              </div>
            </div>
          </div>
          <div class="card">
            <img
              alt="A meal served in business class"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/8D8lww6hQX7ONxNrTpc8tHPhBULmOnVzA4otjFfdnCPec54TA.jpg"
              width="300"
            />
            <div class="card-content">
              <div class="card-title">Ẩm thực hạng Thương gia</div>
              <div class="card-description">
                Trải nghiệm “ẩm thực trên mây” 5 sao.
              </div>
            </div>
          </div>
          <div class="card">
            <img
              alt="A meal served in business class"
              height="200"
              src="img/banner5.jpg"
              width="300"
            />
            <div class="card-content">
              <div class="card-title">Tích lũy dặm trên chuyến bay</div>
              <div class="card-description">
                Trải nghiệm “ẩm thực trên mây” 5 sao.
              </div>
            </div>
          </div>
          <div class="card">
            <img
              alt="A meal served in business class"
              height="200"
              src="img/bay-tet.jpg"
              width="300"
            />
            <div class="card-content">
              <div class="card-title">Khuyến mãi bay Tết 2025</div>
              <div class="card-description">Nhiều ưu đãi hấp dẫn</div>
            </div>
          </div>
          <div class="card">
            <img
              alt="A meal served in business class"
              height="200"
              src="img/hanh-ly.jpg"
              width="300"
            />
            <div class="card-content">
              <div class="card-title">Hành lý đặc biệt</div>
              <div class="card-description">
                Tìm hiểu về các loại hành lý đặc biệt
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div class="pagination">
        <i class="fas fa-circle"></i>
        <i class="fas fa-circle"></i>
        <i class="fas fa-circle"></i>
        <i class="fas fa-pause"></i>
      </div>
    </div>
  );
};

export default memo(TinTuc);
