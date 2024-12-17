import React, { useState, useEffect } from "react";

const FlightCardsAdmin = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);

  useEffect(() => {
    const fetchRandomFlights = async () => {
      try {
        const response = await fetch("http://54.200.166.229/flights");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const allFlights = await response.json();

        // Lấy ngẫu nhiên 8 chuyến bay
        const randomFlights = allFlights
          .sort(() => 0.5 - Math.random())
          .slice(0, 8);

        setFlights(randomFlights);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRandomFlights();
  }, []);

  const openFlightDetails = (flight) => {
    setSelectedFlight(flight);
  };

  const closeFlightDetails = () => {
    setSelectedFlight(null);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">Lỗi: {error}</p>
      </div>
    );
  }

  return (
    <div className="flight-cards-container">
      <h2>Flight List</h2>
      <div className="cards-grid">
        {flights.map((flight, index) => (
          <div
            key={index}
            className="flight-card"
            onClick={() => openFlightDetails(flight)}
          >
            <div className="flight-card-header">
              <div className="airline-name"></div>
              <span className="flight-number">{flight.flightNumber}</span>
            </div>

            <div className="flight-card-body">
              <div className="flight-detail">
                <i className="icon icon-time"></i>
                <div>{flight.departureTime}</div>
              </div>

              <div className="flight-detail">
                <i className="icon icon-calendar"></i>
                <span>{flight.departureDate}</span>
              </div>

              <div className="flight-detail">
                <i className="icon icon-location"></i>
                <span>
                  {flight.departure} → {flight.destination}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedFlight && (
        <div className="flight-details-modal" onClick={closeFlightDetails}>
          <div
            className="flight-details-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeFlightDetails}>
              ×
            </button>
            <div className="mini-title">Chi tiết chuyến bay</div>
            <div className="flight-details-grid">
              <div className="detail-item">
                <strong>Số chuyến bay:</strong> {selectedFlight.flightNumber}
              </div>
              <div className="detail-item">
                <strong>Hạng:</strong> {selectedFlight.class}
              </div>
              <div className="detail-item">
                <strong>Điểm khởi hành:</strong> {selectedFlight.departure}
              </div>
              <div className="detail-item">
                <strong>Điểm đến:</strong> {selectedFlight.destination}
              </div>
              <div className="detail-item">
                <strong>Ngày khởi hành:</strong> {selectedFlight.departureDate}
              </div>
              <div className="detail-item">
                <strong>Giờ khởi hành:</strong> {selectedFlight.departureTime}
              </div>
              {/* <div className="detail-item">
                <strong>Loại vé:</strong>{" "}
                {selectedFlight.returnDate === null ? "Một chiều" : "Khứ hồi"}
              </div> */}
              {/* {selectedFlight.returnDate && (
                <>
                  <div className="detail-item">
                    <strong>Giờ trở về:</strong> {selectedFlight.returnTime}
                  </div>
                </>
              )} */}
              {/* <div className="detail-item">
                <strong>Giá vé:</strong> {selectedFlight.price}$
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightCardsAdmin;
