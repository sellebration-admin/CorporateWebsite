import { createContext, useEffect, useState } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [menuState, setMenuState] = useState(false);

  const showMenu = () => {
    setMenuState((prevState) => !prevState);
    console.log("menuState" + menuState);
  };
  return (
    <MenuContext.Provider value={{ menuState, showMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
