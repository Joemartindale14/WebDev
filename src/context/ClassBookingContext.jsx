import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ClassBookingContext = createContext();

export const ClassBookingProvider = ({ children }) => {
    const [classes, setClasses] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            const response = await axios.get(`http://localhost:5000/api/classes`);
            setClasses(response.data);
        };
        fetchClasses();
    }, []);

    const bookClass = async (classId) => {
        await axios.post(`http://localhost:5000/api/book`, { classId });
        setBookings((prevBookings) => [...prevBookings, classId]);
    };

    const cancelBooking = async (classId) => {
        await axios.post(`http://localhost:5000/api/cancel`, { classId });
        setBookings((prevBookings) => prevBookings.filter((id) => id !== classId));
    };

    return (
        <ClassBookingContext.Provider value={{ classes, bookings, bookClass, cancelBooking }}>
            {children}
        </ClassBookingContext.Provider>
    );
};