import { useState } from "react";
import "./ColorPicker.css";

export default function ColorPicker({ color }) {
  const [value, setValue] = useState(color.value);

  function handleColorChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="color-picker">
      <div className="color-picker__color-input-wrapper">
        <input
          id={color.role}
          key={color.role}
          className="color-picker__color-input"
          type="color"
          name={color.role}
          aria-label={color.role}
          value={value}
          onChange={handleColorChange}
        />
      </div>
      <div className="color-picker__text-input-wrapper">
        <label className="color-picker__role" htmlFor={color.role}>
          {color.role}
        </label>
        <input
          type="text"
          className="color-picker__text-input"
          value={value}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
}
