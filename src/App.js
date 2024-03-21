import "./App.css";

import Theme from "./components/Theme";
import ThemeForm from "./components/ThemeForm";
import { themes as initialThemes } from "./lib/data";
import { v4 as uuid } from "uuid";
import useLocalStorageState from "use-local-storage-state";

async function getColorName(hexValue) {
  const cleanHexValue = hexValue.replace("#", "");

  const response = await fetch(
    `https://www.thecolorapi.com/id?hex=${cleanHexValue}`
  );
  const data = await response.json();
  return data.name.value;
}

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  async function handleAddTheme(newTheme) {
    setThemes([{ ...newTheme, id: uuid() }, ...themes]);
  }

  async function handleEditTheme(id, updatedTheme) {
    const colorNamePromises = updatedTheme.colors.map(async (color) => {
      const name = await getColorName(color.value);

      return {
        ...color,
        name,
      };
    });

    const colorsWhitNames = await Promise.all(colorNamePromises);

    setThemes(
      themes.map((theme) => {
        if (theme.id !== id) {
          return theme;
        }

        return {
          id,
          name: updatedTheme.name,
          colors: colorsWhitNames,
        };
      })
    );
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
                theme={theme}
                onDelete={() => handleDeleteTheme(theme.id)}
                onEdit={(updatedTheme) =>
                  handleEditTheme(theme.id, updatedTheme)
                }
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
