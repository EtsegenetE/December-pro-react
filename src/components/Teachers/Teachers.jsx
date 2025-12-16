import "./Teachers.css";
import teacher1 from "../../assets/teacher1.svg";
import teacher2 from "../../assets/teacher2.svg";
import teacher3 from "../../assets/teacher3.svg";
import teacher4 from "../../assets/teacher4.svg";
import share from "../../assets/share.svg";
import SectionLabel from "../SectionLabel/SectionLabel";
import aboutUs from "../../assets/aboutUs.svg";
import teacherBack from "../../assets/teacherBack.svg";

function TeacherCard({ icon, shareIcon, name }) {
  return (
    <div className="teacher-card">
      <div className="teacher-image">
        <img src={icon} alt={name} className="teachers-photo" />
        <img src={shareIcon} alt="Share" className="share-icon" />
      </div>
      <div className="teachers-name">
        <h4>{name}</h4>
        <p>Teacher</p>
      </div>
    </div>
  );
}

function TeachersHead() {
  return (
    <div className="teachers-head">
      <SectionLabel icon={aboutUs} text="TEACHER" />
      <h1>Meet Our Expert Instructors</h1>
    </div>
  );
}

export default function Teachers() {
  return (
    <section
      className="teachers-container"
      style={{
        backgroundImage: `url(${teacherBack})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="teachers-content">
        <TeachersHead />
        <div className="teachers-list">
          <TeacherCard icon={teacher1} shareIcon={share} name="NATHAN ALLEN" />
          <TeacherCard icon={teacher2} shareIcon={share} name="ESTHER BOYD" />
          <TeacherCard icon={teacher3} shareIcon={share} name="JAMIE KELLER" />
          <TeacherCard icon={teacher4} shareIcon={share} name="JESUS PENDLEY" />
        </div>
      </div>
    </section>
  );
}
