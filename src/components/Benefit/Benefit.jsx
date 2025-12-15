import "./Benefit.css";
import oneGirl from "../../assets/oneGirl.svg";
import twoGirls from "../../assets/twoGirls.svg";
import years from "../../assets/years.svg";
import decore from "../../assets/decore.svg";
import aboutUs from "../../assets/aboutUs.svg";
import arraw from "../../assets/arraw.svg";

import Buttons from "../Buttons/Buttons";
import SectionLabel from "../SectionLabel/SectionLabel";

function AboutUsImages() {
  return (
    <div className="image-container">
      <div className="front-image">
        <img src={decore} alt="" />
        <img src={oneGirl} alt="" />
      </div>
      <div className="second-image">
        <img src={years} alt="" />
        <img src={twoGirls} alt="" />
      </div>
    </div>
  );
}

function BenefitContent() {
  return (
    <div className="benefit-content-container">
      <SectionLabel icon={aboutUs} text="ABOUT US" />

      <div className="about-heading">
        <h1>
          Benefit From Our Online Learning Expertise Earn{" "}
          <span>Professional</span>
        </h1>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem inventore voluptas sed fuga adipisci, perferendis doloribus at error assumenda sint, quisquam tempore odit, ipsa qui laboriosam numquam natus enim eligendi!
        </p>
      </div>

      <div className="about-mission">
        <div className="our-mission">
          <h3>OUR MISSION:</h3>
          <p>
            Suspendisse ultrice gravida dictum
fusce placerat ultricies integer quis
auctor elit sed vulputate mi sit.
          </p>
        </div>

        <div className="our-vission">
          <h3>OUR VISION:</h3>
          <p>
            Suspendisse ultrice gravida dictum
fusce placerat ultricies integer quis
auctor elit sed vulputate mi sit.
          </p>
        </div>
      </div>

      <Buttons
        text="Admission Open"
        icon={arraw}
        className="benefit-btn"
      />
    </div>
  );
}

export default function Benefit() {
  return (
    <div className="benefit-container">
      <div className="benefit-inner">
        <AboutUsImages />
        <BenefitContent />
      </div>
    </div>
  );
}
