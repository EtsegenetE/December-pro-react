import "./Feedback.css";
import onlineStar from "../../assets/onlineStar.svg";
import onlineBack from "../../assets/onlineBack.png";
import onlineGirl from "../../assets/onlineGirl.svg";
import gloria from "../../assets/gloria.svg";

function OnlineSchool({ icon }) {
  return (
    <div className="online-head-section"  >
    <div className="online-flex">
      {icon && <img src={icon} alt="Star" />}
      <p>Online School</p>
    </div>
    </div>
  );
}

function OnlineHead() {
  const stars = Array(6).fill(onlineStar);
  return (
    <div className="online-school">
      <OnlineSchool icon={null} /> {/* optional label */}
      {stars.map((icon, idx) => (
        <OnlineSchool key={idx} icon={icon} />
      ))}
    </div>
  );
}

function OnlineBody() {
  return (
    <div className="online-body">
      <div className="online-img">
        <img src={onlineGirl} alt="Online student" />
      </div>
      <div
        className="feedback-gloria"
        style={{
          backgroundImage: `url(${onlineBack})`,
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum aut
          minima voluptate maxime veritatis, hic dolores modi omnis minus ab quia
          pariatur qui, animi quasi totam ipsum, nulla reiciendis.
        </p>
        <div className="gloria-info">
          <img src={gloria} alt="Gloria" />
          <div>
            <h4>Gloria Burnett</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Feedback() {
  return (
    <section className="feedback-wrapper">
      <div className="feedback-content">
        <OnlineHead />
        <OnlineBody  />
      </div>
    </section>
  );
}
