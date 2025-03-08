import { createContext, useContext, useReducer, useEffect } from "react";

// Get initial theme from localStorage or system preference
// const initialState = localStorage.getItem("theme") 
//   ? localStorage.getItem("theme") === "dark" 
//   : window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialState = localStorage.getItem("theme") === "dark";


// Reducer function
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      const newTheme = !state;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    }
    default:
      return state;
  }
};

// Create Context
const ThemeContext = createContext();

// Context Provider
export const ThemeProvider = ({ children }) => {
  const [darkMode, dispatch] = useReducer(themeReducer, initialState);

  // Apply dark mode class to body immediately
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook
export const useTheme = () => useContext(ThemeContext);
