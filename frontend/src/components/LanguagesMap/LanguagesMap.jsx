import React from "react";
import "./LanguagesMap.css";
import { map } from "../../assets/index";
const LanguagesMap = () => {
  return (
    <div className="language-map">
      <div className="heading">
        <h1>Choose your language</h1>
      </div>
      <div>
        <img src={map} alt="map" usemap="#planetmap" />
        <map name="image-map">
          <area
            target=""
            alt="Russian"
            title="Russian"
            href=""
            coords="1005,155,38"
            shape="circle"
          />
        </map>
      </div>
    </div>
  );
};

export default LanguagesMap;
