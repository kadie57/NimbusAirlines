import { memo } from "react";
import "./style.scss";
import Headermini from "../../theme/thongtin";
const tttructiep = () => {
  return (
    <>
      <Headermini />
      <div class="content">
        <div class="TitlePage">Làm thủ tục tại sân bay</div>
        <div class="luggage-banner-wrapper">
          <img
            src="img\Luggage_banner 1.png"
            class="luggage-banner"
            alt="Hành lý"
          />
        </div>

        <p>
          QAirline cam kết vận chuyển hành lý đến điểm đến một cách an toàn và
          thuận tiện nhất cho hành khách. Tuy nhiên, nếu gặp phải các vấn đề như
          hành lý chậm trễ, thất lạc, hư hỏng hoặc bị bỏ quên, hành khách vui
          lòng thông báo ngay tại sân bay đến để được hỗ trợ kịp thời.
        </p>

        <nav>
          <ul>
            <li>
              <a href="#item1">Giấy tờ cần chuẩn bị</a>
            </li>
            <li>
              <a href="#item2">Hướng dẫn làm thủ tục</a>
            </li>
            <li>
              <a href="#item3">Làm thủ tục trên chuyến bay thương mại</a>
            </li>
            <li>
              <a href="#item4">Thời gian làm thủ tục trên sân bay</a>
            </li>
            <li>
              <a href="#item4">Một số lưu ý khi làm thủ tục</a>
            </li>
          </ul>
        </nav>

        <section id="item1">
          <div class="heading-strong">
            Giấy tờ cần chuẩn bị trước khi làm thủ tục tại sân bay
          </div>
          <div class="frame-1">
            <p class="text-wrapper-1">
              Hành khách lưu ý chuẩn bị vé và giấy tờ tùy thân trước khi đến
              quầy làm thủ tục tại sân bay. Để biết thêm quy định giấy tờ tùy
              thân
            </p>
          </div>
        </section>

        <section id="item2">
          <div class="heading-strong">Hướng dẫn làm thủ tục tại sân bay</div>

          <div class="frame-2">
            <div class="text-wrapper">
              Bước 1: Làm thủ tục tại quầy của Vietnam Airlines
            </div>
            <p class="text-wrapper-1">
              Hành khách tra cứu thông tin quầy làm thủ tục trên các bảng điện
              tử tại sân bay; sau đó, đến quầy làm thủ tục của QAirlines và xuất
              trình vé máy bay cùng giấy tờ tùy thân. Nhân viên làm thủ tục sẽ
              kiểm tra thông tin trên vé, in thẻ lên máy bay (boarding pass),
              làm thủ tục ký gửi hành lý (nếu có) và hướng dẫn các thông tin cần
              lưu ý như số cửa ra tàu bay, thời gian có mặt tại cửa, v.v.
            </p>

            <div class="text-wrapper">
              Bước 2: Làm thủ tục xuất/nhập cảnh và kiểm tra an ninh
            </div>
            <p class="sau-khi-l-m-th-t-c">
              Sau khi làm thủ tục xuất/nhập cảnh (chỉ áp dụng cho chuyến bay
              quốc tế), hành khách sẽ được kiểm tra soi chiếu hành lý xách tay
              và các vật phẩm mang theo người như đồng hồ, thắt lưng, ba lô, túi
              xách, v.v. Vui lòng tham khảo thêm hành lý hạn chế vận chuyển và
              vận chuyển có điều kiện.
            </p>

            <div class="text-wrapper">Bước 3: Di chuyển đến cửa ra tàu bay</div>
            <p class="h-nh-kh-ch-di-chuy-n">
              Hành khách di chuyển đến cửa ra tàu bay. Sau khi được kiểm tra thẻ
              lên tàu (boarding pass) và giấy tờ tùy thân, hành khách lên máy
              bay và tìm đúng số ghế ghi trên boarding pass.
            </p>
          </div>
        </section>

        <section id="item3">
          {" "}
          <div class="heading-strong">
            Làm thủ tục trên chuyến bay hợp tác thương mại
          </div>
          <div class="frame-3">
            <p>
              Thời gian làm thủ tục tại sân bay khác nhau giữa các chuyến bay
              nội địa và quốc tế do QAirlines khai thác như sau:
              <ul class="text-wrapper-1">
                <li>
                  <p>
                    Đối với chuyến bay nội địa, thời gian làm thủ tục tại sân
                    bay bắt đầu từ 2 giờ cho đến 40 phút trước thời gian khởi
                    hành dự kiến
                  </p>
                </li>
                <li>
                  <p>
                    Đối với chuyến bay quốc tế, thời gian làm thủ tục tại sân
                    bay bắt đầu từ 3 giờ cho đến 50 phút trước thời gian khởi
                    hành dự kiến.
                  </p>
                </li>
              </ul>
              <p>
                Quầy làm thủ tục cho các chuyến bay của QAirlines tại sân bay
                Kuala Lumpur (KUL), sân bay Charles de Gaulle (CDG), sân bay
                Frankfurt (FRA), sân bay Heathrow (LHR) và sân bay San Francisco
                (SFO) sẽ đóng cửa 60 phút trước giờ khởi hành.
              </p>
            </p>
          </div>
        </section>

        <section id="item4">
          <div class="heading-strong">Thời gian làm thủ tục tại sân bay</div>

          <div class="frame-4">
            <p>
              Nếu hành khách mua vé máy bay theo hình thức hợp tác giữa
              QAirlines và hãng hàng không khác, trong đó hãng hàng không khác
              là hãng khai thác chuyến bay, hành khách lưu ý làm thủ tục tại
              quầy của hãng khai thác.
            </p>
            <p>
              Trong trường hợp này, để biết chính xác thời gian mở và đóng quầy
              làm thủ tục, hành khách kiểm tra kỹ thông tin trên vé và trang web
              của hãng khai thác.
            </p>
          </div>
        </section>

        <section id="item5">
          <div class="heading-strong">
            Một số lưu ý khi làm thủ tục tại sân bay
          </div>
          <div class="frame-5">
            <p>
              Khi chuyến bay thay đổi kế hoạch, thời gian mở và đóng quầy làm
              thủ tục sẽ được điều chỉnh phù hợp với giờ bay mới.
            </p>
            <p>
              Hành khách lưu ý thu xếp thời gian có mặt tại sân bay để đảm bảo
              hoàn thành các thủ tục cho chuyến bay đúng giờ.{" "}
            </p>
            <p>
              {" "}
              Vietnam Airlines không chấp nhận vận chuyển hành khách sau thời
              điểm đóng quầy làm thủ tục.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(tttructiep);
