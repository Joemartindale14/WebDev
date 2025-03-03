import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signin", {
        email,
        password,
      });
    alert("User signed in successfully.");
    localStorage.setItem("token", response.data.token);
    window.location.href = "/account"
    } catch (error) {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="sign-in-container">
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;