import { memo } from "react";
import "./style.scss";
import Headermini from "../../theme/thongtin";
const Baynuocngoai = () => {
  return (
    <>
      <Headermini />
      <div class="content">
        <div class="TitlePage">Chuyến bay Việt Nam đi quốc tế</div>
        <div class="luggage-banner-wrapper">
          <img
            src="img/image-2.png"
            class="luggage-banner"
            alt="Hành lý"
            width={"1000px"}
            height={"375px"}
          />
        </div>

        <nav>
          <ul>
            <li>
              <p>
                <a href="#item1">Giấy Tờ Cần Chuẩn Bị Trước Chuyến Bay</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#item2">Quy Định Nhập Cảnh Và Quá Cảnh</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#item3">Quy Định Y Tế Và Kiểm Dịch</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#item4">Lưu Ý Khi Mang Tiền Mặt Và Hành Lý</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#item5">Hướng Dẫn Bổ Sung</a>
              </p>
            </li>
          </ul>
        </nav>

        <section id="item1">
          <div class="heading-strong">
            Giấy Tờ Cần Chuẩn Bị Trước Chuyến Bay
          </div>
          <div class="frame-1">
            <ul>
              <li>Vé máy bay hợp lệ.</li>
              <li>Hộ chiếu còn thời hạn.</li>
              <li>Các giấy tờ tùy thân cần thiết khác.</li>
              <li>Thị thực nhập cảnh (tùy theo yêu cầu của quốc gia đến).</li>
            </ul>
          </div>
        </section>

        <section id="item2">
          <div class="heading-strong">Quy Định Nhập Cảnh Và Quá Cảnh</div>
          <div class="frame-2">
            <p>
              <strong>Thị Thực Quá Cảnh:</strong>
            </p>
            <ul>
              <li>
                Hành khách từ Việt Nam khi quá cảnh tại một số quốc gia không
                cần thị thực nếu thời gian lưu trú không vượt quá quy định.
              </li>
              <li>
                Truy cập trang web chính thức của đại sứ quán hoặc cơ quan nhập
                cảnh để biết thêm chi tiết.
              </li>
            </ul>
            <p>
              <strong>Thị Thực Nhập Cảnh:</strong>
            </p>
            <ul>
              <li>
                Các quốc gia thường yêu cầu thị thực nhập cảnh, đặc biệt đối với
                hành trình dài ngày.
              </li>
              <li>
                Hành khách có thể kiểm tra loại thị thực phù hợp và các yêu cầu
                qua trang web lãnh sự quốc gia.
              </li>
            </ul>
          </div>
        </section>

        <section id="item3">
          <div class="heading-strong">Quy Định Y Tế Và Kiểm Dịch</div>
          <div class="frame-3">
            <ul>
              <li>
                Hiện tại, hầu hết các quốc gia không yêu cầu xét nghiệm COVID-19
                hoặc giấy chứng nhận tiêm phòng.
              </li>
              <li>
                Hành khách nên kiểm tra các quy định mới nhất từ quốc gia đến để
                tránh phiền phức khi nhập cảnh.
              </li>
            </ul>
          </div>
        </section>

        <section id="item4">
          <div class="heading-strong">Lưu Ý Khi Mang Tiền Mặt Và Hành Lý</div>
          <div class="frame-4">
            <ul>
              <li>
                Các quy định nghiêm ngặt về số tiền mặt mang theo áp dụng tại
                một số quốc gia.
              </li>
              <li>
                Hành khách cần khai báo nếu mang tiền vượt quá giới hạn cho
                phép.
              </li>
              <li>
                Đảm bảo hành lý xách tay và ký gửi tuân thủ các quy định an
                ninh.
              </li>
            </ul>
          </div>
        </section>

        <section id="item5">
          <div class="heading-strong">Hướng Dẫn Bổ Sung</div>
          <div class="frame-5">
            <ul>
              <li>
                Truy cập trang web chính thức của QAirline để cập nhật thông tin
                mới nhất.
              </li>
              <li>
                Nếu cần hỗ trợ, vui lòng liên hệ trung tâm chăm sóc khách hàng
                của QAirline qua hotline hoặc email.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(Baynuocngoai);
