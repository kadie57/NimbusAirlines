import { memo } from "react";
import "./style.scss";

const tttructuyen = () => {
  return (
    <>
      <div class="luggage-banner-wrapper">
        <img src="img\Banner_2.png" class="luggage-banner" alt="Hành lý" />
      </div>
      <div class="content">
        <div class="TitlePage">Làm thủ tục trực tuyến</div>

        <nav>
          <ul>
            <li>
              <p>
                <a href="#item1">Phạm vi áp dụng</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#item2">Hướng dẫn làm thủ tục trực tuyến</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#item3">Thời gian làm thủ tục trực tuyến</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#item4">Lưu ý quan trọng khi làm thủ tục trực tuyến</a>
              </p>
            </li>
          </ul>
        </nav>

        <section id="item1">
          <div class="heading-strong">Phạm vi áp dụng </div>
          <div class="frame-1">
            <p>
              Hình thức làm thủ tục trực tuyến được áp dụng cho các chuyến bay
              nội địa và quốc tế do QAirline khai thác, bao gồm cả các hãng
              thuộc tập đoàn như Pacific Airlines và Vasco.
            </p>
          </div>
        </section>

        <section id="item2">
          <div class="heading-strong" id="item2">
            Hướng dẫn làm thủ tục trực tuyến
          </div>

          <div class="frame-2">
            <p>
              Hành khách có thể dễ dàng hoàn tất thủ tục thông qua website hoặc
              ứng dụng di động của QAirline. Sau khi hoàn tất, thẻ lên tàu có
              thể được lưu dưới dạng PDF hoặc Passbook trên thiết bị di động để
              tiện xuất trình tại sân bay.
            </p>
            <p class="sau-khi-l-m-th-t-c">
              Để biết thêm thông tin chi tiết, hành khách vui lòng tham khảo
              hướng dẫn làm thủ tục trực tuyến trên website chính thức của
              QAirline.
            </p>
          </div>
        </section>

        <section id="item3">
          {" "}
          <div class="heading-strong">Thời gian làm thủ tục trực tuyến</div>
          <div class="frame-3">
            <p>
              Thời gian mở hệ thống làm thủ tục trực tuyến bắt đầu từ 24 giờ và
              kết thúc 1 giờ trước giờ khởi hành dự kiến của chuyến bay.
            </p>

            <p>Quy trình tại sân bay:</p>
            <strong>Đối với chuyến bay nội địa:</strong>
            <ul>
              <li>
                <p>
                  Không có hành lý ký gửi: Hành khách có thể đi thẳng đến khu
                  vực an ninh soi chiếu, xuất trình giấy tờ tùy thân và thẻ lên
                  tàu lưu trên thiết bị di động.
                </p>
              </li>
              <li>
                <p>
                  Có hành lý ký gửi: Hành khách cần đến quầy làm thủ tục tại sân
                  bay để gửi hành lý, đồng thời xuất trình giấy tờ tùy thân và
                  thẻ lên tàu đã lưu.
                </p>
              </li>
            </ul>
            <p>
              {" "}
              <strong>Đối với chuyến bay quốc tế:</strong>
              <ul>
                <li>
                  <p>
                    Bất kể có hành lý ký gửi hay không, hành khách đều phải đến
                    quầy làm thủ tục tại sân bay để kiểm tra giấy tờ tùy thân và
                    in thẻ lên tàu.
                  </p>
                </li>
                <li>
                  <p>
                    Hành khách nên có mặt tại quầy làm thủ tục trước giờ đóng
                    quầy theo quy định của sân bay.
                  </p>
                </li>
              </ul>
            </p>
          </div>
          <div class="heading-strong" id="item5">
            Lưu ý quan trọng khi làm thủ tục trực tuyến
          </div>
          <div class="frame-3">
            <p>
              <strong>1.Địa điểm áp dụng:</strong>
            </p>
            <p>
              Hình thức làm thủ tục trực tuyến chỉ được chấp nhận tại một số sân
              bay nội địa và quốc tế.{" "}
            </p>
            <p>
              Hành khách vui lòng kiểm tra danh sách các sân bay hỗ trợ. Nếu sân
              bay khởi hành chưa áp dụng làm thủ tục trực tuyến, hành khách có
              thể sử dụng kiosk tự động hoặc làm thủ tục tại quầy.
            </p>
            <p>
              <strong>
                2.Các trường hợp không áp dụng làm thủ tục trực tuyến:
              </strong>
            </p>

            <ul>
              <li>
                <p>
                  Hành khách yêu cầu các dịch vụ đặc biệt (ngoại trừ dịch vụ
                  suất ăn đặc biệt).
                </p>
              </li>
              <li>
                <p>Hành khách đi cùng trẻ nhỏ dưới 2 tuổi.</p>
              </li>
              <li>
                <p>
                  Hành khách trên chuyến bay do hãng khác khai thác (ngoại trừ
                  các hãng thuộc QAirline như Pacific Airlines và Vasco).
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Quy định số lượng hành khách làm thủ tục trực tuyến:
                  </strong>
                </p>
                <ul>
                  <li>
                    <p>
                      Mỗi lần làm thủ tục trực tuyến, tối đa 9 hành khách trong
                      cùng một mã đặt chỗ có thể thực hiện.
                    </p>
                  </li>
                  <li>
                    <p>
                      Nếu mã đặt chỗ có nhiều hơn 9 hành khách, cần chia làm
                      nhiều lần để hoàn tất thủ tục cho tất cả.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <strong>Thay đổi sau khi làm thủ tục trực tuyến:</strong>
                </p>
                <ul>
                  <li>
                    <p>
                      Nếu đã hoàn tất thủ tục trực tuyến nhưng cần thay đổi kế
                      hoạch bay, hành khách có thể tự hủy check-in qua mục Quản
                      lý đặt chỗ.
                    </p>
                  </li>
                  <li>
                    <p>
                      Hành khách cũng có thể liên hệ Trung tâm Chăm sóc Khách
                      hàng qua số điện thoại 19001100 hoặc email{" "}
                      <a href="mailto:onlinesupport@qairline.com">
                        onlinesupport@qairline.com
                      </a>
                      .
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <strong>Vé điện tử khác mã trên cùng hành trình:</strong>
                </p>
                <ul>
                  <li>
                    <p>
                      Trong trường hợp hành trình có nhiều vé điện tử không nằm
                      chung mã đặt chỗ, hành khách cần thực hiện thủ tục trực
                      tiếp tại sân bay.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(tttructuyen);
