import React, { useState, useEffect } from "react";

function BookingModal({ isOpen, onClose, flight, onSubmit }) {
  const [username, setUsername] = useState("");
  const [ticketClass, setTicketClass] = useState("Phổ thông");
  const [passengerCounts, setPassengerCounts] = useState({
    childUnder3: 0,
    childOver3: 0,
    adult: 0,
  });
  const [ticketPrices, setTicketPrices] = useState({
    childUnder3: 0,
    childOver3: 0,
    adult: 0,
  });
  const [totalPrice, setTotalPrice] = useState(0);

  // Mapping between UI and API values
  const passengerTypeMap = {
    childUnder3: { id: 1, label: "Trẻ em dưới 3 tuổi" },
    childOver3: { id: 2, label: "Trẻ em trên 3 tuổi" },
    adult: { id: 3, label: "Người lớn" },
  };

  const ticketClassMap = {
    "Phổ thông": "1",
    "Thương gia": "2",
    Nhất: "3",
  };

  // Fetch ticket price for a specific passenger type
  const fetchTicketPrice = async (passengerType, quantity) => {
    if (quantity === 0) return 0;

    try {
      const response = await fetch("http://54.200.166.229/price", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          flightnumber: flight.flightNumber,
          ticket_type_id: passengerTypeMap[passengerType].id,
          seat_class_id: ticketClassMap[ticketClass],
          quantity: quantity,
        }),
      });
      const result = await response.json();
      return parseFloat(result.totalPrice);
    } catch (error) {
      console.error("Error fetching price:", error);
      return 0;
    }
  };

  // Recalculate prices when relevant values change
  useEffect(() => {
    const calculatePrices = async () => {
      if (!flight || !flight.flightNumber) return;

      const newPrices = {
        childUnder3: await fetchTicketPrice(
          "childUnder3",
          passengerCounts.childUnder3
        ),
        childOver3: await fetchTicketPrice(
          "childOver3",
          passengerCounts.childOver3
        ),
        adult: await fetchTicketPrice("adult", passengerCounts.adult),
      };

      setTicketPrices(newPrices);

      // Calculate total price
      const total =
        newPrices.childUnder3 + newPrices.childOver3 + newPrices.adult;
      setTotalPrice(total);
    };

    calculatePrices();
  }, [passengerCounts, ticketClass, flight]);

  const handlePassengerCountChange = (type, value) => {
    setPassengerCounts((prev) => ({
      ...prev,
      [type]: Math.max(0, Number(value)),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate at least one passenger is selected
    if (
      passengerCounts.childUnder3 +
        passengerCounts.childOver3 +
        passengerCounts.adult ===
      0
    ) {
      alert("Vui lòng chọn ít nhất một hành khách");
      return;
    }

    // Booking for each passenger type
    const bookingPromises = [];

    const passengerTypes = [
      { type: "childUnder3", id: 1 },
      { type: "childOver3", id: 2 },
      { type: "adult", id: 3 },
    ];

    for (const { type, id } of passengerTypes) {
      if (passengerCounts[type] > 0) {
        bookingPromises.push(
          fetch("http://54.200.166.229/book", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              flightnumber: flight.flightNumber,
              ticket_type_id: id,
              seat_class_id: ticketClassMap[ticketClass],
              numberoftickets: passengerCounts[type],
            }),
          })
        );
      }
    }

    try {
      const responses = await Promise.all(bookingPromises);
      const results = await Promise.all(responses.map((res) => res.json()));

      // Check for any errors
      const errorResponse = results.find((result) => !result.message);
      if (errorResponse) {
        alert(errorResponse.error || "Đặt vé thất bại");
        return;
      }

      // Prepare booking info to pass back to parent component
      const bookingInfo = {
        username,
        flightNumber: flight.flightNumber,
        passengerTypes: {
          childUnder3: {
            count: passengerCounts.childUnder3,
            price: ticketPrices.childUnder3,
          },
          childOver3: {
            count: passengerCounts.childOver3,
            price: ticketPrices.childOver3,
          },
          adult: {
            count: passengerCounts.adult,
            price: ticketPrices.adult,
          },
        },
        ticketClass,
        totalPrice,
      };

      onSubmit(bookingInfo);
      onClose();
    } catch (error) {
      console.error("Booking error:", error);
      alert("Có lỗi xảy ra khi đặt vé");
    }
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
          <div className="ticket-prices">
            <div>
              <label>Trẻ em dưới 3 tuổi</label>
              <input
                type="number"
                min="0"
                value={passengerCounts.childUnder3}
                onChange={(e) =>
                  handlePassengerCountChange("childUnder3", e.target.value)
                }
              />
              <span>Giá: {ticketPrices.childUnder3.toLocaleString()} VND</span>
            </div>

            <div>
              <label>Trẻ em trên 3 tuổi</label>
              <input
                type="number"
                min="0"
                value={passengerCounts.childOver3}
                onChange={(e) =>
                  handlePassengerCountChange("childOver3", e.target.value)
                }
              />
              <span>Giá: {ticketPrices.childOver3.toLocaleString()} VND</span>
            </div>

            <div>
              <label>Người lớn</label>
              <input
                type="number"
                min="0"
                value={passengerCounts.adult}
                onChange={(e) =>
                  handlePassengerCountChange("adult", e.target.value)
                }
              />
              <span>Giá: {ticketPrices.adult.toLocaleString()} VND</span>
            </div>
          </div>
          <div>
            <strong>Tổng giá: {totalPrice.toLocaleString()} VND</strong>
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
