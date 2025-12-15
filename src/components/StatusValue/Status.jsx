import "./Status.css";
import SectionLabel from "../SectionLabel/SectionLabel";
import aboutUs from "../../assets/aboutUs.svg";
import coupleStudents from "../../assets/coupleStudents.svg";

function LeftStatus() {
  return (
    <div className="left-section-wrapper">
      <div className="top-status">
        <SectionLabel icon={aboutUs} text="OUR STATUS VALUES" />
        <h1>Our Classroom Is A Very Deferent <span>School</span> Than All The Others </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi animi mollitia repellendus quisquam corrupti fugiat autem sapiente harum, doloribus totam eum eaque, in magnam magni consectetur aut numquam voluptatibus eveniet.</p>

        <StatusValue text="Case study success"  initialPercent={90} />
        <StatusValue text="Happy student" initialPercent={75} />
        <StatusValue text="Engaging" initialPercent={93} />
        <StatusValue text="Student Community" initialPercent={63} />
      </div>

      
    </div>
  );
}


import { useState } from "react";
import "./Status.css";

function StatusValue({ text, initialPercent = 0 }) {
  const [percent, setPercent] = useState(initialPercent);

  function handleClick(e) {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();

    const clickX = e.clientX - rect.left;
    const newPercent = Math.round((clickX / rect.width) * 100);

    setPercent(newPercent);
  }

  return (
    <div className="status-value">
      <div className="status-text">
        <p>{text}</p>
        <span>{percent}%</span>
      </div>

      <div className="status-bar" onClick={handleClick}>
        <div
          className="status-bar-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
export default function Status() {
  return (
    <div className="status-container">
        <div className="status-inner-container">
        <LeftStatus />
        <img src={coupleStudents} alt="" />
        </div>
    </div>
  );
}
