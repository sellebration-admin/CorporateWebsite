import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LanguageChoosingPage.css";
import { logotransp } from "../../assets";
const LanguageChoosingPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const navigate = useNavigate();
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const getButtonText = () => {
    switch (selectedLanguage) {
      case "English":
        return "Proceed";
      case "हिन्दी":
        return "आगे बढ़ें";
      case "deutsch":
        return "Weiter";
      case "français":
        return "Procéder";
      case "русский":
        return "Продолжить";
      case "Português":
        return "Prosseguir";
      case "中国人":
        return "继续";
      case "español":
        return "Continuar";
      case "日本":
        return "進む";
      default:
        return "Proceed";
    }
  };

  const handleProceed = () => {
    navigate("/index");
  };
  return (
    <div className="language-choosing-page">
      <div className="language-choosing-page-container">
        <div className="first-logo">
          <div className="logo-image-container">
            <img src={logotransp} alt="logo" />
          </div>
        </div>
        <div className="marquee">
          <marquee
            direction="up"
            scrollamount="1"
            loop=""
            className="landing__inner__middle"
          >
            <div className="landing__inner__middle__div">
              <p className="landing__inner__middle__each">
                Welcome to Sellebration Private Limited
              </p>
              <p className="landing__inner__middle__each">
                सेलब्रेशन प्राइवेट लिमिटेड में आपका स्वागत है
              </p>
              <p className="landing__inner__middle__each">
                Willkommen bei Sellebration Private Limited
              </p>
              <p className="landing__inner__middle__each">
                Bienvenue chez Sellebration Private Limited
              </p>
              <p className="landing__inner__middle__each">
                Добро пожаловать в Sellebration Private Limited
              </p>
              <p className="landing__inner__middle__each">
                Bem-vindo à Sellebration Private Limited
              </p>
              <p className="landing__inner__middle__each">
                欢迎来到 Sellebration 私人有限公司
              </p>
              <p className="landing__inner__middle__each">
                Bienvenido a Selbration Private Limited
              </p>
              <p className="landing__inner__middle__each">
                Sellebration Private Limited へようこそ
              </p>
            </div>
          </marquee>
        </div>
        <div className="background-map-holder">
        <div className="language-selector">
          <div className="selector-container">
            <select
              name="languages"
              id="languages"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option value="English">English</option>
              <option value="हिन्दी">हिन्दी</option>
              <option value="deutsch">Deutsch</option>
              <option value="français">Français</option>
              <option value="русский">Русский</option>
              <option value="Português">Português</option>
              <option value="中国人">中国人</option>
              <option value="español">Español</option>
              <option value="日本">日本</option>
            </select>
            <br />
            <br />
          </div>
          <div className="button-div">
            <button onClick={handleProceed}>{getButtonText()}</button>
          </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default LanguageChoosingPage;
