import { memo } from "react";
import { ROUTERS } from "../../../../utils/router";

const Hanhlykygui = () => {
  return (
    <>
      <div class="content">
        <div class="TitlePage">Hành lý ký gửi</div>
        <div class="luggage-banner-wrapper">
          <img
            src="img\Luggage_banner 1.png"
            class="luggage-banner"
            alt="Hành lý"
          />
        </div>

        <nav>
          <ul>
            <li>
              <p>
                <a href="#checked-baggage">Hành Lý Ký Gửi Miễn Cước</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#baggage-allowance">
                  Quy Định Hành Lý Ký Gửi Miễn Cước Theo Hành Trình
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#exceptions">Các Trường Hợp Ngoại Lệ</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#frequent-flyer-baggage">
                  Hành Lý Ký Gửi Miễn Cước Cho Hội Viên
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#checked-baggage-for-children">
                  Hành Lý Ký Gửi Cho Trẻ Em
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#special-baggage">Hành Lý Đặc Biệt Khác</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#restricted-items">Vật Phẩm Hạn Chế Vận Chuyển</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#support-info">Thông Tin Hỗ Trợ</a>
              </p>
            </li>
          </ul>
        </nav>

        <section id="checked-baggage">
          <div class="heading-strong">Hành Lý Ký Gửi Miễn Cước Là Gì?</div>
          <div class="frame-3">
            <p>
              Hành lý ký gửi miễn cước là vali, túi xách hoặc kiện hàng được vận
              chuyển trong khoang hành lý riêng của tàu bay và không cần trả
              phí. Hành khách có thể Mua thêm hành lý ký gửi nếu có nhu cầu mang
              theo hành lý vượt mức miễn cước quy định.
            </p>
            <p>
              Nếu đã mua vé, hành khách có thể truy cập mục Quản lý đặt chỗ để
              tra cứu tiêu chuẩn hành lý được hưởng.
            </p>
          </div>
        </section>

        <section id="baggage-allowance">
          <div class="heading-strong">
            Quy Định Hành Lý Ký Gửi Miễn Cước Theo Hành Trình
          </div>
          <div class="frame-3">
            <p>
              Hành lý ký gửi miễn cước trên các chuyến bay của QAirline cần đảm
              bảo kích thước và trọng lượng như sau:
            </p>
            <ul>
              <li>
                Tổng kích thước tối đa 3 chiều (dài x rộng x cao) của một kiện
                hành lý ký gửi không vượt quá 158cm.
              </li>
            </ul>
            <br />
            <img
              src="img/quy-dinh-hanh-ly-ky-gui-khi-di-may-bay-948-4.jpg"
              class="luggage"
              alt="Hành lý"
            />
            <br />
            <br />
            <p>
              <strong>Quy định kích thước hành lý ký gửi:</strong> Hành khách
              tham khảo trọng lượng và số lượng kiện hành lý ký gửi miễn cước
              cho mỗi người lớn và trẻ em từ 2 đến dưới 12 tuổi theo thông tin
              hành trình dưới đây hoặc sử dụng tính năng Tra cứu hành lý.
            </p>
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
          <br />
          <table class="baggage-table">
            <thead>
              <tr>
                <th>Hạng thẻ</th>
                <th>Gắn thẻ hành lý ưu tiên </th>
                <th>Hành lý ký gửi miễn cước cộng thêm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bạc</td>
                <td>Không có</td>
                <td>Không có</td>
              </tr>
              <tr>
                <td>Titan</td>
                <td>Có</td>
                <td>+ 01 kiện 23kg</td>
              </tr>
              <tr>
                <td>Vàng</td>
                <td>Có</td>
                <td>+ 01 kiện 23kg</td>
              </tr>
              <tr>
                <td>Hội viên triệu dặm/Bạch Kim</td>
                <td>Có</td>
                <td>+ 02 kiện, mỗi kiện 23kg</td>
              </tr>
              <tr>
                <td>Elite</td>
                <td>Không có</td>
                <td>+ 01 kiện 23kg</td>
              </tr>
              <tr>
                <td>Elite Plus</td>
                <td>Có</td>
                <td>+ 01 kiện 23kg</td>
              </tr>
            </tbody>
          </table>

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

export default memo(Hanhlykygui);
