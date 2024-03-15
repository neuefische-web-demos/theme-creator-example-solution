import "./ColorCard.css";

export default function ColorCard({ color }) {
  return (
    <article className="color-card">
      <div
        className="color-card__display"
        style={{ backgroundColor: color.value }}
      ></div>
      <div className="color-card__info">
        <span className="color-card__role">{color.role}</span>
        <span className="color-card__hex">{color.value}</span>
      </div>
    </article>
  );
}
