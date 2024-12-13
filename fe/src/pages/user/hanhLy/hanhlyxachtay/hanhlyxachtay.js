import { memo } from "react";
import "./style.scss";
import { ROUTERS } from "../../../../utils/router";
import Headermini from "../../theme/thongtin";
const Hanhlyxachtay = () => {
  return (
    <>
      <div class="content">
        <div class="TitlePage">Hành lý xách tay</div>
        <div class="luggage-banner-wrapper">
          <img src="img\banner4.jpg" class="luggage-banner" alt="Hành lý" />
        </div>

        <nav>
          <ul>
            <li>
              <a href="#carry-on-baggage">Hành lý xách tay</a>
            </li>
            <li>
              <a href="#weight-and-dimensions">Trọng lượng và kích thước</a>
            </li>
            <li>
              <a href="#additional-items">Các mặt hàng gia tăng</a>
            </li>
            <li>
              <a href="#exceptions">Các trường hợp ngoại lệ</a>
            </li>
          </ul>
        </nav>

        <section id="carry-on-baggage">
          <div class="heading-strong">Hành lý xách tay</div>
          <div class="frame-1">
            <p>
              Mỗi hành khách được phép mang theo 01 túi xách tay và 01 vật dụng
              cá nhân lên tàu bay. Các mặt hàng này phải được đặt dưới ghế hoặc
              trong khoang hành lý phía trên.
            </p>
          </div>
        </section>

        <section id="weight-and-dimensions">
          <div class="heading-strong">Trọng lượng và kích thước</div>
          <div class="frame-2">
            <p>
              <strong>Hạng Thương gia/Phổ thông đặc biệt:</strong> tổng trọng
              lượng hành lý xách tay không vượt quá 18kg. Bao gồm 02 kiện hành
              lý (mỗi kiện không quá 10kg) và 01 phụ kiện.
            </p>
            <img
              src="img/Hạng_Thương_gia_hly.png"
              class="luggage"
              alt="Hành lý"
              width={"50%"}
            />
            <p>
              <strong>Hạng Phổ thông:</strong> tổng trọng lượng hành lý xách tay
              không vượt quá 12kg. Bao gồm 01 kiện hành lý (không quá 10kg) và
              01 phụ kiện.
            </p>
            <img
              src="img/Hạng_phổ_thông_hly.png"
              class="luggage"
              alt="Hành lý"
              width={"50%"}
            />

            <p>Kích thước tối đa 3 chiều (dài x rộng x cao) cần đảm bảo:</p>
            <ul>
              <li>
                <p>
                  <strong>Đối với 01 kiện hành lý:</strong> 56cm x 36cm x 23cm
                  &lt; 115cm
                </p>
              </li>
              <li>
                <p>
                  <strong>Đối với 01 phụ kiện:</strong> 40cm x 30cm x 15cm &lt;
                  85cm
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="additional-items">
          <div class="heading-strong">Các mặt hàng gia tăng</div>
          <div class="frame-3">
            <p>
              Ngoài hành lý xách tay, hành khách được phép mang thêm các mặt
              hàng sau lên tàu bay:
            </p>
            <ul>
              <li>
                <p>Áo khoác, chăn, gối</p>
              </li>
              <li>
                <p>Túi xách hoặc cặp tài liệu</p>
              </li>
              <li>
                <p>
                  Thiết bị điện tử cá nhân (laptop, máy tính bảng, điện
                  thoại...)
                </p>
              </li>
              <li>
                <p>Đồ ăn, đồ uống mua tại sân bay</p>
              </li>
              <li>
                <p>Đồ dùng trẻ em (sữa, thức ăn nhẹ, bình sữa...)</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="exceptions">
          <div class="heading-strong">Các trường hợp ngoại lệ</div>
          <div class="frame-3">
            <p>
              Một số trường hợp được phép mang hành lý xách tay vượt quá quy
              định:
            </p>
            <ul>
              <li>
                <p>Hành khách cần dùng thiết bị y tế đặc biệt</p>
              </li>
              <li>
                <p>
                  Hành khách là thành viên ưu tiên của chương trình khách hàng
                </p>
              </li>
              <li>
                <p>
                  Hành khách có các yêu cầu đặc biệt được QAirline chấp thuận
                </p>
              </li>
            </ul>
            <p>
              Trong các trường hợp này, hành khách cần liên hệ với QAirline
              trước chuyến bay để được hướng dẫn cụ thể.
            </p>
          </div>
        </section>
        <section id="frequent-flyer-baggage">
          <div class="heading-strong">
            Hành Lý Ký Gửi Miễn Cước Cho Hội Viên
          </div>
          <div class="frame-3">
            <p>
              Hội viên hạng Titan, Vàng, Bạch Kim và Triệu dặm được hưởng ưu đãi
              hành lý miễn cước khi bay trên chuyến bay do hãng hàng không khác
              khai thác. Trong đó, Vietnam Airlines và hãng hàng không khác ký
              kết hợp tác theo chương trình khách hàng thường xuyên. Để biết
              thêm thông tin, hội viên tham khảo mục Quyền lợi hạng thẻ.
            </p>
          </div>
        </section>

        <section id="checked-baggage-for-children">
          <div class="heading-strong">Hành Lý Ký Gửi Miễn Cước Cho Trẻ Em</div>
          <div class="frame-3">
            <p>
              Kiện hành lý ký gửi cho trẻ em dưới 2 tuổi (không ngồi ghế riêng)
              được miễn phí:
            </p>
            <ul>
              <li>
                <strong>Hành trình từ/đến châu Mỹ:</strong> 1 kiện tối đa 23kg
                (tổng kích thước 3 chiều không vượt quá 115cm) và một xe đẩy gấp
                lại được.
              </li>
              <li>
                <strong>Hành trình khác:</strong> 1 kiện tối đa 10kg (tổng kích
                thước 3 chiều không vượt quá 115cm) và một xe đẩy gấp lại được.
              </li>
              <li>
                Đối với vé không có tiêu chuẩn hành lý miễn cước, trẻ em dưới 02
                tuổi được mang một xe đẩy gấp lại được (không tính phí).
              </li>
            </ul>
          </div>
        </section>

        <section id="special-baggage">
          <div class="heading-strong">Hành Lý Đặc Biệt Khác</div>
          <div class="frame-3">
            <p>
              Trường hợp hành khách mang theo hành lý đặc biệt như: dụng cụ thể
              thao, xe nôi, xe lăn, hành lý cồng kềnh, xe đạp và vật phẩm có giá
              trị đặt trên ghế hành khách, vui lòng tham khảo thêm thông tin mục
              Hành lý đặc biệt hoặc liên hệ với QAirline theo thông tin hỗ trợ
              bên dưới.
            </p>
          </div>
        </section>

        <section id="restricted-items">
          <div class="heading-strong">Vật Phẩm Hạn Chế Vận Chuyển</div>
          <div class="frame-3">
            <p>
              Hành khách tham khảo danh sách vật phẩm hạn chế vận chuyển hoặc
              vận chuyển có điều kiện tại đây.
            </p>
          </div>
        </section>

        <section id="support-info">
          <div class="heading-strong">Thông Tin Hỗ Trợ</div>
          <div class="frame-3">
            <p>
              Để được tư vấn về hành lý, hành khách vui lòng liên hệ một trong
              các kênh sau:
            </p>
            <ul>
              <li>
                <strong>Tổng đài Chăm sóc khách hàng:</strong>
              </li>
              <ul>
                <li>Gọi trong lãnh thổ Việt Nam: 1900 1100</li>
                <li>Gọi từ nước ngoài về Việt Nam: (+84-24) 38320320</li>
              </ul>
              <li>
                Liên hệ với Văn phòng chi nhánh QAirline để được hỗ trợ thêm
                thông tin.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(Hanhlyxachtay);
