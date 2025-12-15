import "./PopularCourses.css";
import aboutUs from "../../assets/aboutUs.svg";
import arraw from "../../assets/arraw.svg";
import dev1 from "../../assets/dev1.svg";
import dev2 from "../../assets/dev2.svg";
import dev3 from "../../assets/dev3.svg";
import cart from "../../assets/cart.svg";
import blackClock from "../../assets/blackClock.svg";
import man from "../../assets/man.svg";
import note from "../../assets/note.svg";
import star from "../../assets/star.svg";
import angela from "../../assets/angela.svg";
import SectionLabel from "../SectionLabel/SectionLabel";
import Buttons from "../Buttons/Buttons";
import background from "../../assets/background.png"

function HeadCourses() {
  return (
    <div className="head-courses-container">
      <div className="head-courses-wrap">
        <div className="front-wrap">
          <SectionLabel icon={aboutUs} text="TOP POPULAR COURSES" />
          <h1>Check Out Educate Features <br /> Win Any Exam</h1>
        </div> 
        <div className="second-wrap">
          <Buttons text="Browse Edunity Courses" icon={arraw} />
        </div>
      </div>
    </div>
  );
}

function Courses({ icon }) {
  return (
    <section className="courses">
      <img src={icon} alt="" />
      <div className="course-star">
        <img src={star} alt="" />
        <span> (4.7) </span>
      </div>

      <h3 className="courses-heading3">IT Statistics Data Science And Business Analysis</h3>

      <div className="course-lesson">
        <div className="lesson">
          <img src={note} alt="" />
          <span>Lesson</span>
          <img src={blackClock} alt="" />
        </div>
        <div className="time">
          <span>19h30m</span>
          <img src={man} alt="" width="18px" />
        </div>

        <div className="course-student">
          <p>Students 20+</p>
        </div>
      </div>

      <section className="course-footer">
        <div className="developer">
          <img src={angela} alt="" />
          <p>By Angela in Development</p>
        </div>

        <div className="cart">
          <h3>
            $60 <span>$120</span>
          </h3>
          <div className="cart-action">
            <img src={cart} alt="" />
            <p>Add To Cart</p>
          </div>
        </div>
      </section>
    </section>
  );
}

function CourseList() {
  return (
    <div className="course-list">
      <Courses icon={dev1} />
      <Courses icon={dev2} />
      <Courses icon={dev3} />
    </div>
  );
}

export default function PopularCourses() {
  return (
   <div
      className="popular-courses"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="popular-course-inner">
        <HeadCourses />
        <CourseList />
      </div>
    </div>
  );
}
