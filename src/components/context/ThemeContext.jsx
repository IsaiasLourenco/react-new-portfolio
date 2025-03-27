import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "light", // Tema padrão
  toggleTheme: () => {}, // Função fictícia, será definida no Provider
});