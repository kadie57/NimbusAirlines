import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Dichvuuutien = () => {
  return (
    <>
      <div class="luggage-banner-wrapper">
        <img src="img\Banner_2.png" class="luggage-banner" alt="Hành lý" />
      </div>
      <div class="content">
        <div class="TitlePage">Dịch vụ ưu tiên</div>

        <p>
          Dịch vụ Ưu Tiên Hàng Không Cao Cấp là một đặc quyền được QAirline cung
          cấp tại các sân bay, mang lại trải nghiệm ưu việt và thuận tiện dành
          riêng cho những hành khách quan trọng. Với dịch vụ này, hành khách
          được tận hưởng quyền lợi ưu tiên xuyên suốt hành trình, từ khâu làm
          thủ tục, kiểm tra an ninh, lên máy bay đến nhận hành lý.
        </p>
        <nav>
          <ul>
            <li>
              <p>
                <a href="#item2">
                  Đối tượng áp dụng Dịch vụ Ưu Tiên Hàng Không Cao Cấp
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#item3">Quyền lợi nổi bật</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#item4">Lưu ý quan trọng</a>
              </p>
            </li>
          </ul>
        </nav>

        {/* </section> */}

        <section id="item2">
          <div class="heading-strong">
            Đối tượng áp dụng Dịch vụ Ưu Tiên Hàng Không Cao Cấp
          </div>
          <div class="frame-2">
            <ul>
              <li>
                <p>Dịch vụ này được thiết kế dành riêng cho:</p>
              </li>
              <li>
                <p>
                  Hội viên Bạch Kim, Vàng thuộc chương trình khách hàng thân
                  thiết của QAirline.
                </p>
              </li>
              <li>
                <p>Chủ sở hữu thẻ SkyTeam Elite Plus.</p>
              </li>
              <li>
                <p>
                  Hành khách đặt vé hạng Thương gia hoặc Phổ thông đặc biệt.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="item3">
          <div class="heading-strong">Quyền lợi nổi bật</div>
          <div class="frame-3">
            <ul>
              <li>
                <p>
                  <strong>Làm thủ tục ưu tiên:</strong> Sử dụng quầy thủ tục
                  riêng biệt, giúp hành khách tiết kiệm thời gian và tận hưởng
                  sự tiện nghi tối đa.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Ưu tiên tại khu vực an ninh và xuất nhập cảnh:
                  </strong>{" "}
                  Dịch vụ cung cấp lối đi riêng dành cho hành khách, hỗ trợ rút
                  ngắn thời gian chờ đợi và tạo sự thuận tiện trong mọi khâu
                  kiểm tra.
                </p>
              </li>
              <li>
                <p>
                  <strong>Ưu tiên lên máy bay:</strong> Hành khách được mời lên
                  máy bay đầu tiên, đảm bảo khởi đầu chuyến đi một cách thoải
                  mái và suôn sẻ.
                </p>
              </li>
              <li>
                <p>
                  <strong>Ưu tiên nhận hành lý:</strong> Hành lý ký gửi được gắn
                  thẻ ưu tiên và trả tại băng chuyền trong thời gian ngắn nhất,
                  đảm bảo sự tiện lợi tối đa cho hành khách.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="item4">
          <div class="heading-strong">Lưu ý quan trọng</div>
          <div class="frame-3">
            <ul>
              <li>
                <p>
                  Dịch vụ Ưu Tiên Hàng Không Cao Cấp chỉ được áp dụng tại các
                  sân bay thuộc mạng lưới của QAirline và các sân bay SkyTeam có
                  hỗ trợ dịch vụ.
                </p>
              </li>
              <li>
                <p>
                  Không áp dụng cho các chuyến bay khai thác bởi các hãng không
                  thuộc liên minh SkyTeam.
                </p>
              </li>
              <li>
                <p>
                  Quyền lợi này không thể chuyển nhượng và chỉ áp dụng cho hành
                  khách đã đặt chỗ hợp lệ.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(Dichvuuutien);
