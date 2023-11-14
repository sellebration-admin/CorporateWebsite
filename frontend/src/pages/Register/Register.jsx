import React from "react";
import LoginModule from "../../components/LoginModule/LoginModule";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Register.css";
import RegisterModule from "../../components/RegisterModule/RegisterModule";
const Register = () => {
  return (
    <div className="flex-wrapper">
      <Header />
      <RegisterModule />
      <Footer />
    </div>
  );
};

export default Register;
