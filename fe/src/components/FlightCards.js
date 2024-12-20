import React, { useState, useEffect } from "react";
import { FaClock, FaCalendarAlt, FaPlane } from "react-icons/fa";

const FlightCards = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);

  // Array of background images
  const backgroundImages = [
    "./img/denys-nevozhai-guNIjIuUcgY-unsplash.jpg",
    "./img/massimiliano-donghi-JXsxH2shRgY-unsplash.jpg",
    "/img/ian-dooley-hpTH5b6mo2s-unsplash.jpg",
    "./img/annie-spratt-3bh3elC0D7M-unsplash.jpg",
  ];

  useEffect(() => {
    const fetchRandomFlights = async () => {
      try {
        const response = await fetch("http://54.200.166.229/flights");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const allFlights = await response.json();

        // Lấy ngẫu nhiên 4 chuyến bay
        const randomFlights = allFlights
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);

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
      <div className="title">Chuyến đi phổ biến</div>
      <div className="cards-grid">
        {flights.map((flight, index) => (
          <div
            key={index}
            className="flight-card"
            onClick={() => openFlightDetails(flight)}
            style={{
              backgroundImage: `url(${
                backgroundImages[index % backgroundImages.length]
              })`,
            }}
          >
            <div className="flight-card-header">
              <div className="flight-detail">
                <span style={{ fontSize: "16px" }}>Từ</span>
                <br />
                {flight.departure}
                <br />
                <span style={{ fontSize: "16px" }}>đến </span> <br />
                {flight.destination}
              </div>
            </div>

            <div className="flight-card-body">
              <div className="flight-detail">
                <div>
                  <FaClock /> {flight.departureTime}
                </div>
              </div>

              <div className="flight-detail">
                <div>
                  <FaCalendarAlt /> {flight.departureDate}
                </div>
              </div>

              <div className="flight-detail">
                <div className="flight-price">
                  <FaPlane />
                  {"       "}
                  {flight.returnDate === null ? "Một chiều" : "Khứ hồi"}
                </div>
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
              {selectedFlight.returnDate && (
                <>
                  <div className="detail-item">
                    <strong>Ngày trở về:</strong> {selectedFlight.returnDate}
                  </div>
                  <div className="detail-item">
                    <strong>Giờ trở về:</strong> {selectedFlight.returnTime}
                  </div>
                </>
              )}
              <div className="detail-item">
                <strong>Giá vé:</strong> {selectedFlight.price}$
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightCards;
