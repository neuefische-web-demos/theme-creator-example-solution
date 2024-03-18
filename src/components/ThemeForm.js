import "./ThemeForm.css";

const INTIAL_THEME = {
  primary: "#6200ee",
  secondary: "#03dac6",
  surface: "#ffffff",
  "surface-on": "#000000",
};

export default function ThemeForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const newTheme = {
      name: data.name,
      colors: [
        {
          role: "primary",
          value: data.primary,
        },
        {
          role: "secondary",
          value: data.secondary,
        },
        {
          role: "surface",
          value: data.surface,
        },
        {
          role: "surface-on",
          value: data["surface-on"],
        },
      ],
    };

    onSubmit(newTheme);
  }
  return (
    <form className="theme-form" onSubmit={handleSubmit}>
      <h2 className="theme-form__title">Add a new Theme</h2>
      <input
        className="theme-form__name-input"
        type="text"
        placeholder="Theme Name"
        name="name"
        required
      />
      <fieldset className="theme-form__color-inputs">
        <input
          className="theme-form__color-input"
          type="color"
          defaultValue={INTIAL_THEME.primary}
          name="primary"
        />
        <input
          className="theme-form__color-input"
          type="color"
          defaultValue={INTIAL_THEME.secondary}
          name="secondary"
        />
        <input
          className="theme-form__color-input"
          type="color"
          defaultValue={INTIAL_THEME.surface}
          name="surface"
        />
        <input
          className="theme-form__color-input"
          type="color"
          defaultValue={INTIAL_THEME["surface-on"]}
          name="surface-on"
        />
      </fieldset>
      <button className="theme-form__submit-button" type="submit">
        Add Theme
      </button>
    </form>
  );
}
