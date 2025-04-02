import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ClassBookingContext = createContext();

export const ClassBookingProvider = ({ children }) => {
  const [classes, setClasses] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/classes");
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, []);

  const bookClass = async (classId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/book",
        { classId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBookings((prevBookings) => [...prevBookings, classId]);
      return response.data.message;
    } catch (error) {
      console.error("Error booking class:", error);
      throw new Error("Failed to book class.");
    }
  };

  const cancelBooking = async (classId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/cancel",
        { classId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBookings((prevBookings) =>
        prevBookings.filter((id) => id !== classId)
      );
      return response.data.message;
    } catch (error) {
      console.error("Error cancelling booking:", error);
      throw new Error("Failed to cancel booking.");
    }
  };

  return (
    <ClassBookingContext.Provider
      value={{ classes, bookings, bookClass, cancelBooking }}
    >
      {children}
    </ClassBookingContext.Provider>
  );
};