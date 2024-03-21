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
    setThemes([{ ...newTheme, id: uuid() }, ...themes]);
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
