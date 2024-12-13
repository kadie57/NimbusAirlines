import React, { useState } from "react";

function BookingModal({ isOpen, onClose, flight, onSubmit }) {
  const [username, setUsername] = useState("");
  const [passengerType, setPassengerType] = useState("adult");
  const [ticketClass, setTicketClass] = useState("Phổ thông");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tạo object thông tin đặt vé
    const bookingInfo = {
      username,
      flightNumber: flight.flightNumber,
      passengerType,
      ticketClass,
    };

    onSubmit(bookingInfo);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Đặt Vé Chuyến Bay</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Tên đăng nhập</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Số chuyến bay</label>
            <input type="text" value={flight.flightNumber} readOnly />
          </div>

          <div>
            <label>Loại hành khách</label>
            <select
              value={passengerType}
              onChange={(e) => setPassengerType(e.target.value)}
            >
              <option value="child-under-3">Trẻ em dưới 3 tuổi</option>
              <option value="child-over-3">Trẻ em trên 3 tuổi</option>
              <option value="adult">Người lớn</option>
            </select>
          </div>

          <div>
            <label>Hạng vé</label>
            <select
              value={ticketClass}
              onChange={(e) => setTicketClass(e.target.value)}
            >
              <option value="Phổ thông">Hạng phổ thông</option>
              <option value="Thương gia">Hạng thương gia</option>
              <option value="Nhất">Hạng nhất</option>
            </select>
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Hủy
            </button>
            <button type="submit">Xác nhận</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;
