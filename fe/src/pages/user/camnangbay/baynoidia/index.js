import { memo } from "react";
import "./style.scss";

const Baynoidia = () => {
  return (
    <>
      <div class="luggage-banner-wrapper">
        <img src="img\Banner_2.png" class="luggage-banner" alt="Hành lý" />
      </div>
      <div class="content">
        <div class="TitlePage">Chuyến bay nội địa Việt Nam</div>

        <p>
          Để có một hành trình thuận lợi, hành khách lưu ý chuẩn bị đầy đủ giấy
          tờ cần thiết khi thực hiện chuyến bay nội địa Việt Nam.
        </p>
        <nav>
          <ul>
            <li>
              <p>
                <a href="#item2">Vé máy bay</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#item3">Giấy tờ tùy thân</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#item4">Hành khách quốc tịch nước ngoài</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#item5">Hành khách quốc tịch Việt Nam</a>
              </p>
            </li>
          </ul>
        </nav>

        <section id="item2">
          <div class="heading-strong">Vé máy bay</div>
          <div class="frame-2">
            <p>
              Hành khách cần có vé máy bay hợp lệ để làm thủ tục tại sân bay. Vé
              máy bay có thể in trên giấy hoặc được lưu dưới dạng điện tử.
            </p>
            <p>
              Trường hợp sử dụng vé lưu dưới dạng điện tử, hành khách vui lòng
              xuất trình vé đã được gửi đến email hoặc lưu trong ứng dụng Ví
              (Wallet) của thiết bị iPhone.
            </p>
          </div>
        </section>
        <hr />
        <section id="item3">
          <div class="heading-strong">Giấy tờ tùy thân</div>
          <div class="frame-3">
            <p>
              Các giấy tờ tùy thân được liệt kê dưới đây phải là bản chính, có
              hình ảnh và còn giá trị sử dụng. Trường hợp sử dụng giấy khai sinh
              hoặc giấy chứng sinh thì giấy tờ đó có thể là bản chính hoặc bản
              sao có chứng thực theo quy định của pháp luật.
            </p>
          </div>
        </section>

        <section id="item4">
          <div class="heading-strong1">Hành khách quốc tịch nước ngoài</div>
          <div class="frame-3">
            <ul>
              <li>
                <p>
                  - Hộ chiếu (có dấu kiểm chứng nhập cảnh gần nhất) hoặc giấy tờ
                  có giá trị đi lại quốc tế (có dấu kiểm chứng nhập cảnh gần
                  nhất) và giấy tờ liên quan đến cư trú tại Việt Nam như thị
                  thực, thẻ thường trú, thẻ tạm trú, thẻ đi lại doanh nhân APEC
                  (trừ trường hợp miễn thị thực);
                </p>
              </li>
              <li>
                <p>
                  - Các loại chứng minh thư do Bộ Ngoại giao cấp cho thành viên
                  cơ quan đại diện ngoại giao, cơ quan lãnh sự, cơ quan đại diện
                  của tổ chức quốc tế;
                </p>
              </li>
              <li>
                <p>
                  - Giấy phép lái xe quốc tế hoặc giấy phép lái xe ô tô/mô tô do
                  cơ quan có thẩm quyền tại Việt Nam cấp;
                </p>
              </li>
              <li>
                <p>
                  - Các loại thẻ như thẻ kiểm soát an ninh cảng hàng không/sân
                  bay loại có giá trị sử dụng dài hạn, thẻ nhận dạng của các
                  hãng hàng không Việt Nam;
                </p>
              </li>
              <li>
                <p>- Tài khoản định danh điện tử mức độ 2 của hành khách.</p>
              </li>
            </ul>
            <p>
              <strong>Trường hợp hành khách mất hộ chiếu:</strong>
            </p>
            <ul>
              <li>
                <p>
                  - Hành khách phải có công hàm từ cơ quan ngoại giao/lãnh sự
                  của quốc gia mà hành khách mang quốc tịch hoặc công văn của sở
                  ngoại vụ (có xác nhận của cơ quan công an địa phương nơi hành
                  khách mất hộ chiếu). Công hàm/công văn cần xác nhận nhân thân
                  và việc mất hộ chiếu của hành khách;
                </p>
              </li>
              <li>
                <p>- Công hàm/công văn phải có dán ảnh và dấu giáp lai;</p>
              </li>
              <li>
                <p>
                  - Công hàm/công văn xác nhận nhân thân và việc mất hộ chiếu sẽ
                  có giá trị sử dụng 30 ngày kể từ ngày xác nhận.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="item5">
          <div class="heading-strong1">Hành khách quốc tịch Việt Nam</div>
          <div class="frame-3">
            <strong>
              Hành khách từ 14 tuổi trở lên cần mang theo một trong các giấy tờ
              hoặc dữ liệu điện tử có giá trị pháp lý tương đương như sau:
            </strong>
            <ul style={{ marginTop: "5px" }}>
              <li>
                <p>- Giấy chứng minh nhân dân, thẻ căn cước công dân;</p>
              </li>
              <li>
                <p>- Giấy chứng minh công an nhân dân, quân đội nhân dân;</p>
              </li>
              <li>
                <p>- Hộ chiếu hoặc giấy thông hành;</p>
              </li>
              <li>
                <p>- Thị thực rời, thẻ thường trú, thẻ tạm trú;</p>
              </li>
              <li>
                <p>
                  - Giấy phép lái xe ô tô/mô tô do cơ quan có thẩm quyền tại
                  Việt Nam cấp;
                </p>
              </li>
              <li>
                <p>
                  - Các loại thẻ như: Thẻ đại biểu Quốc hội, thẻ đảng viên, thẻ
                  nhà báo, thẻ của Ủy ban An ninh hàng không dân dụng quốc gia,
                  thẻ nhận dạng của các hãng hàng không Việt Nam, thẻ kiểm soát
                  an ninh cảng hàng không/sân bay có giá trị sử dụng dài hạn;
                </p>
              </li>
              <li>
                <p>
                  - Giấy xác nhận nhân thân do công an phường, xã nơi thường trú
                  hoặc tạm trú xác nhận và thể hiện các thông tin: Cơ quan xác
                  nhận, người xác nhận; ngày, tháng, năm xác nhận; họ và tên,
                  ngày tháng năm sinh, giới tính, quê quán, nơi thường trú của
                  người được xác nhận; lý do xác nhận. Các giấy xác nhận, chứng
                  nhận trên có dán ảnh, đóng dấu giáp lai và chỉ có giá trị
                  trong vòng 30 ngày kể từ ngày xác nhận, chứng nhận.
                </p>
              </li>
              <li>
                <p>
                  - Giấy chứng nhận của cơ quan thẩm quyền chứng nhận hành khách
                  là người vừa chấp hành xong bản án (nếu có);
                </p>
              </li>
              <li>
                <p>
                  - Tài khoản định danh điện tử mức độ 2 trên ứng dụng VNeID của
                  hành khách.
                </p>
              </li>
            </ul>
            <div style={{ marginTop: "30px" }}>
              <strong>
                Hành khách dưới 14 tuổi và từ đủ 14 tuổi đến trên 14 tuổi không
                quá 20 ngày cần mang theo một trong các giấy tờ hoặc dữ liệu
                điện tử có giá trị pháp lý tương đương như sau:
              </strong>
              <ul style={{ marginTop: "5px" }}>
                <li>
                  <p>- Thẻ căn cước công dân, chứng minh thư nhân dân;</p>
                </li>
                <li>
                  <p>- Hộ chiếu cá nhân hoặc kèm với hộ chiếu của cha mẹ;</p>
                </li>
                <li>
                  <p>
                    - Giấy khai sinh bản chính hoặc bản sao đã chứng thực và còn
                    thời hạn;
                  </p>
                </li>
                <li>
                  <p>
                    - Trường hợp dưới 02 tháng tuổi chưa có giấy khai sinh thì
                    phải có giấy chứng sinh;
                  </p>
                </li>
                <li>
                  <p>
                    - Trích lục giấy khai sinh (trích lục thông tin khai sinh);
                  </p>
                </li>
                <li>
                  <p>
                    - Trích lục hộ tịch hoặc văn bản xác nhận thông tin hộ tịch;
                  </p>
                </li>
                <li>
                  <p>
                    - Giấy xác nhận của tổ chức xã hội đối với trẻ em do tổ chức
                    xã hội đang nuôi dưỡng (chỉ có giá trị sử dụng trong thời
                    gian 06 tháng kể từ ngày xác nhận);
                  </p>
                </li>
                <li>
                  <p>
                    - Giấy xác nhận nhân thân do công an phường, xã nơi thường
                    trú hoặc tạm trú xác nhận và thể hiện các thông tin: Cơ quan
                    xác nhận, người xác nhận; ngày, tháng, năm xác nhận; họ và
                    tên, ngày tháng năm sinh, giới tính, quê quán, nơi thường
                    trú của người được xác nhận; lý do xác nhận. Các giấy xác
                    nhận, chứng nhận trên có dán ảnh, đóng dấu giáp lai và chỉ
                    có giá trị trong vòng 30 ngày kể từ ngày xác nhận, chứng
                    nhận.
                  </p>
                </li>
                <li>
                  <p>
                    - Tài khoản định danh điện tử mức độ 2 của hành khách; Nếu
                    chưa có tài khoản riêng thì xuất trình Tài khoản định danh
                    điện tử mức độ 2 của bố/mẹ/người giám hộ đi cùng, trong đó
                    thể hiện thông tin nhân thân của hành khách.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(Baynoidia);
