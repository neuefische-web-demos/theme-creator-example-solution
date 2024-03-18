import "./App.css";

import Theme from "./components/Theme";
import { themes } from "./lib/data";

function App() {
  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <main className="main-container">
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
