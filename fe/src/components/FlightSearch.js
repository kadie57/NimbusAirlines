import React, { useState, useEffect } from "react";
import FlightResults from "./FlightResults";
import BookingModal from "./BookingModal";

function FlightSearch() {
  const [tripType, setTripType] = useState("one-way");
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [travelClass, setTravelClass] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flightsData, setFlightsData] = useState([]);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  // Trạng thái cho việc đặt vé khứ hồi
  const [outboundSelectedFlight, setOutboundSelectedFlight] = useState(null);
  const [inboundSelectedFlight, setInboundSelectedFlight] = useState(null);
  const [bookingStage, setBookingStage] = useState("initial"); // Các giai đoạn: 'initial', 'outbound', 'inbound', 'completed'

  // Fetch flights data from API
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://54.200.166.229/flights");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setFlightsData(data);

        // Initially show random flights
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setFilteredFlights(shuffled.slice(0, 5));

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching flights:", error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchFlights();
  }, []);

  const swapLocations = () => {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearchPerformed(true);

    // Reset booking stages for round trip
    if (tripType === "round-trip") {
      setBookingStage("outbound");
    }

    const filtered = flightsData.filter((flight) => {
      const searchDeparture = departure.toLowerCase().trim();
      const searchDestination = destination.toLowerCase().trim();

      const matchesDeparture =
        !searchDeparture || flight.departure.toLowerCase() === searchDeparture;

      const matchesDestination =
        !searchDestination ||
        flight.destination.toLowerCase() === searchDestination;

      const matchesDepartureDate =
        !departureDate || flight.departureDate === departureDate;

      // Kiểm tra chuyến bay một chiều hoặc khứ hồi
      // const matchesOneWayFlight = tripType === "one-way" && !flight.returnDate;
      // const matchesRoundTripFlight =
      //   tripType === "round-trip" &&
      //   (bookingStage === "outbound"
      //     ? !flight.returnDate
      //     : !!flight.returnDate);

      return (
        matchesDeparture && matchesDestination
        // matchesDepartureDate &&
        // (tripType === "one-way" ? matchesOneWayFlight : matchesRoundTripFlight)
      );
    });

    setFilteredFlights(filtered.length > 0 ? filtered : []);
  };

  const handleFlightSelect = (flight) => {
    if (tripType === "one-way") {
      // Logic đặt vé một chiều
      setSelectedFlight(flight);
      setIsBookingModalOpen(true);
    } else {
      if (bookingStage === "outbound") {
        // Lưu chuyến bay đi
        setOutboundSelectedFlight(flight);
        setBookingStage("inbound");

        // Tìm kiếm các chuyến bay về
        const inboundFlights = flightsData.filter(
          (f) =>
            f.departure === destination && // Điểm đi của chuyến bay về là điểm đến của chuyến bay đi
            f.destination === departure // Điểm đến của chuyến bay về là điểm đi của chuyến bay đi
          // f.departureDate > flight.departureDate // Ngày bay về sau ngày bay đi
        );

        // Nếu không tìm thấy chuyến bay về, hiển thị thông báo
        if (inboundFlights.length === 0) {
          window.alert("Không tìm thấy chuyến bay trở về phù hợp!");
          // Quay lại giai đoạn ban đầu
          setBookingStage("initial");
          return;
        }

        // Cập nhật danh sách chuyến bay để hiển thị các chuyến bay về
        setFilteredFlights(inboundFlights);
      } else if (bookingStage === "inbound") {
        // Lưu chuyến bay về
        setSelectedFlight(flight);
        setIsBookingModalOpen(true);
      }
    }
  };
  const handleBookingSubmit = (bookingInfo) => {
    // Xử lý logic đặt vé ở đây
    console.log("Thông tin đặt vé:", bookingInfo);
    // Có thể gửi thông tin đặt vé lên server
  };

  const resetBooking = () => {
    setBookingStage("initial");
    setOutboundSelectedFlight(null);
    setInboundSelectedFlight(null);
  };

  if (isLoading) {
    return (
      <div className="loading-container" style={{ width: "1205px" }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div>Lỗi: {error}</div>;
  }

  return (
    <div>
      <form className="flight-search" onSubmit={handleSearch}>
        <div className="form-group">
          <label>Kiểu vé</label>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
          >
            <option value="one-way">Một chiều</option>
            <option value="round-trip">Khứ hồi</option>
          </select>
        </div>

        <div className="form-group">
          <label>Xuất phát từ</label>
          <input
            type="text"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            placeholder="Nhập điểm đi"
          />
        </div>

        <button
          type="button"
          className="swap-button"
          onClick={swapLocations}
          // style={{ backgroundColor: "white" }}
        ></button>

        <div className="form-group">
          <label>Bay đến</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Nhập điểm đến"
          />
        </div>

        <div className="form-group">
          <label>Ngày khởi hành</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>

        {tripType === "round-trip" && (
          <div className="form-group">
            <label>Ngày trở về</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              style={{ opacity: tripType === "one-way" ? 0.5 : 1 }}
            />
          </div>
        )}

        <button type="submit">Tìm kiếm</button>
      </form>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        flight={selectedFlight}
        onSubmit={handleBookingSubmit}
      />

      <FlightResults
        flights={filteredFlights}
        isSearchPerformed={isSearchPerformed}
        tripType={tripType}
        bookingStage={bookingStage}
        onFlightSelect={handleFlightSelect}
      />
    </div>
  );
}

export default FlightSearch;
