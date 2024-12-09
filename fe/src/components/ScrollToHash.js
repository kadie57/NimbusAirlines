import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ScrollToHash() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      // Nếu không phải trang hiện tại, chuyển về trang chủ trước
      if (location.pathname !== "/") {
        navigate("/");
      }

      // Đợi một chút để đảm bảo trang đã render
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start", // Cuộn để phần trên của element hiện ra
            inline: "nearest",
          });
        }
      }, 100); // Thêm delay nhỏ để đảm bảo navigation hoàn tất
    }
  }, [location, navigate]);

  return null;
}

export default ScrollToHash;
