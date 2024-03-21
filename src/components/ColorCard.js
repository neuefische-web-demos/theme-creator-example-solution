import { useEffect, useState } from "react";
import "./ColorCard.css";

export default function ColorCard({ color }) {
  const [colorName, setColorName] = useState("");

  useEffect(() => {
    async function getColorName() {
      const cleanHexValue = color.value.replace("#", "");

      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${cleanHexValue}`
      );
      const data = await response.json();
      setColorName(data.name.value);
    }

    getColorName();
  }, [color.value]);

  return (
    <article className="color-card">
      <div
        className="color-card__display"
        style={{ backgroundColor: color.value }}
      ></div>
      <div className="color-card__info">
        <span className="color-card__role">{color.role}</span>
        <span className="color-card__name">{colorName}</span>
        <span className="color-card__hex">{color.value}</span>
      </div>
    </article>
  );
}
