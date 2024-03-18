import { useState } from "react";
import "./App.css";

import Theme from "./components/Theme";
import ThemeForm from "./components/ThemeForm";
import { themes as initialThemes } from "./lib/data";
import { v4 as uuid } from "uuid";

function App() {
  const [themes, setThemes] = useState(initialThemes);

  function handleAddTheme(newTheme) {
    const newThemeWithId = { ...newTheme, id: uuid() };
    setThemes([newThemeWithId, ...themes]);
  }

  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <main className="main-container">
        <ThemeForm onSubmit={handleAddTheme} />
        <ul className="theme-list">
          {themes.map((theme) => (
            <li key={theme.id}>
              <Theme name={theme.name} colors={theme.colors} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
