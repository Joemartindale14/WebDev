import React, { useContext } from 'react';
import { ClassBookingContext } from '../../context/ClassBookingContext';
import './Timetable.css';

const Timetable = () => {
    const { classes, bookings, bookClass, cancelBooking } = useContext(ClassBookingContext);

    const isBooked = (classId) => bookings.includes(classId);

    return (
        <div className="timetable">
            <h2>Class Timetable</h2>
            <ul>
                {classes.map((classItem) => (
                    <li key={classItem._id} className="class-item">
                        <span>{classItem.name} - {classItem.time}</span>
                        {isBooked(classItem._id) ? (
                            <button onClick={() => cancelBooking(classItem._id)}>Cancel Booking</button>
                        ) : (
                            <button onClick={() => bookClass(classItem._id)}>Book Class</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Timetable;