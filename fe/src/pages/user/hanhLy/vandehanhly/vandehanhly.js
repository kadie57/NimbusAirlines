import { memo } from "react";
import "./style.scss";
import { ROUTERS } from "../../../../utils/router";
import Headermini from "../../theme/thongtin";
const Vandehanhly = () => {
  return (
    <>
      <Headermini />
      <div class="content">
        <div class="TitlePage">Gặp vấn đề với hành lý</div>
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
              <a href="#item1">
                Hành lý đến chậm, thất lạc, mất mát hoặc hư hỏng{" "}
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="#item1.1">Hướng dẫn khiếu nại </a>{" "}
                </li>
                <li>
                  <a href="#item1.2">Xử lí khiếu nại </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#item2">Hành lý bị bỏ quên</a>
            </li>
            <ul>
              <li>
                <a href="#item2.1">Hành lý bị bỏ quên trên máy bay </a>
              </li>
              <li>
                <a href="#item2.2">Hành lý ký gửi không có người nhận</a>
              </li>
              <li>
                <a href="#item2.3">Thông tin liên hệ khi bỏ quên hành lý</a>
              </li>
            </ul>
          </ul>
        </nav>

        <section id="item1">
          <div class="heading-strong">
            Hành lý đến chậm, thất lạc, mất mát hoặc hư hỏng{" "}
          </div>

          <div class="text-wrapper" id="item1.1">
            Hướng dẫn khiếu nại
          </div>
          <div class="frame-1">
            <p>
              Ngay khi phát hiện các vấn đề bất thường liên quan đến hành lý như
              đến chậm, thất lạc, mất mát hoặc hư hỏng, QAirline khuyến nghị
              hành khách thực hiện các bước sau:
            </p>

            <ul>
              <li>
                <p>
                  <span class="text-wrapper">Bước 1: </span>
                  Liên hệ ngay với nhân viên QAirline tại quầy hành lý thất lạc
                  tại sân bay đến để lập biên bản bất thường về hành lý (PIR).
                  <br />
                </p>
              </li>
              <li>
                <p>
                  <span class="text-wrapper">Bước 2: </span>
                  <span class="span">
                    Trong trường hợp hành lý bị thất lạc, sau khi hoàn tất khai
                    báo tại quầy, hành khách có thể truy cập hệ thống
                    <span class="text-wrapper-9"> WorldTracer </span>
                    để theo dõi tình trạng hành lý và bổ sung thông tin địa chỉ
                    nhận hành lý.
                    <br />
                  </span>
                </p>
              </li>
            </ul>
            <p class="text">
              <span class="span">
                Nếu cần bổ sung thông tin về hành lý bất thường, hành khách có
                thể làm theo quy trình sau:
                <br />
              </span>
            </p>
            <ul>
              <li>
                {" "}
                <p>
                  {" "}
                  <span class="text-wrapper">Bước 1: </span>
                  <span class="span">
                    {" "}
                    Xác minh thời hạn bổ sung thông tin như sau:
                    <br />
                  </span>
                </p>
              </li>
              <ul>
                <li>
                  <p class="text">
                    <span class="span">
                      Trong vòng 07 ngày kể từ ngày nhận hành lý, đối với trường
                      hợp hư hỏng hoặc mất mát.
                      <br />
                    </span>
                  </p>
                </li>
                <li>
                  <p class="text">
                    <span class="span">
                      Trong vòng 21 ngày kể từ ngày nhận hành lý, đối với trường
                      hợp đến chậm.
                      <br />
                    </span>
                  </p>
                </li>
              </ul>
              <li>
                <p class="text">
                  <span class="text-wrapper">Bước 2: </span>
                  <span class="span">
                    {" "}
                    Hoàn thiện Mẫu khai báo hành lý bất thường.
                    <br />
                  </span>
                </p>
              </li>

              <li>
                <p class="text">
                  <span class="text-wrapper">Bước 3: </span>
                  <span class="span">
                    Gửi mẫu khai báo đến quầy hành lý thất lạc tại sân bay hoặc
                    gửi email hỗ trợ tới customer-service@qairline.com.
                    <br />
                  </span>
                </p>
              </li>
            </ul>

            <p class="text">
              <span class="text-wrapper">
                Lưu ý:
                <br />
              </span>
            </p>
            <p class="text">
              <span class="span">
                - Biên bản bất thường (PIR) là tài liệu cần thiết để xác nhận
                vấn đề với hành lý và là cơ sở để QAirline xem xét bồi thường.
                <br />
              </span>
            </p>
            <p class="text" />
            <span class="span">
              - QAirline không chịu trách nhiệm đối với các trường hợp hư hỏng
              nằm trong danh mục miễn trừ trách nhiệm của hành lý ký gửi. Vui
              lòng xem chi tiết chính sách của hãng.
            </span>
          </div>
        </section>

        <section id="item2">
          <div class="heading-strong" id="item1.2">
            Xử lý khiếu nại
          </div>

          <div class="frame-2">
            <p class="text-wrapper-1">
              Sau khi tiếp nhận đầy đủ thông tin, QAirline sẽ triển khai các
              biện pháp sau để giải quyết vấn đề:
            </p>
            <p class="sau-khi-l-m-th-t-c">
              1.Xác minh thông tin chi tiết về hành lý bất thường do hành khách
              cung cấp
            </p>
            <p class="sau-khi-l-m-th-t-c">
              2.Tiến hành tìm kiếm hành lý thông qua hệ thống toàn cầu
              WorldTracer.
            </p>

            <p class="sau-khi-l-m-th-t-c">
              3.Nếu hành lý được tìm thấy, QAirline sẽ liên hệ để thống nhất
              phương án trả lại hành lý (thời gian, địa điểm, hình thức).
            </p>
            <p class="sau-khi-l-m-th-t-c">
              4.Trong trường hợp không tìm được hành lý sau 21 ngày kể từ ngày
              nhận thông báo, QAirline sẽ thực hiện bồi thường theo mức giới hạn
              trách nhiệm đã được quy định trong Điều lệ vận chuyển.
            </p>
          </div>
        </section>
        <hr />
        <section id="item3">
          {" "}
          <div class="heading-strong">Hành lý bị bỏ quên</div>
          <div class="text-wrapper" id="item2.1">
            Hành lý bị bỏ quên trên máy bay{" "}
          </div>
          <div class="frame-3">
            <p>
              Nếu hành khách để quên đồ dùng cá nhân trên máy bay, QAirline sẽ
              lưu giữ tài sản tại sân bay đến. Hành khách có thể liên hệ với
              QAirline để nhận thông tin chi tiết về tài sản bị bỏ quên
            </p>
          </div>
          <div class="text-wrapper" id="item2.2">
            Hành lý ký gửi không có người nhận
          </div>
          <div class="frame-3">
            <p>
              Đối với hành lý ký gửi không được nhận, QAirline sẽ lưu giữ trong
              vòng 90 ngày và có thể áp dụng phí bảo quản. Sau thời hạn này,
              hãng có quyền xử lý hành lý theo chính sách hiện hành.
            </p>
          </div>
          <div class="text-wrapper" id="item2.3">
            Thông tin liên hệ khi bỏ quên hành lý
          </div>
          <div class="frame-3">
            <ul>
              <li>
                <p>
                  <strong>Trung tâm hỗ trợ khách hàng:</strong> Liên hệ qua số
                  điện thoại 01234567 hoặc email{" "}
                  <a href="mailto:customer-service@qairline.com">
                    customer-service@qairline.com
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  <strong>Quầy hành lý thất lạc:</strong> Đến quầy hành lý thất
                  lạc tại sân bay để thông báo và được hỗ trợ.
                </p>
              </li>
              <li>
                <p>
                  <strong>Hệ thống trực tuyến:</strong> Truy cập{" "}
                  <a href="http://www.qairline.com" target="_blank">
                    www.qairline.com
                  </a>{" "}
                  để báo cáo hành lý thất lạc hoặc theo dõi tình trạng
                </p>
              </li>
              <li>
                <p>
                  <strong>Mẫu báo cáo:</strong> Điền mẫu báo cáo và gửi về email{" "}
                  <a href="mailto:customer-service@qairline.com">
                    customer-service@qairline.com
                  </a>
                  .
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(Vandehanhly);
