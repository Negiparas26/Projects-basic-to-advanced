import { useTheme } from "../context/ThemeContext";

const DarkModeToggle = () => {
  const { darkMode, dispatch } = useTheme();

  return (
    <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
      {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
