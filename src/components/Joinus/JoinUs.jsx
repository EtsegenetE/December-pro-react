import "./JoinUs.css";
import Buttons from "../Buttons/Buttons";
import callBackg from "../../assets/callBackg.svg";
import arraw from "../../assets/arraw.svg";
import playBtn from "../../assets/playBtn.svg";



export default function JoinUs() {
  return (
    <section
      className="call-us-container"
      style={{
        backgroundImage: `url(${callBackg})`,
      }}
    >
      <div className="call-us-inner">
       
        <div className="call-us-content">
          <p className="call-us-subtitle">Join Our New Session</p>

          <h1 className="call-us-title">
            Call To Enroll Your Child <br />
            <span>(+91) 9584 23452</span>
          </h1>

          <Buttons text="Join With Us" icon={arraw} />
        </div>

        
        <div className="play-btn">
          <img src={playBtn} alt="Play video" />
          <p>Watch now</p>
        </div>
      </div>
    </section>
  );
}
