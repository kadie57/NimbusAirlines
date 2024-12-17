import React, { useState, useEffect } from "react";
import "./FlightManage.css";

const FlightManagement = () => {
  // State for flights and form inputs
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);
  const [showAllFlights, setShowAllFlights] = useState(false);
  const [addFlightForm, setAddFlightForm] = useState({
    flightNumber: "",
    departure: "",
    destination: "",
    departureDate: "",
    departureTime: "",
    returnDate: "",
    returnTime: "",
    price: "",
    distance: "",
    duration: "",
    status: "",
  });

  const [modifyFlightForm, setModifyFlightForm] = useState({
    flightNumber: "",
    departure: "",
    destination: "",
    departureDate: "",
    departureTime: "",
    returnDate: "",
    returnTime: "",
    price: "",
    distance: "",
    duration: "",
    status: "",
  });

  const [deleteFlightForm, setDeleteFlightForm] = useState({
    flightNumber: "",
  });

  // Fetch flights
  const fetchFlights = async () => {
    try {
      const response = await fetch("http://54.200.166.229/flights");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFlights(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching flights:", error);
      setError("Failed to load flights. Please try again later.");
    }
  };

  // Add flight handler
  const handleAddFlight = async () => {
    try {
      const flightData = {
        flightnumber: addFlightForm.flightNumber,
        departure: addFlightForm.departure,
        destination: addFlightForm.destination,
        departuredate: addFlightForm.departureDate,
        departuretime: addFlightForm.departureTime,
        returndate: addFlightForm.returnDate,
        returntime: addFlightForm.returnTime,
        price: parseFloat(addFlightForm.price),
        distance: parseFloat(addFlightForm.distance),
        duration: addFlightForm.duration,
        status: addFlightForm.status,
      };

      const response = await fetch("http://54.200.166.229/add_flight", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(flightData),
      });

      const result = await response.json();

      if (result.error) {
        alert(result.error);
      } else {
        alert(result.message || "Flight added successfully");
        // Reset form
        setAddFlightForm({
          flightNumber: "",
          departure: "",
          destination: "",
          departureDate: "",
          departureTime: "",
          returnDate: "",
          returnTime: "",
          price: "",
          distance: "",
          duration: "",
          status: "",
        });
        fetchFlights();
      }
    } catch (error) {
      console.error("Error adding flight:", error);
      alert("Failed to add flight. Please try again.");
    }
  };

  // Modify flight handler
  const handleModifyFlight = async () => {
    try {
      const flightData = {
        departure: modifyFlightForm.departure,
        destination: modifyFlightForm.destination,
        departuredate: modifyFlightForm.departureDate,
        departuretime: modifyFlightForm.departureTime,
        returndate: modifyFlightForm.returnDate,
        returntime: modifyFlightForm.returnTime,
        price: parseFloat(modifyFlightForm.price),
        distance: parseFloat(modifyFlightForm.distance),
        duration: modifyFlightForm.duration,
        status: modifyFlightForm.status,
      };

      const response = await fetch(
        `http://54.200.166.229/modify_flight/${modifyFlightForm.flightNumber}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(flightData),
        }
      );

      const result = await response.json();

      if (result.error) {
        alert(result.error);
      } else {
        alert(result.message || "Flight modified successfully");
        // Reset form
        setModifyFlightForm({
          flightNumber: "",
          departure: "",
          destination: "",
          departureDate: "",
          departureTime: "",
          returnDate: "",
          returnTime: "",
          price: "",
          distance: "",
          duration: "",
          status: "",
        });
        fetchFlights();
      }
    } catch (error) {
      console.error("Error modifying flight:", error);
      alert("Failed to modify flight. Please try again.");
    }
  };

  // Delete flight handler
  const handleDeleteFlight = async () => {
    try {
      const response = await fetch("http://54.200.166.229/delete_flight", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          flightnumber: deleteFlightForm.flightNumber,
        }),
      });

      const result = await response.json();

      if (result.error) {
        alert(result.error);
      } else {
        alert(result.message || "Flight deleted successfully");
        // Reset form
        setDeleteFlightForm({ flightNumber: "" });
        fetchFlights();
      }
    } catch (error) {
      console.error("Error deleting flight:", error);
      alert("Failed to delete flight. Please try again.");
    }
  };

  // Fetch flights on component mount
  useEffect(() => {
    fetchFlights();
  }, []);
  const toggleShowAllFlights = () => {
    setShowAllFlights(!showAllFlights);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddFlightForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleModifyInputChange = (e) => {
    const { name, value } = e.target;
    setModifyFlightForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="flight-management">
      {/* Flight List */}
      <div className="flight-management-content">
        <h2>Danh sách chuyến bay</h2>
        <div className="flight-list-grid">
          {(showAllFlights ? flights : flights.slice(0, 6)).map(
            (flight, index) => (
              <div key={index} className="flight-card">
                <div className="flight-card-header">
                  <span className="flight-number">{flight.flightNumber}</span>
                  <span className="flight-status">{flight.status}</span>
                </div>

                <div className="flight-card-body">
                  <div className="flight-route">
                    <span className="departure">{flight.departure}</span>
                    <span className="arrow">→</span>
                    <span className="destination">{flight.destination}</span>
                  </div>
                  <div className="flight-details">
                    <div className="detail-item">
                      <span className="label">Ngày khởi hành:</span>
                      <span className="value">{flight.departureDate}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Giờ khởi hành:</span>
                      <span className="value">{flight.departureTime}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Quãng đường:</span>
                      <span className="value">{flight.distance}km</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Thời gian dự kiến:</span>
                      <span className="value">{flight.duration}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Giá vé:</span>
                      <span className="value">
                        {flight.price.toLocaleString()} VNĐ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {flights.length > 6 && (
          <button onClick={toggleShowAllFlights} className="view-all-button">
            {showAllFlights
              ? "Thu gọn"
              : `Xem tất cả (${flights.length} chuyến bay)`}
          </button>
        )}
      </div>
      {/* /* Add Flight */}
      <div className="flight-management-content add-flight-section">
        <h2>Thêm Chuyến Bay Mới</h2>
        <em>
          *Thêm máy bay chịu trách nhiệm vận hành trước khi thêm chuyến bay
        </em>
        <br />
        <br />
        <form
          className="add-flight-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddFlight();
          }}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="flightNumber">Chuyến bay số:</label>
              <input
                type="text"
                id="flightNumber"
                name="flightNumber"
                value={addFlightForm.flightNumber}
                onChange={handleInputChange}
                placeholder="Nhập số chuyến bay"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Giá vé (VNĐ):</label>
              <input
                type="number"
                id="price"
                name="price"
                value={addFlightForm.price}
                onChange={handleInputChange}
                placeholder="Nhập giá vé"
                min="0"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Trạng thái</label>
              <input
                type="text"
                id="status"
                name="status"
                value={addFlightForm.status}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="departure">Điểm đi:</label>
              <input
                type="text"
                id="departure"
                name="departure"
                value={addFlightForm.departure}
                onChange={handleInputChange}
                placeholder="Nhập điểm khởi hành"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="destination">Điểm đến:</label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={addFlightForm.destination}
                onChange={handleInputChange}
                placeholder="Nhập điểm đến"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="distance">Khoảng cách (km):</label>
              <input
                type="number"
                id="distance"
                name="distance"
                value={addFlightForm.distance}
                onChange={handleInputChange}
                placeholder="Nhập khoảng cách"
                min="0"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="departureDate">Ngày khởi hành:</label>
              <input
                type="date"
                id="departureDate"
                name="departureDate"
                value={addFlightForm.departureDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="departureTime">Giờ khởi hành:</label>
              <input
                type="time"
                id="departureTime"
                name="departureTime"
                value={addFlightForm.departureTime}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Thời gian bay:</label>
              <input
                type="time"
                id="duration"
                name="duration"
                value={addFlightForm.duration}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-add-flight">
              Thêm Chuyến Bay
            </button>
            <button
              type="reset"
              className="btn-reset"
              onClick={() =>
                setAddFlightForm({
                  flightNumber: "",
                  departure: "",
                  destination: "",
                  departureDate: "",
                  departureTime: "",
                  returnDate: "",
                  returnTime: "",
                  price: "",
                  distance: "",
                  duration: "",
                })
              }
            >
              Đặt Lại
            </button>
          </div>
        </form>
      </div>
      {/* Modify Flight */}
      <div className="flight-management-content add-flight-section">
        <h2>Sửa Chuyến Bay</h2>
        <form
          className="add-flight-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleModifyFlight();
          }}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="flightNumber">Chuyến bay số:</label>
              <input
                type="text"
                id="flightNumber"
                name="flightNumber"
                value={modifyFlightForm.flightNumber}
                onChange={(e) =>
                  setModifyFlightForm({
                    ...modifyFlightForm,
                    flightNumber: e.target.value,
                  })
                }
                placeholder="Nhập số chuyến bay"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Giá vé (VNĐ):</label>
              <input
                type="number"
                id="price"
                name="price"
                value={modifyFlightForm.price}
                onChange={handleModifyInputChange}
                placeholder="Nhập giá vé"
                min="0"
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Trạng thái:</label>
              <input
                type="text"
                id="status"
                name="status"
                value={modifyFlightForm.status}
                onChange={handleModifyInputChange}
                placeholder="Nhập trạng thái"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="departure">Điểm đi:</label>
              <input
                type="text"
                id="departure"
                name="departure"
                value={modifyFlightForm.departure}
                onChange={handleModifyInputChange}
                placeholder="Nhập điểm khởi hành"
              />
            </div>
            <div className="form-group">
              <label htmlFor="destination">Điểm đến:</label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={modifyFlightForm.destination}
                onChange={handleModifyInputChange}
                placeholder="Nhập điểm đến"
              />
            </div>
            <div className="form-group">
              <label htmlFor="distance">Khoảng cách (km):</label>
              <input
                type="number"
                id="distance"
                name="distance"
                value={modifyFlightForm.distance}
                onChange={handleModifyInputChange}
                placeholder="Nhập khoảng cách"
                min="0"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="departureDate">Ngày khởi hành:</label>
              <input
                type="date"
                id="departureDate"
                name="departureDate"
                value={modifyFlightForm.departureDate}
                onChange={handleModifyInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="departureTime">Giờ khởi hành:</label>
              <input
                type="time"
                id="departureTime"
                name="departureTime"
                value={modifyFlightForm.departureTime}
                onChange={handleModifyInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Thời gian bay:</label>
              <input
                type="time"
                id="duration"
                name="duration"
                value={modifyFlightForm.duration}
                onChange={handleModifyInputChange}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-add-flight">
              Sửa Chuyến Bay
            </button>
            <button
              type="reset"
              className="btn-reset"
              onClick={() =>
                setModifyFlightForm({
                  flightNumber: "",
                  departure: "",
                  destination: "",
                  departureDate: "",
                  departureTime: "",
                  returnDate: "",
                  returnTime: "",
                  price: "",
                  distance: "",
                  duration: "",
                  status: "",
                })
              }
            >
              Đặt Lại
            </button>
          </div>
        </form>
      </div>

      {/* Delete Flight */}
      <div className="flight-management-content add-flight-section">
        <h2>Xóa Chuyến Bay</h2>
        <form
          className="add-flight-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleDeleteFlight();
          }}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="deleteFlightNumber">Chuyến bay số:</label>
              <input
                type="text"
                id="deleteFlightNumber"
                name="flightNumber"
                value={deleteFlightForm.flightNumber}
                onChange={(e) =>
                  setDeleteFlightForm({ flightNumber: e.target.value })
                }
                placeholder="Nhập số chuyến bay để xóa"
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-add-flight btn-danger">
              Xóa Chuyến Bay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlightManagement;
