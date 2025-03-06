import React, {useState} from "react";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [postcode, setPostcode] = useState("");
const [address, setAddress] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
try {
  const response = await axios.post(`http://localhost:5000/api/auth/signup`, {
    firstName,
    lastName,
    postcode,
    address,
    email,
    password,
  });
  alert("User has been created successfully.");
} catch (error) {
  alert("Error creating user.");
}
};

  return (
    <div className="sign-up-container">
      <div className="sign-up-form">
        <h1>CREATE AN ACCOUNT</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group first-name">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
          <div className="form-group last-name">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row">
          <div className="form-group address">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group postcode">
              <label htmlFor="postcode">Postcode</label>
              <input
                type="text"
                id="postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                required
              />
            </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          <button type="submit" className="sign-up-button">Create Account</button>
        </form>
        <p className="sign-up-link">
          Already have an account? <a href="/SignIn">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
