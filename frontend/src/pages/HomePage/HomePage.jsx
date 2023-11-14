import React from "react";
import OurStories from "../../components/OurStories/OurStories";
import LatestNews from "../../components/LatestNews/LatestNews";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LanguagesMap from "../../components/LanguagesMap/LanguagesMap";

const HomePage = () => {
  return (
    <>
      <Header />
      <LanguagesMap />
      <OurStories />
      <LatestNews />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default HomePage;
