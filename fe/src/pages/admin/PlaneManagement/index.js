import React, { useState, useEffect } from "react";
import "./PlaneManage.css";
const PlaneManagement = () => {
  // State for planes and form inputs
  const [planes, setPlanes] = useState([]);

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
      };

      const response = await fetch("http://54.200.166.229/add_plane", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(planeData),
      });

      const result = await response.json();
      alert(result.message || result.error);

      // Reset form and refresh planes
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
    } catch (error) {
      console.error("Error adding plane:", error);
      alert("Failed to add plane. Please try again.");
    }
  };

  // Update Plane Handler
  const handleUpdatePlane = async () => {
    try {
      const planeData = {
        manufacturer: updatePlaneForm.manufacturer,
        model: updatePlaneForm.model,
        year: updatePlaneForm.year,
        details: updatePlaneForm.details,
        max_seats: parseInt(updatePlaneForm.maxSeats),
        max_eco: parseInt(updatePlaneForm.maxEco),
        max_bus: parseInt(updatePlaneForm.maxBus),
        max_first: parseInt(updatePlaneForm.maxFirst),
      };

      const response = await fetch(
        `http://54.200.166.229/update_plane/${updatePlaneForm.flightNumber}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(planeData),
        }
      );

      const result = await response.json();
      alert(result.message || result.error);

      // Reset form and refresh planes
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
    } catch (error) {
      console.error("Error updating plane:", error);
      alert("Failed to update plane. Please try again.");
    }
  };

  // Delete Plane Handler
  const handleDeletePlane = async () => {
    try {
      const planeData = {
        flightnumber: deletePlaneForm.flightNumber,
      };

      const response = await fetch("http://54.200.166.229/delete_plane", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(planeData),
      });

      const result = await response.json();
      alert(result.message || result.error);

      // Reset form and refresh planes
      setDeletePlaneForm({ flightNumber: "" });
      fetchPlanes();
    } catch (error) {
      console.error("Error deleting plane:", error);
      alert("Failed to delete plane. Please try again.");
    }
  };

  // Fetch planes on component mount
  useEffect(() => {
    fetchPlanes();
  }, []);

  return (
    <div className="plane-management">
      {/* Plane List */}
      <div className="plane-management-content">
        <h2>Plane List</h2>
        <ul>
          {planes.map((plane, index) => (
            <li key={index}>
              <strong>Flight Number:</strong> {plane.flightNumber}
              <br />
              <strong>Manufacturer:</strong> {plane.manufacturer}
              <br />
              <strong>Model:</strong> {plane.model}
              <br />
              <strong>Year:</strong> {plane.year}
              <br />
              <strong>Details:</strong> {plane.details || "N/A"}
              <br />
              <strong>Max Seats:</strong> {plane.max_seats}
              <br />
              <strong>Max Economy:</strong> {plane.max_eco}
              <br />
              <strong>Max Business:</strong> {plane.max_bus}
              <br />
              <strong>Max First Class:</strong> {plane.max_first}
              <br />
              <hr />
            </li>
          ))}
        </ul>
      </div>
      {/* Add Plane */}
      <div className="plane-management-content">
        <h2>Add Plane</h2>
        <input
          type="text"
          placeholder="Flight Number"
          value={addPlaneForm.flightNumber}
          onChange={(e) =>
            setAddPlaneForm({ ...addPlaneForm, flightNumber: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Manufacturer"
          value={addPlaneForm.manufacturer}
          onChange={(e) =>
            setAddPlaneForm({ ...addPlaneForm, manufacturer: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Model"
          value={addPlaneForm.model}
          onChange={(e) =>
            setAddPlaneForm({ ...addPlaneForm, model: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Year"
          value={addPlaneForm.year}
          onChange={(e) =>
            setAddPlaneForm({ ...addPlaneForm, year: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Details"
          value={addPlaneForm.details}
          onChange={(e) =>
            setAddPlaneForm({ ...addPlaneForm, details: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Max Seats"
          value={addPlaneForm.maxSeats}
          onChange={(e) =>
            setAddPlaneForm({ ...addPlaneForm, maxSeats: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Max Economy"
          value={addPlaneForm.maxEco}
          onChange={(e) =>
            setAddPlaneForm({ ...addPlaneForm, maxEco: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Max Business"
          value={addPlaneForm.maxBus}
          onChange={(e) =>
            setAddPlaneForm({ ...addPlaneForm, maxBus: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Max First Class"
          value={addPlaneForm.maxFirst}
          onChange={(e) =>
            setAddPlaneForm({ ...addPlaneForm, maxFirst: e.target.value })
          }
          required
        />
        <button onClick={handleAddPlane}>Add Plane</button>
      </div>
      {/* Update Plane */}
      <div className="plane-management-content">
        <h2>Update Plane</h2>
        <input
          type="text"
          placeholder="Flight Number"
          value={updatePlaneForm.flightNumber}
          onChange={(e) =>
            setUpdatePlaneForm({
              ...updatePlaneForm,
              flightNumber: e.target.value,
            })
          }
          required
        />
        <input
          type="text"
          placeholder="Manufacturer"
          value={updatePlaneForm.manufacturer}
          onChange={(e) =>
            setUpdatePlaneForm({
              ...updatePlaneForm,
              manufacturer: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Model"
          value={updatePlaneForm.model}
          onChange={(e) =>
            setUpdatePlaneForm({ ...updatePlaneForm, model: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Year"
          value={updatePlaneForm.year}
          onChange={(e) =>
            setUpdatePlaneForm({ ...updatePlaneForm, year: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Details"
          value={updatePlaneForm.details}
          onChange={(e) =>
            setUpdatePlaneForm({ ...updatePlaneForm, details: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Max Seats"
          value={updatePlaneForm.maxSeats}
          onChange={(e) =>
            setUpdatePlaneForm({ ...updatePlaneForm, maxSeats: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Max Economy"
          value={updatePlaneForm.maxEco}
          onChange={(e) =>
            setUpdatePlaneForm({ ...updatePlaneForm, maxEco: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Max Business"
          value={updatePlaneForm.maxBus}
          onChange={(e) =>
            setUpdatePlaneForm({ ...updatePlaneForm, maxBus: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Max First Class"
          value={updatePlaneForm.maxFirst}
          onChange={(e) =>
            setUpdatePlaneForm({ ...updatePlaneForm, maxFirst: e.target.value })
          }
        />
        <button onClick={handleUpdatePlane}>Update Plane</button>
      </div>
      {/* Delete Plane */}
      <div className="plane-management-content">
        <h2>Delete Plane</h2>
        <input
          type="text"
          placeholder="Flight Number"
          value={deletePlaneForm.flightNumber}
          onChange={(e) => setDeletePlaneForm({ flightNumber: e.target.value })}
          required
        />
        <button onClick={handleDeletePlane}>Delete Plane</button>
      </div>
    </div>
  );
};

export default PlaneManagement;
