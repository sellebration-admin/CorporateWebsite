import React, { useState, useEffect } from "react";
import "./TestPage.css";

const TestPage = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`main-wrapper ${scrolled ? "scrolled" : ""}`}>
      <header className="main-header">
        <div className="container">
          <img src="logo.png" alt="Logo" className="logo" />
          <input type="text" placeholder="Search" className="search-bar" />
          <button onClick={toggleMenu}>Menu</button>
        </div>
      </header>

      {menuVisible && <div className="menu">{/* Menu content here */}</div>}

      <div className="content">{/* Page content here */}</div>
    </div>
  );
};

export default TestPage;
