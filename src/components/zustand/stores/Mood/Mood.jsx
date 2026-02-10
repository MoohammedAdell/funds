import { useTheme } from "./StoreMood";

function Mood() {
  const theme = useTheme((s) => s.theme);
  const toggleTheme = useTheme((s) => s.toggleTheme);
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
}

export default Mood;
