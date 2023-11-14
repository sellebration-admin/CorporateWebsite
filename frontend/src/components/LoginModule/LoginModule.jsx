import React from "react";
import "./LoginModule.css";
import { Link } from "react-router-dom";

const LoginModule = () => {
  return (
    <div className="custom-login-container">
      <form className="custom-login-form">
        <h2>Login</h2>
        <div className="custom-input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="custom-input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
        <span>
          You don't have an account? <Link to="/register">Register.</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginModule;
