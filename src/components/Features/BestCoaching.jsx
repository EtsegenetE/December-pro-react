import Buttons from "../../components/Buttons/Buttons";
import arraw from "../../assets/arraw.svg";
import "./BestCoaching.css"


export default function BestCoaching({ icon }) {
  return (
    <div className="coaching-container">
      <div className="coaching-wrapper">
        <img src={icon} alt="" />
        <h2>Best Coaching</h2>
        <p>
          In pellentesque massa vida placerat duis. Cursus sit amet dictum sit
          amet.
        </p>

        <Buttons text="View Details" icon={arraw} />
      </div>
    </div>
  );
}
