import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext"; // Certifique-se do caminho correto
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/Theme"; // Ajuste conforme a organização das pastas

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"; // light como padrão
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light" 
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); //Salva o tema no locastorage
  };

  useEffect(() => {
    //Atualiza o tema no localstorage sempre que o tema mudar
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};