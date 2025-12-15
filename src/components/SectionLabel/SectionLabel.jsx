import "./SectionLabel.css";

export default function SectionLabel({ icon, text, className = "" }) {
  return (
    <div className={`section-label ${className}`}>
      {icon && <img src={icon} alt="" />}
      <span>{text}</span>
    </div>
  );
}
