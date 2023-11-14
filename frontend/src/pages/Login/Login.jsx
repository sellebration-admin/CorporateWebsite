import React from "react";
import LoginModule from "../../components/LoginModule/LoginModule";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Login.css";
const Login = () => {
  return (
    <div className="flex-wrapper">
      <Header />
      <LoginModule />
      <Footer />
    </div>
  );
};

export default Login;
