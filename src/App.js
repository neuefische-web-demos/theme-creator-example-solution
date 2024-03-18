import { useState } from "react";
import "./App.css";

import Theme from "./components/Theme";
import ThemeForm from "./components/ThemeForm";
import { themes as initialThemes } from "./lib/data";
import { v4 as uuid } from "uuid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  async function handleAddTheme(newTheme) {
    const colorNamePromises = newTheme.colors.map(async (color) => {
      const cleanHexValue = color.value.replace("#", "");

      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${cleanHexValue}`
      );
      const data = await response.json();
      return {
        ...color,
        name: data.name.value,
      };
    });

    const colorsWhitNames = await Promise.all(colorNamePromises);

    const newThemeWithId = {
      id: uuid(),
      name: newTheme.name,
      colors: colorsWhitNames,
    };

    setThemes([newThemeWithId, ...themes]);
  }

  function handleDeleteTheme(id) {
    const updatedThemes = themes.filter((theme) => theme.id !== id);

    setThemes(updatedThemes);
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
              <Theme
                name={theme.name}
                colors={theme.colors}
                onDelete={() => handleDeleteTheme(theme.id)}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
