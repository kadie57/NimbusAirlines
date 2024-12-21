import { memo } from "react";
import "./amthuc.css";

const Amthucthuonggia = () => {
  return (
    <>
      <img src="img\Banner_2.png" class="luggage-banner" alt="Hành lý" />

      <div class="amthuc-content">
        <div class="TitlePage">Ẩm thực hạng thương gia </div>
        <section id="luxury-cuisine">
          <div class="frame-3">
            <p>
              Khi bạn bay hạng thương gia, không chỉ là về không gian và dịch
              vụ, mà còn là về ẩm thực đẳng cấp. Những món ăn tinh tế được chế
              biến từ nguyên liệu tươi ngon, đa dạng, mang đến cho bạn một trải
              nghiệm tuyệt vời ngay trên không trung.
            </p>
            <p>
              <strong>
                Trải nghiệm ẩm thực hạng thương gia của chúng tôi không chỉ dừng
                lại ở bữa ăn đơn giản, mà là những món ăn được chuẩn bị đặc biệt
                với sự chăm sóc từ đầu bếp tài ba, mang đến hương vị tuyệt vời
                trong từng món ăn.
              </strong>
            </p>
          </div>
        </section>

        <section id="food-gallery">
          <div class="heading-strong">
            <i class="fas fa-images"></i>Khám Phá Các Món Ăn Hạng Thương Gia
          </div>
          <div class="food-gallery">
            <div class="food-item">
              <img src="img/canh_ga_nuong.jpg" alt="Món ăn 1" />
              <div class="caption">Món Cánh Gà Nướng</div>
            </div>
            <div class="food-item">
              <img src="img/sup_hai_san.jpg" alt="Món ăn 2" />
              <div class="caption">Súp Hải Sản</div>
            </div>
            <div class="food-item">
              <img src="img/salat.jpg" alt="Món ăn 3" />
              <div class="caption">Salad Tươi Ngon</div>
            </div>
          </div>
          <div class="food-gallery">
            <div class="food-item">
              <img src="img/wellington_beef.jpg" alt="Món ăn 4" />
              <div class="caption">Bò Wellington</div>
            </div>
            <div class="food-item">
              <img src="img/tom_hum_nuong.jpg" alt="Món ăn 5" />
              <div class="caption">Tôm Hùm Nướng</div>
            </div>
            <div class="food-item">
              <img src="img/banh_mi.jpg" alt="Món ăn 6" />
              <div class="caption">Bánh Mì Pháp</div>
            </div>
          </div>
        </section>

        <section id="chef-special">
          <div class="heading-strong">
            <i class="fas fa-chef"></i>Đầu Bếp Tài Ba, Món Ăn Tuyệt Hảo
          </div>
          <div class="frame-3">
            <p>
              <strong>
                Được chuẩn bị bởi những đầu bếp hàng đầu, mỗi món ăn là một tác
                phẩm nghệ thuật, được trang trí tinh tế và chế biến tỉ mỉ. Không
                chỉ là sự kết hợp của các hương vị, mà còn là sự trình bày đẹp
                mắt và đẳng cấp.
              </strong>
            </p>
          </div>
        </section>

        <section class="special-meals">
          <div class="frame-container">
            <div class="frame-content">
              <p>
                Các lựa chọn suất ăn đặc biệt với rất nhiều phong phú lựa chọn
                ăn chay, ăn kiêng theo chỉ định của bác sĩ, ăn theo tôn
                giáo...để cho bạn sự đa dạng và lựa chọn tốt nhất cho sức khỏe.
              </p>
            </div>
            <div class="frame-image">
              <img
                src="img/997ea0b1-1b67-415a-9977-8253e7ecc728.jpg"
                alt="Hình ảnh suất ăn đặc biệt"
              />
            </div>
          </div>
        </section>

        <div class="frame-container">
          <div class="frame-image">
            <img
              src="img/RS_Cocktail_still_assets_1080x810_01.png"
              alt="Món ăn hạng thương gia"
            />
          </div>
          <div class="frame-content">
            <p>
              Các đầu bếp tại QAirline không ngừng sáng tạo, kết hợp các nguyên
              liệu cao cấp, từ hải sản tươi sống cho đến thịt bò Wagyu, tạo nên
              những bữa ăn không chỉ ngon miệng mà còn đẹp mắt. Bạn sẽ cảm nhận
              được sự chăm sóc tỉ mỉ trong từng chi tiết nhỏ nhất, từ cách bài
              trí cho đến hương vị độc đáo của mỗi món ăn.
            </p>
          </div>
        </div>

        <div class="frame-container">
          <div class="frame-content">
            <p>
              Đặc biệt, mỗi bữa ăn đều được lựa chọn và phục vụ tùy theo khẩu vị
              và yêu cầu của hành khách, từ các món ăn nhẹ đến các bữa ăn thịnh
              soạn.
            </p>
          </div>
          <div class="frame-image">
            <img
              src="img/TheSeafoodCafeRestaurant.jpg"
              alt="Món ăn hạng thương gia"
            />
          </div>
        </div>

        <p class="frame-3">
          <strong>
            <em>
              Đừng ngần ngại để QAirline mang đến cho bạn một chuyến bay đáng
              nhớ không chỉ về mặt dịch vụ, mà còn về ẩm thực thượng hạng, chắc
              chắn sẽ khiến chuyến đi của bạn trở nên thú vị và khác biệt
            </em>
          </strong>
          .
        </p>
      </div>
    </>
  );
};

export default memo(Amthucthuonggia);
