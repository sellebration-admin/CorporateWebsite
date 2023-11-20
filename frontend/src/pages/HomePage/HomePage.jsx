import React from "react";
import OurStories from "../../components/OurStories/OurStories";
import LatestNews from "../../components/LatestNews/LatestNews";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LanguagesMap from "../../components/LanguagesMap/LanguagesMap";
import "./HomePage.css";
import NewHeader from "../../components/Header/NewHeader";
const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <NewHeader />
      <LanguagesMap />
      <OurStories />
      <LatestNews />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default HomePage;
