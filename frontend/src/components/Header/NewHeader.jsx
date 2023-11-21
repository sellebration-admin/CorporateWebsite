import React, { useEffect, useState, useContext } from "react";
import "./NewHeader.css";
import HeaderNoMenu from "./HeaderNoMenu";
import HeaderWithMenu from "./HeaderWithMenu";
import { MenuContext } from "../../context/menuContext";
const NewHeader = () => {
  const { menuState } = useContext(MenuContext);
  return (
    <div className="parent">
      {menuState ? <HeaderWithMenu /> : <HeaderNoMenu />}
    </div>
  );
};

export default NewHeader;
