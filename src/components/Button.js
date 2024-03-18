import "./Button.css";

const BUTTON_VARIANTS = {
  danger: "button--danger",
};

export default function Button({ variant = "", children, ...props }) {
  return (
    <button {...props} className={`button ${BUTTON_VARIANTS[variant] || ""}`}>
      {children}
    </button>
  );
}
