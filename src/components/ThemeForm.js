import Button from "./Button";
import ColorPicker from "./ColorPicker";
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

export default function ThemeForm({
  onSubmit,
  initialData = INITIAL_THEME,
  isEditMode,
}) {
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
      <h2 className="theme-form__title">
        {isEditMode ? "Edit Theme" : "Add new Theme"}
      </h2>
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
          <ColorPicker key={color.role} color={color} />
        ))}
      </fieldset>
      <Button type="submit">{isEditMode ? "Update Theme" : "Add Theme"}</Button>
    </form>
  );
}
