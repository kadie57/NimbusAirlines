import { memo } from "react";
import { ROUTERS } from "../../../../utils/router";

const Hanhlydacbiet = () => {
  return (
    <>
      {" "}
      <div class="luggage-banner-wrapper">
        <img src="img\Banner_2.png" class="luggage-banner" alt="Hành lý" />
      </div>
      <div class="content">
        <div class="TitlePage">Hành lý đặc biệt</div>

        <nav>
          <ul>
            <li>
              <a href="#special-baggage">Hành lý đặc biệt</a>
            </li>
            <li>
              <a href="#notes">Một Số Lưu Ý Khi Mang Theo Hành Lý Đặc Biệt</a>
            </li>
            <li>
              <a href="#support">Thông Tin Hỗ Trợ</a>
            </li>
          </ul>
        </nav>

        <section id="special-baggage">
          <div class="heading-strong">Hành Lý Đặc Biệt</div>
          <div class="frame-3">
            <p>
              Hành lý đặc biệt được tính ngoài tiêu chuẩn Hành lý ký gửi miễn
              cước (trừ những trường hợp cụ thể). Hành khách tham khảo quy định
              và mức phí hành lý đặc biệt theo các danh mục dưới đây hoặc sử
              dụng tính năng Tra cứu hành lý.
            </p>

            <ul>
              <li>
                <p>Dụng cụ thể thao</p>
              </li>
              <li>
                <p>Xe nôi trẻ em, xe lăn của hành khách</p>
              </li>
              <li>
                <p>Hành lý cồng kềnh và xe đạp</p>
              </li>
              <li>
                <p>Hành lý đặc biệt đặt trên ghế hành khách</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="notes">
          <div class="heading-strong">
            Một Số Lưu Ý Khi Mang Theo Hành Lý Đặc Biệt
          </div>
          <div class="frame-3">
            <ul>
              <li>
                <p>
                  Hành khách cần tìm hiểu các quy định của nhà chức trách tại
                  các sân bay liên quan trong hành trình để đảm bảo có đầy đủ
                  giấy tờ cần thiết đối với hành lý của mình.
                </p>
              </li>
              <li>
                <p>
                  Chính sách thu phí Hành lý đặc biệt chỉ áp dụng trên các
                  chuyến bay do QAirline khai thác.
                </p>
              </li>
              <li>
                <p>
                  Trường hợp hành trình có chặng bay do hãng khác khai thác,
                  hành lý đặc biệt cần được hãng khai thác chấp thuận vận chuyển
                  trên chặng bay đó.
                </p>
              </li>
              <li>
                <p>
                  Đối với hành trình giữa châu Mỹ và điểm khác, chính sách phí
                  Hành lý đặc biệt chỉ áp dụng trên phần hành trình do QAirline
                  khai thác, phần hành trình còn lại áp dụng theo chính sách của
                  hãng khai thác.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="support">
          <div class="heading-strong">Thông Tin Hỗ Trợ</div>
          <div class="frame-3">
            <p>
              Để được tư vấn về hành lý đặc biệt, hành khách vui lòng liên hệ
              một trong các kênh sau:
            </p>
            <ul>
              <li>
                <p>Tổng đài Chăm sóc khách hàng:</p>
                <ul>
                  <li>
                    <p>Gọi trong lãnh thổ Việt Nam: 1900 1100</p>
                  </li>
                  <li>
                    <p>Gọi từ nước ngoài về Việt Nam: (+84-24) 38320320</p>
                  </li>
                </ul>
              </li>
              <li>
                <p>Liên hệ với Văn phòng chi nhánh.</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(Hanhlydacbiet);
