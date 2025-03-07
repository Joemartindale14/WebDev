import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';
//require("dotenv").config();

const Admin = () => {
  const [merchandise, setMerchandise] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
  }, []);

  const handleMerchandiseChange = (e) => {
  };

  const handleClassesChange = (e) => {
  };

  const handleSaveMerchandise = async () => {
    try {
      await axios.put(`${process.env.BACKEND_URI}/api/auth/merchandise`, merchandise, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Merchandise updated successfully");
    } catch (error) {
      console.error("Error updating merchandise:", error.response ? error.response.data : error.message);
      alert("Error updating merchandise.");
    }
  };

  const handleSaveClasses = async () => {
    try {
      await axios.put(`${process.env.BACKEND_URI}/api/auth/classes`, classes, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Classes updated successfully");
    } catch (error) {
      console.error("Error updating classes:", error.response ? error.response.data : error.message);
      alert("Error updating classes.");
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <div className="admin-section">
        <h2>Merchandise</h2>
        <textarea value={merchandise} onChange={handleMerchandiseChange}></textarea>
        <button onClick={handleSaveMerchandise}>Save Merchandise</button>
      </div>
      <div className="admin-section">
        <h2>Classes</h2>
        <textarea value={classes} onChange={handleClassesChange}></textarea>
        <button onClick={handleSaveClasses}>Save Classes</button>
      </div>
    </div>
  );
};

export default Admin;