import React, {useState} from "react";
import "./SignIn.css";

const SignIn = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
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
