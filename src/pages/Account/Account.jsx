import React, { useEffect, useState } from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Account.css";

const Account = () => {
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState("details");
  const [isEditing, setIsEditing] = useState(false);
  const [editUser, setEditUser] = useState({});
  const [bookedClasses, setBookedClasses] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/auth/account", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);

        //get booked classes
        const classesResponse = await axios.get("http://localhost:5000/api/classes");
        const booked = classesResponse.data.filter((classItem) =>
          response.data.bookedClasses.includes(classItem._id)
        );
        setBookedClasses(booked);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/signin";
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put("http://localhost:5000/api/auth/account", editUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving user data", error);
    }
  };

  const handleCancelBooking = async (classItem) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("http://localhost:5000/api/cancel",{ classId: classItem._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookedClasses((prevClasses) =>
        prevClasses.filter((item) => item._id !== classItem._id)
      );
    } catch (error) {
      console.error("Error cancelling booking:", error);
      toast.error("Failed to cancel booking. Please try again.");
    }
  };

  const handleEditClick = () => {
    if (!user) {
      console.error("User data is not available.");
      return;
    }
  
    setEditUser({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      postcode: user.postcode,
    });
    setIsEditing(true);
  };

  return (
    <div className="account-container">
      <HeaderContainer imageSrc="/merchandise_header_img.webp" title="MY ACCOUNT" />
      <hr />
      <div className="account-page-content">
        <div className="account-sidebar">
          <p>Welcome back,</p>
          {user ? (
            <h3>{user.firstName} {user.lastName}</h3>
          ) : (
            <h3>Loading...</h3>
          )}
          <hr />
          <ul>
            <li
              className={activeSection === "details" ? "active" : ""}
              onClick={() => setActiveSection("details")}
            >
              Account Details
            </li>
            <hr />
            <li
              className={activeSection === "classes" ? "active" : ""}
              onClick={() => setActiveSection("classes")}
            >
              My Bookings
            </li>
            <hr />
            <li
              className="sign-out"
              onClick={handleSignOut}
            >
              Sign Out
            </li>
          </ul>
        </div>
        <div className="account-content">
        {activeSection === "details" && (
  <div className="account-details">
    <h2>Account Details</h2>
            {isEditing ? (
              <form onSubmit={handleSave} className="edit-details">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={editUser.firstName || ""}
                  onChange={handleEditChange}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={editUser.lastName || ""}
                  onChange={handleEditChange}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editUser.email || ""}
                  onChange={handleEditChange}
                />
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  value={editUser.address || ""}
                  onChange={handleEditChange}
                />
                <label htmlFor="postcode">Postcode</label>
                <input
                  type="text"
                  name="postcode"
                  value={editUser.postcode || ""}
                  onChange={handleEditChange}
                />
                <div className="changes-buttons">
                  <button type="submit" className="save-button">Save</button>
                  <button type="button" className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
              </form>
            ) : user ? (
              <div>
                <p><strong>First Name:</strong> {user.firstName}</p>
                <p><strong>Last Name:</strong> {user.lastName}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Address:</strong> {user.address}</p>
                <p><strong>Postcode:</strong> {user.postcode}</p>
                <button className="edit-button" onClick={handleEditClick}>Edit</button>
              </div>
            ) : (
              <p>Loading your account details.</p>
            )}
          </div>
        )}
          {activeSection === "classes" && (
            <div className="account-classes">
              <h2>My Bookings</h2>
              {bookedClasses.length > 0 ? (
                bookedClasses.map((classItem) => (
                  <div key={classItem._id}>
                    <h3>{classItem.name}</h3>
                    <p>Time: {classItem.time}</p>
                    <p>Instructor: {classItem.instructor}</p>
                    <button className="cancel-class-button" onClick={() => handleCancelBooking(classItem)}>Cancel Booking</button>
                  </div>
                ))
              ) : (
                <p>No classes booked yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;