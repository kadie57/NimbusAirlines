import React from "react";
import { FaPlane } from "react-icons/fa";

function FlightResults({
  flights,
  isSearchPerformed,
  tripType,
  bookingStage,
  onFlightSelect,
}) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatTime = (timeStr) => {
    // Convert 24h format to 12h format
    const [hours, minutes] = timeStr.split(":");
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .toLowerCase();
  };

  const calculateArrivalTime = (departureTime) => {
    const [hours, minutes] = departureTime.split(":");
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    // Add 1 hour to departure time
    date.setHours(date.getHours() + 1);
    return date
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .toLowerCase();
  };

  const getTitle = () => {
    if (tripType === "one-way") {
      return "Các chuyến bay phù hợp";
    }

    switch (bookingStage) {
      case "outbound":
        return "Chọn chuyến bay đi";
      case "inbound":
        return "Chọn chuyến bay về";
      default:
        return "Các chuyến bay";
    }
  };

  return (
    <div className="results">
      <h2>{getTitle()}</h2>
      <div className="result-count">{flights.length} chuyến bay</div>

      {flights.length === 0 && isSearchPerformed ? (
        <div className="no-results">Không tìm thấy chuyến bay phù hợp</div>
      ) : (
        <div id="flight-list">
          {flights.map((flight, index) => (
            <div key={flight.id || index} className="flight-ticket">
              <div className="ticket-content">
                <div className="head-ticket">
                  <div className="flight-code">
                    <span>{flight.flightNumber}</span>
                    <span>{formatDate(flight.departureDate)}</span>
                  </div>

                  <div className="flight-time">
                    <div className="time-container">
                      <div className="departure-time">
                        {formatTime(flight.departureTime)}
                      </div>
                      <div className="flight-route">
                        <span className="route-city">{flight.departure}</span>
                        <FaPlane className="plane-icon" />
                        <span className="route-city">{flight.destination}</span>
                      </div>
                      <div className="arrival-time">
                        {calculateArrivalTime(flight.departureTime)}
                      </div>{" "}
                    </div>
                    <div className="duration">{flight.duration}</div>
                  </div>
                </div>
                <div className="ticket-price">
                  <div className="price">
                    {flight.price?.toLocaleString()} VND
                  </div>
                  <button
                    className="select-button"
                    onClick={() => onFlightSelect(flight)}
                  >
                    Chọn
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FlightResults;
