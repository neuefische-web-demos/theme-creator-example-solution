import "./ThemeForm.css";

const INITIAL_THEME = {
  name: "",
  colors: [
    { role: "primary", value: "#6200ee" },
    { role: "secondary", value: "#03dac6" },
    { role: "surface", value: "#ffffff" },
    { role: "surface-on", value: "#000000" },
  ],
};

export default function ThemeForm({ onSubmit }) {
  const initialData = INITIAL_THEME;

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
      <h2 className="theme-form__title">Add new Theme</h2>
      <input
        className="theme-form__name-input"
        type="text"
        placeholder="Theme Name"
        name="name"
        defaultValue={initialData.name}
        required
      />
      <fieldset className="theme-form__color-inputs">
        {initialData.colors.map((color) => (
          <input
            key={color.role}
            className="theme-form__color-input"
            type="color"
            name={color.role}
            defaultValue={color.value}
          />
        ))}
      </fieldset>
      <button className="theme-form__submit-button" type="submit">
        Add Theme
      </button>
    </form>
  );
}
