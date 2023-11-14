import React from "react";
import { Link } from "react-router-dom";
const RegisterModule = () => {
  return (
    <div className="custom-login-container">
      <form className="custom-login-form">
        <h2>Register</h2>
        <div className="custom-input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="custom-input-group">
          <label htmlFor="username">Email</label>
          <input type="email" id="username" name="username" required />
        </div>
        <div className="custom-input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Register</button>
        <span>
          Already have an account? <Link to="/login">Login.</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterModule;
