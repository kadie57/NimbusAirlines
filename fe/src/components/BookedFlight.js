import React, { useState, useEffect } from "react";
import { useAuth } from "./Authentication"; // Điều chỉnh đường dẫn import nếu cần
import "../pages/user/dangnhap/bookedflight.scss";

function BookedFlights() {
  const { userInfo } = useAuth(); // Lấy thông tin người dùng từ AuthContext
  const [username, setUsername] = useState(userInfo || "");
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Thêm state loading

  // useEffect để tự động tải bookings khi component mount và có username
  useEffect(() => {
    if (username) {
      fetchBookings();
    }
  }, [username]);

  const fetchBookings = async () => {
    if (!username) {
      alert("Vui lòng đăng nhập");
      return;
    }

    setIsLoading(true); // Bắt đầu loading

    try {
      const response = await fetch(
        `http://54.200.166.229/bookings/${username}`,
        {
          method: "GET",
        }
      );

      const result = await response.json();
      if (result.error) {
        alert(result.error);
        setBookings([]);
      } else {
        setBookings(result);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      alert("Không thể tải thông tin đặt vé");
      setBookings([]);
    } finally {
      setIsLoading(false); // Kết thúc loading
    }
  };

  const handleCancelBooking = async (booking) => {
    if (!window.confirm("Bạn có chắc chắn muốn hủy đặt vé này?")) {
      return;
    }

    try {
      const response = await fetch("http://54.200.166.229/cancel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          booking_id: booking.booking_id,
          username: username,
          flightnumber: booking.flightnumber,
        }),
      });

      const result = await response.json();

      if (result.message) {
        alert(result.message);
        // Refresh bookings after successful cancellation
        fetchBookings();
      } else {
        alert(result.error || "Hủy vé thất bại");
      }
    } catch (error) {
      console.error("Error cancelling booking:", error);
      alert("Có lỗi xảy ra khi hủy vé");
    }
  };
  if (isLoading) {
    return (
      <div className="loading-container" style={{ textAlign: "center" }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="booked-flights-container">
      <div className="TitlePage">Tra Cứu Vé Đã Đặt</div>

      {isLoading ? (
        <p>Đang tải thông tin...</p>
      ) : bookings.length > 0 ? (
        <div className="bookings-list">
          {bookings.map((booking, index) => (
            <div key={index} className="booking-card">
              <div className="booking-details">
                <p>
                  <strong>ID:</strong> {booking.booking_id}
                </p>
                <p>
                  <strong>Số chuyến bay:</strong> {booking.flightnumber}
                </p>
                <p>
                  <strong>Điểm đi:</strong> {booking.departure}
                </p>
                <p>
                  <strong>Điểm đến:</strong> {booking.destination}
                </p>
                <p>
                  <strong>Thời gian bay:</strong> {booking.duration}
                </p>
                <p>
                  <strong>Số lượng vé:</strong> {booking.quantity}
                </p>
                <p>
                  <strong>Loại vé:</strong> {booking.type_name}
                </p>
                <p>
                  <strong>Hạng ghế:</strong> {booking.class_name}
                </p>
                <p>
                  <strong>Giá:</strong> {booking.price.toLocaleString()} VND
                </p>
                <p>
                  <strong>Thời gian đặt:</strong> {booking.booking_time}
                </p>
                <p>
                  <strong>Trạng thái: </strong> {booking.status}
                </p>
              </div>
              <div className="booking-actions">
                <button
                  onClick={() => handleCancelBooking(booking)}
                  className="cancel-booking-btn"
                >
                  Hủy Vé
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Không có vé đặt nào</p>
      )}
    </div>
  );
}

export default BookedFlights;
