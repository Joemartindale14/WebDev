import React, { useState } from "react";
import axios from "axios";
import "./SignIn.css";
//require("dotenv").config();

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //console.log('Backend URI:', process.env.REACT_APP_BACKEND_URI);
  //console.log(`${process.env.REACT_APP_BACKEND_URI}/api/auth/signin`);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://web-dev-sigma-eosin.vercel.app/api/auth/signin`, {
        email,
        password,
      });
      alert("User signed in successfully.");
      localStorage.setItem("token", response.data.token);
      const isAdmin = response.data.isAdmin;
      window.location.href = isAdmin ? "/admin" : "/account";
    } catch (error) {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-form">
        <h1>SIGN IN</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
        <p className="sign-up-link">
          Don't have an account? <a href="/SignUp">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;