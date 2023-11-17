import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginModule.css";
import { AuthContext } from "../../context/authContext";

const LoginModule = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { currentUser, login } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);
  console.log(currentUser);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/index");
    } catch (error) {
      setLoginError(
        error.response?.data?.message || "An error occurred during login."
      );
    }
  };

  const handleTryAgain = () => {
    setLoginError(null);
    setInputs({ username: "", password: "" });
  };

  return (
    <div className="custom-login-container">
      <form className="custom-login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handleChange}
          />
        </div>
        {loginError && <p>{loginError}</p>}
        <button type="submit">Login</button>
        {loginError && <button onClick={handleTryAgain}>Try Again</button>}
        <span>
          You don't have an account? <Link to="/register">Register.</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginModule;
