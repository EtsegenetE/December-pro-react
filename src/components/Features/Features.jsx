import "./Features.css";
import BestCoaching from "./BestCoaching";
import aboutUs from "../../assets/aboutUs.svg";
import coaching1 from "../../assets/coaching1.svg";
import coaching2 from "../../assets/coaching2.svg";
import coaching3 from "../../assets/coaching3.svg";
import coaching4 from "../../assets/coaching4.svg";
import SectionLabel from "../SectionLabel/SectionLabel";
import background from "../../assets/background.png";

function FeaturesHead() {
  return (
   
      <div className="feature-head">
        <SectionLabel icon={aboutUs} text="EDUNITY FEATURE" className="edunity-image" />
        <img src={aboutUs} alt="" />
        <h1>Check Out Educate Features <br /> Win Any Exam</h1>
      </div>
  
  );
}

export default function Features() {
  return (
    <div
      className="feature-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="feature-inner-container">
        <FeaturesHead />
        <div className="feature-coaching">
          <BestCoaching icon={coaching1} />
          <BestCoaching icon={coaching2} />
          <BestCoaching icon={coaching3} />
          <BestCoaching icon={coaching4} />
        </div>
      </div>
    </div>
  );
}
