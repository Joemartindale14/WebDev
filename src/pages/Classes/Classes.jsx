import React, { useState, useContext } from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import { ClassBookingContext } from "../../context/ClassBookingContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Classes.css";

const Classes = () => {
  const [sortBy, setSortBy] = useState("time");
  const [filters, setFilters] = useState({
    instructor: "all",
    timeRange: "all",
  });

  const { classes, bookClass } = useContext(ClassBookingContext);

  const filteredClasses = classes.filter((classItem) => {
    //filter by instructor
    if (filters.instructor != "all" && filters.instructor.length > 0) {
      if (!filters.instructor.includes(classItem.instructor)) {
      return false;
    }
  }

    //filter by time
    if (filters.timeRange !== "all") {
      const [startTime, endTime] = filters.timeRange.split("-").map(Number);
      const classTime = parseInt(classItem.time.replace(":", ""), 10);
      if (classTime < startTime || classTime > endTime) {
        return false;
      }
    }

    return true;
  });

  const sortedClasses = filteredClasses.sort((a, b) => {
    if (sortBy === "time") {
      return a.time.localeCompare(b.time);
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const clearFilters = () => {
    setFilters({
      instructor: "all",
      timeRange: "all",
    });
    setSortBy("time");
  };

  const handleBookClass = async (classItem) => {
    try {
      const message = await bookClass(classItem._id);
      toast.success(message);
    } catch (error) {
      toast.error("You can not book this class.");
    }
  };

  return (
    <section className="classes">
      <HeaderContainer imageSrc="/classes_header_img.webp" title="CLASSES" />
      <hr />
      <div className="class-content">
        <div className="instructor-filters">
          <label>FILTER & SORT</label>
          <hr />
          <label>SORT BY:</label>
          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="time">Time</option>
            <option value="name">Name</option>
          </select>
          <hr />
          <div>
            <label>INSTRUCTOR:</label>
            <select
              value={filters.instructor}
              onChange={(e) => {
                const selectedInstructors = Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                );
                setFilters({ ...filters, instructor: selectedInstructors });
              }}
            >
              <option value="all">All</option>
              <option value="Peter Brown">Peter Brown</option>
              <option value="Sophie Wild">Sophie Wild</option>
              <option value="Stacey Trevor">Stacey Trevor</option>
            </select>
          </div>
          <hr />
          <div>
            <label>TIME RANGE:</label>
            <select
              value={filters.timeRange}
              onChange={(e) =>
                setFilters({ ...filters, timeRange: e.target.value })
              }
            >
              <option value="all">All</option>
              <option value="800-1200">8:00 AM - 12:00 PM</option>
              <option value="1200-1600">12:00 PM - 4:00 PM</option>
              <option value="1600-2000">4:00 PM - 8:00 PM</option>
            </select>
          </div>
          <hr />
          <button onClick={clearFilters}>Clear Filters</button>
        </div>
        <div className="instructor-product-list">
          {sortedClasses.map((classItem) => (
            <div key={classItem._id} className="instructor-product-card">
              <h3>{classItem.name}</h3>
              <p>Time: {classItem.time}</p>
              <p>Instructor: {classItem.instructor}</p>
              <p>Bookings: {classItem.bookings}</p>
              <div className="instructor-product-card-buttons">
                <button
                  className="add"
                  onClick={() => handleBookClass(classItem)}
                >
                  Book Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Classes;