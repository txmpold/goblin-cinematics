import { useEffect, useState } from "react";
import "./Darkmode.css";

export default function Darkmode() {
  const [isDark, setIsDark] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <button
      className="darkmode-toggle"
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark mode"
    >
      {isDark ? "☀️" : "🌕"}
    </button>
  );
}
