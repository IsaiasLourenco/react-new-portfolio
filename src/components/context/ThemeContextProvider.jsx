import React, { useState } from "react";
import ThemeContext from "./ThemeContext"; // Certifique-se do caminho correto
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/Theme"; // Ajuste conforme a organização das pastas

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
