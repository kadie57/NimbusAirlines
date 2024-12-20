import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Phongkhachthuonggia = () => {
  return (
    <>
      <div class="luggage-banner-wrapper">
        <img src="img\Banner_2.png" class="luggage-banner" alt="Hành lý" />
      </div>
      <div class="content">
        <div class="TitlePage">Phòng khách thương gia</div>

        <nav>
          <ul>
            <li>
              <a href="#lounges-description">Thông tin Phòng khách</a>
            </li>
            <li>
              <a href="#free-usage">Sử dụng phòng khách miễn phí</a>
            </li>
            <li>
              <a href="#location-hours">Vị trí & Giờ mở cửa</a>
            </li>
            <li>
              <a href="#eligibility">Hành khách sử dụng phòng khách</a>
            </li>
            <li>
              <a href="#voucher-purchase">Mua Voucher</a>
            </li>
            <li>
              <a href="#documents">Giấy tờ cần chuẩn bị</a>
            </li>
            <li>
              <a href="#lounge-amenities">Tiện ích phòng khách</a>
            </li>
            <li>
              <a href="#important-notes">Thông tin cần lưu ý</a>
            </li>
          </ul>
        </nav>

        <section id="lounges-description">
          <div class="heading-strong">
            Thông tin về Phòng khách Bông Sen và Phòng khách Thương gia
          </div>
          <div class="frame-2">
            <p>
              QAirlines cung cấp dịch vụ Phòng khách Bông Sen và Phòng khách
              Thương gia tại các sân bay nội địa và quốc tế. Tách biệt khỏi sự
              ồn ào, náo nhiệt của sân bay, dịch vụ này mang đến cho hành khách
              một không gian chờ sang trọng, yên tĩnh, riêng tư và đầy đủ tiện
              nghi trước giờ khởi hành. Tại phòng khách, các tiện ích làm việc,
              giải trí cùng những bữa buffet hấp dẫn đã sẵn sàng chào đón hành
              khách.
            </p>
          </div>
        </section>

        <section id="free-usage">
          <div class="heading-strong">Sử dụng phòng khách miễn phí</div>
          <div class="frame-2">
            <p>
              Hành khách thực hiện các chuyến bay của QAirline hoặc đối tác
              trong Liên minh Skyteam có thể sử dụng miễn phí dịch vụ Phòng
              khách Bông Sen/Phòng khách Thương gia.
            </p>
            <p>
              Phòng khách Bông Sen là dịch vụ phòng chờ cao cấp do QAirline sở
              hữu và vận hành tại một số sân bay Việt Nam. Phòng khách Thương
              gia là hệ thống phòng chờ do đối tác của QAirline vận hành tại các
              sân bay quốc tế và các sân bay Việt Nam không có phòng khách Bông
              Sen.
            </p>
          </div>
        </section>

        <section id="location-hours">
          <div class="heading-strong">
            Vị trí phòng khách tại sân bay và giờ mở cửa
          </div>
          <div class="frame-2">
            <p>
              Để biết thêm thông tin về vị trí và giờ mở cửa phòng khách, vui
              lòng truy cập mục Thông tin Sân bay, sau đó chọn “Quốc gia/Vùng
              lãnh thổ” và “Thành phố” rồi nhấn “Tìm kiếm”.
            </p>
          </div>
        </section>

        <section id="eligibility">
          <div class="heading-strong">
            Hành khách được sử dụng phòng khách miễn phí
          </div>
          <div class="frame-2">
            <p>
              Hành khách thực hiện các chuyến bay do QAirline hoặc các hãng hàng
              không trong liên minh SkyTeam khai thác được sử dụng miễn phí
              Phòng khách Bông Sen hoặc Phòng khách Thương gia nếu đáp ứng các
              tiêu chuẩn dưới đây:
            </p>
            <table className="baggage-table">
              <thead>
                <tr>
                  <th>Đối tượng khách</th>
                  <th>
                    Sử dụng phòng khách Bông Sen tại một số sân bay Việt Nam
                  </th>
                  <th>Sử dụng phòng khách Thương gia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hành khách mua vé hạng Thương gia</td>
                  <td>√</td>
                  <td>√</td>
                </tr>
                <tr>
                  <td>Hội viên Triệu dặm</td>
                  <td>√ Mời 03 khách</td>
                  <td>√ Mời 03 khách</td>
                </tr>
                <tr>
                  <td>Hội viên Bạch kim</td>
                  <td>√ Mời 01 khách</td>
                  <td>√ Mời 01 khách</td>
                </tr>
                <tr>
                  <td>Hội viên Vàng</td>
                  <td>√</td>
                  <td>√</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="voucher-purchase">
          <div class="heading-strong">
            Mua Voucher sử dụng Phòng khách Bông Sen
          </div>
          <div class="frame-2">
            <p>
              Hành khách có thể mua voucher và tận hưởng các tiện ích của Phòng
              khách Bông Sen. Để trải nghiệm trọn vẹn hơn, hành khách lưu ý:
            </p>
            <ul>
              <li>
                Voucher chỉ áp dụng cho phòng khách tại sân bay Nội Bài (Hà
                Nội);
              </li>
              <li>
                Voucher có giá trị sử dụng trong vòng 06 tháng kể từ ngày xuất;
              </li>
              <li>Hành khách cần xuất trình mã voucher khi sử dụng dịch vụ.</li>
            </ul>
          </div>
        </section>

        <section id="documents">
          <div class="heading-strong">Giấy tờ cần chuẩn bị</div>
          <div class="frame-2">
            <p>
              Hành khách xuất trình giấy tờ tùy thân, thẻ lên tàu bay (boarding
              pass) và thẻ hội viên (nếu là hội viên Bông Sen Vàng hoặc SkyTeam)
              để vào phòng khách.
            </p>
          </div>
        </section>

        <section id="lounge-amenities">
          <div class="heading-strong">Tiện ích của phòng khách</div>
          <div class="frame-2">
            <ul>
              <li>
                <p>
                  Không gian chờ sang trọng, yên tĩnh và riêng tư để hành khách
                  thoải mái nghỉ ngơi trước giờ bay.
                </p>
              </li>
              <li>
                <p>
                  Tiện ích làm việc bao gồm bàn làm việc, máy tính nối mạng, ổ
                  cắm điện, wifi tốc độ cao, v.v..
                </p>
              </li>
              <li>
                <p>
                  Quầy ẩm thực với dịch vụ ăn uống buffet đa dạng và hấp dẫn.
                </p>
              </li>
              <li>
                <p>
                  Báo điện tử PressReader cung cấp 7.000 đầu báo, tạp chí điện
                  tử với hơn 60 ngôn ngữ đa thể loại.
                </p>
              </li>
              <li>
                <p>
                  Khu vực chuyên biệt bao gồm khu vực để hành lý, khu vực cho
                  phép hút thuốc, khu vực ghế massage, khu vực phòng tắm, v.v..
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="important-notes">
          <div class="heading-strong">Thông tin cần lưu ý</div>
          <div class="frame-2">
            <p>
              Dịch vụ Phòng khách Bông Sen/Phòng khách Thương gia không bao gồm
              các dịch vụ ưu tiên SkyPriority cũng như không bao gồm dịch vụ đưa
              đón hành khách ra máy bay.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(Phongkhachthuonggia);
