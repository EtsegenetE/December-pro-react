import "./Buttons.css";

export default function Buttons({ text, icon, className = "" }) {
  return (
    <button className={`primary-btn ${className}`}>
      <span className="btn-text">{text}</span>

      <span className="primary-arrow">
        <img src={icon} alt="" />
      </span>
    </button>
  );
}
