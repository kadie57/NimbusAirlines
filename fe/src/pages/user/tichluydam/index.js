import { memo } from "react";
import "./tichluy.css";
const Tichluydam = () => {
  return (
    <>
      <img src="img\Banner_2.png" class="luggage-banner" alt="Hành lý" />
      <div class="tich-luy-content">
        <div class="TitlePage">Tích lũy dặm trên chuyến bay</div>
        <p>
          QAirline mang đến chương trình tích lũy dặm bay vô cùng hấp dẫn cho
          tất cả hành khách, không phân biệt hạng vé, từ hạng phổ thông đến hạng
          thương gia. Đây là cơ hội để bạn tận dụng những chuyến bay của mình để
          nhận những ưu đãi tuyệt vời, đồng thời nâng cao trải nghiệm bay trong
          tương lai.
        </p>
        <section id="miles-accumulation">
          <div class="heading-strong">
            <i class="fas fa-plane-departure"></i>Chương Trình Tích Lũy Dặm
          </div>
          <div class="frame-3">
            <p>
              Tích lũy dặm trên mỗi chuyến bay của QAirline giúp bạn nhận được
              nhiều ưu đãi và đặc quyền. Chương trình này áp dụng cho tất cả các
              hành khách từ các hạng vé phổ thông đến hạng thương gia.
            </p>
            <ul>
              <li>
                <strong>Hành trình quốc tế:</strong> Tích lũy 1 dặm cho mỗi km
                bay.
              </li>
              <li>
                <strong>Hành trình nội địa:</strong> Tích lũy 1 dặm cho mỗi 1,5
                km bay.
              </li>
              <li>
                <strong>Chương trình đặc biệt:</strong> Tích lũy dặm nhanh chóng
                cho các chuyến bay Tết và các dịp lễ.
              </li>
            </ul>
          </div>
        </section>

        <section id="redeeming-miles">
          <div class="heading-strong">
            <i class="fas fa-gift"></i>Cách Đổi Dặm Lấy Quà
          </div>
          <div class="frame-3">
            <p>
              Các dặm bạn tích lũy có thể được sử dụng để đổi lấy hàng loạt ưu
              đãi và phần quà hấp dẫn, mang lại giá trị vượt trội cho mỗi chuyến
              bay của bạn:
            </p>
            <ul>
              <li>
                Vé máy bay miễn phí: Đổi dặm lấy vé máy bay miễn phí cho các
                chuyến bay nội địa và quốc tế.
              </li>
              <li>
                Upgrade hạng vé: Đổi dặm để nâng hạng vé lên Business Class hoặc
                First Class, tận hưởng các dịch vụ cao cấp và sự thoải mái tối
                đa trong suốt hành trình.
              </li>
              <li>
                Voucher mua sắm và dịch vụ khách sạn: Dặm tích lũy còn có thể
                được đổi thành các voucher mua sắm, dịch vụ khách sạn, hoặc
                nhiều ưu đãi hấp dẫn khác.
              </li>
              <li>
                Quà tặng đặc biệt: Đổi dặm để nhận các món quà tặng sang trọng
                và hữu ích, bao gồm đồ dùng hàng không, phụ kiện du lịch cao cấp
                và nhiều phần quà khác.
              </li>
            </ul>
          </div>
        </section>

        <section id="special-promotion">
          <div class="heading-strong">
            <i class="fas fa-bolt"></i>Khuyến Mãi Đặc Biệt
          </div>
          <div class="frame-3">
            <p>
              <strong>Đừng bỏ lỡ cơ hội</strong> tham gia{" "}
              <strong>chương trình khuyến mãi Tết 2025,</strong> trong đó bạn sẽ
              nhận được dặm thưởng gấp đôi cho tất cả các chuyến bay trong dịp
              Tết. Đây là cơ hội tuyệt vời để bạn tích lũy thêm dặm và đổi lấy
              những phần quà giá trị cho chuyến bay sắp tới.
            </p>

            <p>
              Để tham gia chương trình tích lũy dặm và đổi quà, bạn chỉ cần đăng
              ký trở thành hội viên của chương trình khách hàng thân thiết của
              QAirline. Sau đó, bạn sẽ tự động nhận dặm khi đặt vé và bay với
              QAirline. Đặc biệt, bạn có thể theo dõi số dặm của mình qua ứng
              dụng di động hoặc website chính thức của QAirline, dễ dàng kiểm
              tra và quản lý dặm tích lũy của mình.
            </p>
          </div>
          <br />

          <p>
            <em>
              Hãy tận dụng ngay hôm nay để tích lũy dặm và nhận những ưu đãi hấp
              dẫn từ QAirline, nâng cao trải nghiệm bay và biến mỗi chuyến đi
              của bạn trở thành một hành trình đầy thú vị!
            </em>
          </p>
        </section>
      </div>
    </>
  );
};

export default memo(Tichluydam);
