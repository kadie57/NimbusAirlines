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
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 60; // Trừ đi 60px

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100); // Thêm delay nhỏ để đảm bảo navigation hoàn tất
    }
  }, [location, navigate]);

  return null;
}

export default ScrollToHash;
