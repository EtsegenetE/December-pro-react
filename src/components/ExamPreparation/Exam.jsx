import "./Exam.css";
import aboutUs from "../../assets/aboutUs.svg";
import arraw from "../../assets/arraw.svg";
import examGirl from "../../assets/examGirl.svg";
import examBoy from "../../assets/examBoy.svg";
import Buttons from "../Buttons/Buttons";
import SectionLabel from "../SectionLabel/SectionLabel";


function JoinNow({ icon, variant }) {
  return (
    <div className={`join-now-container ${variant}`}>
      <div className="join-content">
        <p className="join-subtitle">Start From Today</p>

        <h2>
          Join Our Training Courses & Build Your Skill.
        </h2>

        <Buttons
          text="Join Now"
          icon={arraw}
          className={variant === "dark" ? "btn-green" : "btn-dark"}
        />
      </div>

      <div className="join-image">
        <img src={icon} alt="Student" />
      </div>
    </div>
  );
}


function ExamHeader() {
  return (
    <div className="exam-header">
      <SectionLabel icon={aboutUs} text="EXAM PREPARATION" />
      <h1>Annual Exam Preparation</h1>
    </div>
  );
}

export default function Exam() {
  return (
    <section className="exam-container">
      <ExamHeader />

      <div className="join-wrapper">
       
        <JoinNow icon={examGirl} variant="dark" />

        <JoinNow icon={examBoy} variant="light" />
      </div>
    </section>
  );
}
