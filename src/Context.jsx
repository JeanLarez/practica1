import { createContext, useState } from "react";

export const ThemeContext = createContext("light");

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const handleClick = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, handleClick }}>
      {children}
    </ThemeContext.Provider>
  );
}
