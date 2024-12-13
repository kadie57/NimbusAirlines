import React from "react";

function FlightResults({
  flights,
  isSearchPerformed,
  tripType,
  bookingStage,
  onFlightSelect,
}) {
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>{getTitle()}</h2>
      </div>

      <div className="result-count">{flights.length} chuyến bay</div>

      {flights.length === 0 && isSearchPerformed ? (
        <div
          style={{
            textAlign: "center",
            color: "#666",
            padding: "20px",
            backgroundColor: "#f4f4f4",
            borderRadius: "5px",
          }}
        >
          Không tìm thấy chuyến bay phù hợp
        </div>
      ) : (
        <div id="flight-list">
          {flights.map((flight, index) => (
            <div key={flight.id || index} className="result-box">
              <div>
                <h3>{flight.flightNumber}</h3>
                <p>
                  {flight.departure} → {flight.destination}
                </p>
                <p>Thời gian bay: {flight.duration}</p>
                <p>Ngày khởi hành: {flight.departureDate}</p>
                <p>Giờ khởi hành: {flight.departureTime}</p>
                {/* {flight.returnDate && <p>Ngày về: {flight.returnDate}</p>} */}
                {/* <p>Hạng: {flight.class}</p> */}
                {/* <p>Giá: {flight.price.toLocaleString()} VND</p> */}
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <button
                  className="buy-ticket-button"
                  onClick={() => onFlightSelect(flight)}
                >
                  Chọn chuyến bay
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FlightResults;
