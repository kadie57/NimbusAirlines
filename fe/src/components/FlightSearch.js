// // chưa dùng API

// import React, { useState, useEffect } from "react";
// import FlightResults from "./FlightResults";
// import flightsData from "../data/flights.json";

// function FlightSearch() {
//   const [tripType, setTripType] = useState("one-way");
//   const [departure, setDeparture] = useState("");
//   const [destination, setDestination] = useState("");
//   const [travelClass, setTravelClass] = useState("");
//   const [departureDate, setDepartureDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const [filteredFlights, setFilteredFlights] = useState([]);
//   const [isSearchPerformed, setIsSearchPerformed] = useState(false);

//   // Function to get 5 random flights
//   const getRandomFlights = () => {
//     const shuffled = [...flightsData].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, 5);
//   };

//   // Initialize with random flights
//   useEffect(() => {
//     setFilteredFlights(getRandomFlights());
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setIsSearchPerformed(true);

//     const filtered = flightsData.filter((flight) => {
//       // Convert search inputs to lowercase for case-insensitive comparison
//       const searchDeparture = departure.toLowerCase().trim();
//       const searchDestination = destination.toLowerCase().trim();

//       // Convert flight details to lowercase for comparison
//       const matchesDeparture =
//         !searchDeparture || flight.departure.toLowerCase() === searchDeparture;

//       const matchesDestination =
//         !searchDestination ||
//         flight.destination.toLowerCase() === searchDestination;

//       const matchesClass = !travelClass || flight.class === travelClass;
//       const matchesDepartureDate =
//         !departureDate || flight.departureDate === departureDate;
//       const matchesReturnDate =
//         tripType === "round-trip"
//           ? !returnDate || flight.returnDate === returnDate
//           : true;

//       const matchesOneWayFlight = tripType === "one-way" && !flight.returnDate;

//       const matchesRoundTripFlight =
//         tripType === "round-trip" && flight.returnDate;

//       return (
//         matchesDeparture &&
//         matchesDestination &&
//         matchesClass &&
//         matchesDepartureDate &&
//         matchesReturnDate &&
//         (tripType === "one-way" ? matchesOneWayFlight : matchesRoundTripFlight)
//       );
//     });

//     setFilteredFlights(filtered.length > 0 ? filtered : []);
//   };

//   const swapLocations = () => {
//     const temp = departure;
//     setDeparture(destination);
//     setDestination(temp);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <div className="form-group">
//           <label>Kiểu vé</label>
//           <select
//             value={tripType}
//             onChange={(e) => setTripType(e.target.value)}
//           >
//             <option value="one-way">Một chiều</option>
//             <option value="round-trip">Khứ hồi</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Xuất phát từ</label>
//           <input
//             type="text"
//             value={departure}
//             onChange={(e) => setDeparture(e.target.value)}
//             placeholder="Nhập điểm đi"
//           />
//         </div>

//         <button type="button" className="swap-button" onClick={swapLocations} />

//         <div className="form-group">
//           <label>Bay đến</label>
//           <input
//             type="text"
//             value={destination}
//             onChange={(e) => setDestination(e.target.value)}
//             placeholder="Nhập điểm đến"
//           />
//         </div>

//         <div className="form-group">
//           <label>Hạng</label>
//           <select
//             value={travelClass}
//             onChange={(e) => setTravelClass(e.target.value)}
//           >
//             <option value="">Tất cả hạng</option>
//             <option value="Phổ thông">Hạng phổ thông</option>
//             <option value="Thương gia">Hạng thương gia</option>
//             <option value="Nhất">Hạng nhất</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Ngày rời</label>
//           <input
//             type="date"
//             value={departureDate}
//             onChange={(e) => setDepartureDate(e.target.value)}
//           />
//         </div>

//         {tripType === "round-trip" && (
//           <div className="form-group">
//             <label>Ngày trở về</label>
//             <input
//               type="date"
//               value={returnDate}
//               onChange={(e) => setReturnDate(e.target.value)}
//               style={{ opacity: tripType === "one-way" ? 0.5 : 1 }}
//             />
//           </div>
//         )}

//         <button type="submit">Tìm kiếm</button>
//       </form>

//       <FlightResults
//         flights={filteredFlights}
//         isSearchPerformed={isSearchPerformed}
//       />
//     </div>
//   );
// }

// export default FlightSearch;

// dùng API
import React, { useState, useEffect } from "react";
import FlightResults from "./FlightResults";

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

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearchPerformed(true);

    const filtered = flightsData.filter((flight) => {
      // Convert search inputs to lowercase for case-insensitive comparison
      const searchDeparture = departure.toLowerCase().trim();
      const searchDestination = destination.toLowerCase().trim();

      // Convert flight details to lowercase for comparison
      const matchesDeparture =
        !searchDeparture || flight.departure.toLowerCase() === searchDeparture;

      const matchesDestination =
        !searchDestination ||
        flight.destination.toLowerCase() === searchDestination;

      const matchesClass = !travelClass || flight.class === travelClass;
      const matchesDepartureDate =
        !departureDate || flight.departureDate === departureDate;
      const matchesReturnDate =
        tripType === "round-trip"
          ? !returnDate || flight.returnDate === returnDate
          : true;

      const matchesOneWayFlight = tripType === "one-way" && !flight.returnDate;

      const matchesRoundTripFlight =
        tripType === "round-trip" && flight.returnDate;

      return (
        matchesDeparture &&
        matchesDestination &&
        matchesClass &&
        matchesDepartureDate &&
        matchesReturnDate &&
        (tripType === "one-way" ? matchesOneWayFlight : matchesRoundTripFlight)
      );
    });

    setFilteredFlights(filtered.length > 0 ? filtered : []);
  };

  const swapLocations = () => {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  };

  if (isLoading) {
    return <div>Đang tải dữ liệu chuyến bay...</div>;
  }

  if (error) {
    return <div>Lỗi: {error}</div>;
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
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

        <button type="button" className="swap-button" onClick={swapLocations} />

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
          <label>Hạng</label>
          <select
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
          >
            <option value="">Tất cả hạng</option>
            <option value="Phổ thông">Hạng phổ thông</option>
            <option value="Thương gia">Hạng thương gia</option>
            <option value="Nhất">Hạng nhất</option>
          </select>
        </div>

        <div className="form-group">
          <label>Ngày rời</label>
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

      <FlightResults
        flights={filteredFlights}
        isSearchPerformed={isSearchPerformed}
      />
    </div>
  );
}

export default FlightSearch;
