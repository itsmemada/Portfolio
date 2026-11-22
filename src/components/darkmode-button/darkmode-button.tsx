import React from "react";
import "./darkmode-button.scss";

const STORAGE_KEY = "portfolio-dark-mode";

/*
 * Wczesniej tu byl blad: JSON.parse("{}") daje obiekt, ktory jest truthy,
 * wiec przy pierwszej wizycie (brak wpisu) strona startowala w dark mode.
 * Teraz czytamy wprost "true"/"false".
 */
const readStoredMode = (): boolean => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
};

const DarkmodeButton = () => {
  const [darkMode, setDarkMode] = React.useState<boolean>(readStoredMode);

  React.useEffect(() => {
    document.body.classList.toggle("dark", darkMode);

    try {
      localStorage.setItem(STORAGE_KEY, String(darkMode));
    } catch {
      /* tryb prywatny — ignorujemy */
    }

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", darkMode ? "#111111" : "#eeeeee");
    }
  }, [darkMode]);

  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={(event) => setDarkMode(event.target.checked)}
        aria-label="Toggle dark mode"
      />
      <span className="theme-switch__slider" />
    </label>
  );
};

export default DarkmodeButton;
