import { useReducer } from "react";
import { darkReducer } from "../themereducer";
import { darkthemeContext } from "../context";

const DarkThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkReducer, {
    darktheme: false,
  });

  return (
    <darkthemeContext.Provider value={{ state, dispatch }}>
      {children}
    </darkthemeContext.Provider>
  );
};

export default DarkThemeProvider;
