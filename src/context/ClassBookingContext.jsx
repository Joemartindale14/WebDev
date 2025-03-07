import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
//require("dotenv").config();

export const ClassBookingContext = createContext();

export const ClassBookingProvider = ({ children }) => {
    const [classes, setClasses] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            const response = await axios.get(process.env.BACKEND_URI+`/api/classes`);
            setClasses(response.data);
        };
        fetchClasses();
    }, []);

    const bookClass = async (classId) => {
        await axios.post(`${process.env.BACKEND_URI}/api/book`, { classId });
        setBookings((prevBookings) => [...prevBookings, classId]);
    };

    const cancelBooking = async (classId) => {
        await axios.post(`${process.env.BACKEND_URI}/api/cancel`, { classId });
        setBookings((prevBookings) => prevBookings.filter((id) => id !== classId));
    };

    return (
        <ClassBookingContext.Provider value={{ classes, bookings, bookClass, cancelBooking }}>
            {children}
        </ClassBookingContext.Provider>
    );
};