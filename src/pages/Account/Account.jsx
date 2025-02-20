import React, { useEffect, useState } from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import axios from "axios";
import "./Account.css";

const Account = () => {
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState("details");

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
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/signin"; 
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="account-container">
      <HeaderContainer imageSrc="/merchandise_header_img.webp" title="MY ACCOUNT"/>
      <hr />
      <div className="account-page-content">
        <div className="account-sidebar">
          <p>Welcome back,</p>
          <h3>{user.firstName} {user.lastName}</h3>
          <hr />
          <ul>
            <li onClick={() => setActiveSection("details")}>Account Details</li>
            <hr />
            <li onClick={() => setActiveSection("classes")}>Booked Classes</li>
            <hr />
            <li onClick={() => setActiveSection("merchandise")}>Purchased Merchandise</li>
            <hr />
            <li onClick={handleSignOut} className="sign-out-button">Sign Out</li>
          </ul>
        </div>
        <div className="account-content">
          {activeSection === "details" && (
            <div className="account-details">
              <h2>Account Details</h2>
              <p><strong>First Name:</strong> {user.firstName}</p>
              <p><strong>Last Name:</strong> {user.lastName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Address:</strong> {user.address}</p>
              <p><strong>Postcode:</strong> {user.postcode}</p>
            </div>
          )}
          {activeSection === "classes" && (
            <div className="account-classes">
              <h2>Booked Classes</h2>
              {/* Add logic to display booked classes */}
            </div>
          )}
          {activeSection === "merchandise" && (
            <div className="account-merchandise">
              <h2>Purchased Merchandise</h2>
              {/* Add logic to display purchased merchandise */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;