import React, { useState, useEffect } from "react";
import { useAuth } from "../../../components/Authentication"; // Adjust the import path as necessary

const PlaneManagement = () => {
  // State for planes and form inputs
  const [planes, setPlanes] = useState([]);
  const [showAllPlanes, setShowAllPlanes] = useState(false);
  const { getCredentials, userRole } = useAuth();

  // Add Plane Form State
  const [addPlaneForm, setAddPlaneForm] = useState({
    flightNumber: "",
    manufacturer: "",
    model: "",
    year: "",
    details: "",
    maxSeats: "",
    maxEco: "",
    maxBus: "",
    maxFirst: "",
  });

  // Update Plane Form State
  const [updatePlaneForm, setUpdatePlaneForm] = useState({
    flightNumber: "",
    manufacturer: "",
    model: "",
    year: "",
    details: "",
    maxSeats: "",
    maxEco: "",
    maxBus: "",
    maxFirst: "",
  });

  // Delete Plane Form State
  const [deletePlaneForm, setDeletePlaneForm] = useState({
    flightNumber: "",
  });

  // Fetch Planes
  const fetchPlanes = async () => {
    try {
      const response = await fetch("http://54.200.166.229/planes");
      const planesData = await response.json();
      setPlanes(planesData);
    } catch (error) {
      console.error("Error fetching planes:", error);
      alert("Failed to load planes. Please try again later.");
    }
  };

  // Add Plane Handler
  const handleAddPlane = async () => {
    try {
      const credentials = getCredentials();
      const planeData = {
        flightnumber: addPlaneForm.flightNumber,
        manufacturer: addPlaneForm.manufacturer,
        model: addPlaneForm.model,
        year: addPlaneForm.year,
        details: addPlaneForm.details,
        max_seats: parseInt(addPlaneForm.maxSeats),
        max_eco: parseInt(addPlaneForm.maxEco),
        max_bus: parseInt(addPlaneForm.maxBus),
        max_first: parseInt(addPlaneForm.maxFirst),
        username: credentials.username,
        password: credentials.password,
      };

      const response = await fetch("http://54.200.166.229/add_plane", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(planeData),
      });

      const result = await response.json();

      if (result.error) {
        alert(result.error);
      } else {
        alert(result.message || "Máy bay đã được thêm thành công");
        // Reset form
        setAddPlaneForm({
          flightNumber: "",
          manufacturer: "",
          model: "",
          year: "",
          details: "",
          maxSeats: "",
          maxEco: "",
          maxBus: "",
          maxFirst: "",
        });
        fetchPlanes();
      }
    } catch (error) {
      console.error("Error adding plane:", error);
      alert("Thêm máy bay thất bại. Vui lòng thử lại.");
    }
  };

  // Update Plane Handler
  const handleUpdatePlane = async () => {
    try {
      const credentials = getCredentials();
      const planeData = {
        manufacturer: updatePlaneForm.manufacturer,
        model: updatePlaneForm.model,
        year: updatePlaneForm.year,
        details: updatePlaneForm.details,
        max_seats: parseInt(updatePlaneForm.maxSeats),
        max_eco: parseInt(updatePlaneForm.maxEco),
        max_bus: parseInt(updatePlaneForm.maxBus),
        max_first: parseInt(updatePlaneForm.maxFirst),
        username: credentials.username,
        password: credentials.password,
      };
      const response = await fetch(
        `http://54.200.166.229/update_plane/${updatePlaneForm.flightNumber}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(planeData),
        }
      );

      const result = await response.json();

      if (result.error) {
        alert(result.error);
      } else {
        alert(result.message || "Máy bay đã được cập nhật thành công");
        // Reset form
        setUpdatePlaneForm({
          flightNumber: "",
          manufacturer: "",
          model: "",
          year: "",
          details: "",
          maxSeats: "",
          maxEco: "",
          maxBus: "",
          maxFirst: "",
        });
        fetchPlanes();
      }
    } catch (error) {
      console.error("Error updating plane:", error);
      alert("Cập nhật máy bay thất bại. Vui lòng thử lại.");
    }
  };

  // Delete Plane Handler
  const handleDeletePlane = async () => {
    try {
      const credentials = getCredentials();
      const response = await fetch("http://54.200.166.229/delete_plane", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          flightnumber: deletePlaneForm.flightNumber,
          username: credentials.username,
          password: credentials.password,
        }),
      });
      const result = await response.json();

      if (result.error) {
        alert(result.error);
      } else {
        alert(result.message || "Máy bay đã được xóa thành công");
        // Reset form
        setDeletePlaneForm({ flightNumber: "" });
        fetchPlanes();
      }
    } catch (error) {
      console.error("Error deleting plane:", error);
      alert("Xóa máy bay thất bại. Vui lòng thử lại.");
    }
  };

  // Input change handlers
  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setAddPlaneForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatePlaneForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (userRole !== "admin") {
      alert("Bạn không có quyền truy cập trang này");
    }
  }, [userRole]);
  // Fetch planes on component mount
  useEffect(() => {
    fetchPlanes();
  }, []);

  // Toggle show all planes
  const toggleShowAllPlanes = () => {
    setShowAllPlanes(!showAllPlanes);
  };

  return (
    <div className="flight-management">
      {/* Plane List */}
      <div className="flight-management-content">
        <h2>Danh sách máy bay</h2>
        <div className="flight-list-grid">
          {(showAllPlanes ? planes : planes.slice(0, 6)).map((plane, index) => (
            <div key={index} className="flight-card">
              <div className="flight-card-header">
                <span className="flight-number">{plane.flightNumber}</span>
              </div>

              <div className="flight-card-body">
                <div className="flight-route">
                  <span className="departure">{plane.manufacturer}</span>
                  <span className="arrow">- Model:</span>
                  <span className="destination">{plane.model}</span>
                </div>
                <div className="flight-details">
                  <div className="detail-item">
                    <span className="label">Năm sản xuất:</span>
                    <span className="value">{plane.year}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Tổng số ghế:</span>
                    <span className="value">{plane.max_seats}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Ghế Eco:</span>
                    <span className="value">{plane.max_eco}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Ghế Thương Gia:</span>
                    <span className="value">{plane.max_bus}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Ghế Hạng Nhất:</span>
                    <span className="value">{plane.max_first}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {planes.length > 6 && (
          <button onClick={toggleShowAllPlanes} className="view-all-button">
            {showAllPlanes
              ? "Thu gọn"
              : `Xem tất cả (${planes.length} máy bay)`}
          </button>
        )}
      </div>

      {/* Add Plane */}
      <div className="flight-management-content add-flight-section">
        <h2>Thêm Máy Bay Mới</h2>
        <form
          className="add-flight-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddPlane();
          }}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="flightNumber">Số chuyến bay:</label>
              <input
                type="text"
                id="flightNumber"
                name="flightNumber"
                value={addPlaneForm.flightNumber}
                onChange={handleAddInputChange}
                placeholder="Nhập số chuyến bay"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="manufacturer">Hãng sản xuất:</label>
              <input
                type="text"
                id="manufacturer"
                name="manufacturer"
                value={addPlaneForm.manufacturer}
                onChange={handleAddInputChange}
                placeholder="Nhập hãng sản xuất"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="model">Mẫu máy bay:</label>
              <input
                type="text"
                id="model"
                name="model"
                value={addPlaneForm.model}
                onChange={handleAddInputChange}
                placeholder="Nhập mẫu máy bay"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="year">Năm sản xuất:</label>
              <input
                type="number"
                id="year"
                name="year"
                value={addPlaneForm.year}
                onChange={handleAddInputChange}
                placeholder="Nhập năm sản xuất"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="maxSeats">Tổng số ghế:</label>
              <input
                type="number"
                id="maxSeats"
                name="maxSeats"
                value={addPlaneForm.maxSeats}
                onChange={handleAddInputChange}
                placeholder="Nhập tổng số ghế"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="details">Chi tiết:</label>
              <input
                type="text"
                id="details"
                name="details"
                value={addPlaneForm.details}
                onChange={handleAddInputChange}
                placeholder="Nhập chi tiết thêm"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="maxEco">Số ghế Eco:</label>
              <input
                type="number"
                id="maxEco"
                name="maxEco"
                value={addPlaneForm.maxEco}
                onChange={handleAddInputChange}
                placeholder="Nhập số ghế Eco"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="maxBus">Số ghế Thương Gia:</label>
              <input
                type="number"
                id="maxBus"
                name="maxBus"
                value={addPlaneForm.maxBus}
                onChange={handleAddInputChange}
                placeholder="Nhập số ghế Thương Gia"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="maxFirst">Số ghế Hạng Nhất:</label>
              <input
                type="number"
                id="maxFirst"
                name="maxFirst"
                value={addPlaneForm.maxFirst}
                onChange={handleAddInputChange}
                placeholder="Nhập số ghế Hạng Nhất"
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-add-flight">
              Thêm Máy Bay
            </button>
            <button
              type="reset"
              className="btn-reset"
              onClick={() =>
                setAddPlaneForm({
                  flightNumber: "",
                  manufacturer: "",
                  model: "",
                  year: "",
                  details: "",
                  maxSeats: "",
                  maxEco: "",
                  maxBus: "",
                  maxFirst: "",
                })
              }
            >
              Đặt Lại
            </button>
          </div>
        </form>
      </div>

      {/* Update Plane */}
      <div className="flight-management-content add-flight-section">
        <h2>Sửa Thông Tin Máy Bay</h2>
        <form
          className="add-flight-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdatePlane();
          }}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="updateFlightNumber">Số chuyến bay:</label>
              <input
                type="text"
                id="updateFlightNumber"
                name="flightNumber"
                value={updatePlaneForm.flightNumber}
                onChange={(e) =>
                  setUpdatePlaneForm({
                    ...updatePlaneForm,
                    flightNumber: e.target.value,
                  })
                }
                placeholder="Nhập số chuyến bay"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="updateManufacturer">Hãng sản xuất:</label>
              <input
                type="text"
                id="updateManufacturer"
                name="manufacturer"
                value={updatePlaneForm.manufacturer}
                onChange={handleUpdateInputChange}
                placeholder="Nhập hãng sản xuất"
              />
            </div>
            <div className="form-group">
              <label htmlFor="updateModel">Mẫu máy bay:</label>
              <input
                type="text"
                id="updateModel"
                name="model"
                value={updatePlaneForm.model}
                onChange={handleUpdateInputChange}
                placeholder="Nhập mẫu máy bay"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="updateYear">Năm sản xuất:</label>
              <input
                type="number"
                id="updateYear"
                name="year"
                value={updatePlaneForm.year}
                onChange={handleUpdateInputChange}
                placeholder="Nhập năm sản xuất"
              />
            </div>
            <div className="form-group">
              <label htmlFor="updateMaxSeats">Tổng số ghế:</label>
              <input
                type="number"
                id="updateMaxSeats"
                name="maxSeats"
                value={updatePlaneForm.maxSeats}
                onChange={handleUpdateInputChange}
                placeholder="Nhập tổng số ghế"
              />
            </div>
            <div className="form-group">
              <label htmlFor="updateDetails">Chi tiết:</label>
              <input
                type="text"
                id="updateDetails"
                name="details"
                value={updatePlaneForm.details}
                onChange={handleUpdateInputChange}
                placeholder="Nhập chi tiết thêm"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="updateMaxEco">Số ghế Eco:</label>
              <input
                type="number"
                id="updateMaxEco"
                name="maxEco"
                value={updatePlaneForm.maxEco}
                onChange={handleUpdateInputChange}
                placeholder="Nhập số ghế Eco"
              />
            </div>
            <div className="form-group">
              <label htmlFor="updateMaxBus">Số ghế Thương Gia:</label>
              <input
                type="number"
                id="updateMaxBus"
                name="maxBus"
                value={updatePlaneForm.maxBus}
                onChange={handleUpdateInputChange}
                placeholder="Nhập số ghế Thương Gia"
              />
            </div>
            <div className="form-group">
              <label htmlFor="updateMaxFirst">Số ghế Hạng Nhất:</label>
              <input
                type="number"
                id="updateMaxFirst"
                name="maxFirst"
                value={updatePlaneForm.maxFirst}
                onChange={handleUpdateInputChange}
                placeholder="Nhập số ghế Hạng Nhất"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-add-flight">
              Cập Nhật Máy Bay
            </button>
            <button
              type="reset"
              className="btn-reset"
              onClick={() =>
                setUpdatePlaneForm({
                  flightNumber: "",
                  manufacturer: "",
                  model: "",
                  year: "",
                  details: "",
                  maxSeats: "",
                  maxEco: "",
                  maxBus: "",
                  maxFirst: "",
                })
              }
            >
              Đặt Lại
            </button>
          </div>
        </form>
      </div>

      {/* Delete Plane */}
      <div className="flight-management-content add-flight-section">
        <h2>Xóa Máy Bay</h2>
        <form
          className="add-flight-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleDeletePlane();
          }}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="deleteFlightNumber">Số chuyến bay:</label>
              <input
                type="text"
                id="deleteFlightNumber"
                name="flightNumber"
                value={deletePlaneForm.flightNumber}
                onChange={(e) =>
                  setDeletePlaneForm({ flightNumber: e.target.value })
                }
                placeholder="Nhập số chuyến bay để xóa"
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-add-flight btn-danger">
              Xóa Máy Bay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaneManagement;
