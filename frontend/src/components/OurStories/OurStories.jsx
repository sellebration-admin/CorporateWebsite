import React from "react";
import "./OurStories.css";
import TabsComponent from "../TabsComponent/TabsComponent";
const OurStories = () => {
  return (
    <div className="our-stories">
      <div className="stories-container">
        <h1>Our stories</h1>
      </div>
      <div className="tabs-component">
        <TabsComponent />
      </div>
    </div>
  );
};

export default OurStories;
