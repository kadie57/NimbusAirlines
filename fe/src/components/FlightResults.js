// import React, { useState } from "react";

// function FlightResults({ flights, isSearchPerformed }) {
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [selectedFlight, setSelectedFlight] = useState(null);
//   // State to store ticket quantities for each flight
//   const [ticketQuantities, setTicketQuantities] = useState(
//     flights.reduce((acc, flight, index) => {
//       acc[index] = 0; // Thay đổi giá trị mặc định thành 0
//       return acc;
//     }, {})
//   );

//   const sortedFlights = [...flights].sort((a, b) => {
//     return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
//   });

//   const toggleSortOrder = () => {
//     setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//   };

//   const handleTicketQuantityChange = (index, quantity) => {
//     setTicketQuantities((prev) => ({
//       ...prev,
//       [index]: Math.max(1, Math.min(10, quantity)), // Cho phép giá trị 0
//     }));
//   };

//   const handleBuyTicket = (flight, index) => {
//     const quantity = ticketQuantities[index];

//     setSelectedFlight({
//       ...flight,
//       quantity: quantity,
//     });
//   };

//   const closeModal = () => {
//     setSelectedFlight(null);
//   };

//   return (
//     <div className="results">
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         {" "}
//         <h2>
//           {isSearchPerformed
//             ? "Kết quả tìm kiếm"
//             : "Các chuyến bay được đề xuất"}
//         </h2>
//         {flights.length > 0 && (
//           <button className="sortButton" onClick={toggleSortOrder}>
//             {sortOrder === "asc" ? "Giá ↑" : "Giá ↓"}
//           </button>
//         )}
//       </div>

//       <div className="result-count">{flights.length} chuyến bay</div>

//       {flights.length === 0 && isSearchPerformed ? (
//         <div
//           style={{
//             textAlign: "center",
//             color: "#666",
//             padding: "20px",
//             backgroundColor: "#f4f4f4",
//             borderRadius: "5px",
//           }}
//         >
//           Không tìm thấy chuyến bay phù hợp
//         </div>
//       ) : (
//         <div id="flight-list">
//           {sortedFlights.map((flight, index) => (
//             <div key={index} className="result-box">
//               <div>
//                 <h3>{flight.flightNumber}</h3>
//                 <p>
//                   {flight.departure} → {flight.destination}
//                 </p>
//                 <p>Ngày đi: {flight.departureDate}</p>
//                 {flight.returnDate && <p>Ngày về: {flight.returnDate}</p>}
//                 <p>Hạng: {flight.class}</p>
//                 <p>Giá: {flight.price.toLocaleString()} VND</p>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                 }}
//               >
//                 <input
//                   type="number"
//                   min="0"
//                   max="10"
//                   value={ticketQuantities[index]}
//                   onChange={(e) =>
//                     handleTicketQuantityChange(index, Number(e.target.value))
//                   }
//                   style={{
//                     width: "100px",
//                     padding: "5px",
//                     textAlign: "center",
//                   }}
//                 />
//                 <button
//                   className="buy-ticket-button"
//                   disabled={ticketQuantities[index] === 0}
//                   onClick={() => handleBuyTicket(flight, index)}
//                 >
//                   Mua vé
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Modal for ticket purchase confirmation */}
//       {selectedFlight && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h2>Đặt vé thành công</h2>
//             <div className="ticket-details">
//               <p>Đã đặt thành công {selectedFlight.quantity} vé</p>
//               <h3>Thông tin vé máy bay</h3>
//               <p>
//                 <strong>Mã chuyến bay:</strong> {selectedFlight.flightNumber}
//               </p>
//               <p>
//                 <strong>Tuyến bay:</strong> {selectedFlight.departure} →{" "}
//                 {selectedFlight.destination}
//               </p>
//               <p>
//                 <strong>Ngày đi:</strong> {selectedFlight.departureDate}
//               </p>
//               {selectedFlight.returnDate && (
//                 <p>
//                   <strong>Ngày về:</strong> {selectedFlight.returnDate}
//                 </p>
//               )}
//               <p>
//                 <strong>Hạng:</strong> {selectedFlight.class}
//               </p>
//               <p>
//                 <strong>Giá vé:</strong>{" "}
//                 {(
//                   selectedFlight.price * selectedFlight.quantity
//                 ).toLocaleString()}{" "}
//                 VND
//                 <span style={{ marginLeft: "10px", color: "#666" }}>
//                   ({selectedFlight.price.toLocaleString()} VND x{" "}
//                   {selectedFlight.quantity} vé)
//                 </span>
//               </p>
//             </div>
//             <button className="close-modal-button" onClick={closeModal}>
//               Đóng
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FlightResults;

import React, { useState, useEffect } from "react";

function FlightResults({ flights, isSearchPerformed, isLoading }) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [ticketQuantities, setTicketQuantities] = useState({});

  // Reset ticket quantities when flights change
  useEffect(() => {
    const initialQuantities = flights.reduce((acc, flight, index) => {
      acc[index] = 0;
      return acc;
    }, {});
    setTicketQuantities(initialQuantities);
  }, [flights]);

  const sortedFlights = [...flights].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handleTicketQuantityChange = (index, quantity) => {
    setTicketQuantities((prev) => ({
      ...prev,
      [index]: Math.max(0, Math.min(10, quantity)),
    }));
  };

  const handleBuyTicket = (flight, index) => {
    const quantity = ticketQuantities[index];

    setSelectedFlight({
      ...flight,
      quantity: quantity,
    });
  };

  const closeModal = () => {
    setSelectedFlight(null);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="loading">
        <p>Đang tìm kiếm chuyến bay...</p>
      </div>
    );
  }

  return (
    <div className="results">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>
          {isSearchPerformed
            ? "Kết quả tìm kiếm"
            : "Các chuyến bay được đề xuất"}
        </h2>
        {flights.length > 0 && (
          <button className="sortButton" onClick={toggleSortOrder}>
            {sortOrder === "asc" ? "Giá ↑" : "Giá ↓"}
          </button>
        )}
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
          {sortedFlights.map((flight, index) => (
            <div key={flight.id || index} className="result-box">
              <div>
                <h3>{flight.flightNumber}</h3>
                <p>
                  {flight.departure} → {flight.destination}
                </p>
                <p>Ngày đi: {flight.departureDate}</p>
                {flight.returnDate && <p>Ngày về: {flight.returnDate}</p>}
                <p>Hạng: {flight.class}</p>
                <p>Giá: {flight.price.toLocaleString()} VND</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {/* <input
                  type="number"
                  min="0"
                  max="10"
                  value={ticketQuantities[index]}
                  onChange={(e) =>
                    handleTicketQuantityChange(index, Number(e.target.value))
                  }
                  style={{
                    width: "100px",
                    padding: "5px",
                    textAlign: "center",
                  }}
                /> */}
                <button
                  className="buy-ticket-button"
                  disabled={ticketQuantities[index] === 0}
                  onClick={() => handleBuyTicket(flight, index)}
                >
                  Mua vé
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for ticket purchase confirmation */}
      {/* {selectedFlight && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Đặt vé thành công</h2>
            <div className="ticket-details">
              <p>Đã đặt thành công {selectedFlight.quantity} vé</p>
              <h3>Thông tin vé máy bay</h3>
              <p>
                <strong>Mã chuyến bay:</strong> {selectedFlight.flightNumber}
              </p>
              <p>
                <strong>Tuyến bay:</strong> {selectedFlight.departure} →{" "}
                {selectedFlight.destination}
              </p>
              <p>
                <strong>Ngày đi:</strong> {selectedFlight.departureDate}
              </p>
              {selectedFlight.returnDate && (
                <p>
                  <strong>Ngày về:</strong> {selectedFlight.returnDate}
                </p>
              )}
              <p>
                <strong>Hạng:</strong> {selectedFlight.class}
              </p>
              <p>
                <strong>Giá vé:</strong>{" "}
                {(
                  selectedFlight.price * selectedFlight.quantity
                ).toLocaleString()}{" "}
                VND
                <span style={{ marginLeft: "10px", color: "#666" }}>
                  ({selectedFlight.price.toLocaleString()} VND x{" "}
                  {selectedFlight.quantity} vé)
                </span>
              </p>
            </div>
            <button className="close-modal-button" onClick={closeModal}>
              Đóng
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default FlightResults;
