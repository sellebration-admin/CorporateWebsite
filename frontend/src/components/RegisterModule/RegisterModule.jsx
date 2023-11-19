import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { doneIcon, failIcon } from "../../assets";
import "./RegisterModule.css";

const RegisterModule = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTryAgain = () => {
    setRegistrationSuccess(false);
    setRegistrationError(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://3.110.51.174:8800/api/auth/register",
        inputs
      );
      if (res.data === "User registered successfully") {
        setRegistrationSuccess(true);
      }
    } catch (error) {
      setRegistrationError(
        error.message || "An error occurred during registration."
      );
    }
  };

  return (
    <div className="custom-login-container">
      {registrationSuccess ? (
        <div className="reg-complete">
          <img src={doneIcon} alt="Registration successful" />
          <h2>User is registered</h2>
          <p>
            Now you can proceed to <Link to="/login">Login</Link>
          </p>
        </div>
      ) : registrationError ? (
        <div className="reg-complete">
          <img src={failIcon} alt="Registration failed" />
          <p>{registrationError}</p>
          <p>
            Please, try again! <Link onClick={handleTryAgain}>Register</Link>
          </p>
        </div>
      ) : (
        <form className="custom-login-form">
          <h2>Register</h2>
          <div className="custom-input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              onChange={handleChange}
            />
          </div>
          <div className="custom-input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="custom-input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Register
          </button>
          <span>
            Already have an account? <Link to="/login">Login.</Link>
          </span>
        </form>
      )}
    </div>
  );
};

export default RegisterModule;
