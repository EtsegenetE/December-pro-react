import "./Header.css";
import clock from "../../assets/clock.svg";
import location from "../../assets/location.svg";
import people from "../../assets/people.png";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import skyp from "../../assets/skyp.svg";
import linkdin from "../../assets/linkdin.svg";

export default function Header() {
  return (
    <div className="container">
      <div className="header-inner">
        <div className="header-left">
          <div className="time">
            <img src={clock} alt="" width="24px" />
            <p>Working: Monday-Friday, 9:am - 5:pm </p>
          </div>

          <div className="location">
            <img src={location} alt="" width="24px" />
            <p>Hudson,Wisconsin(WI), 54016 </p>
          </div>
        </div>

        <div className="header-right">
          <div className="login">
            <img
              className="people"
              src={people}
              alt=""
              width="24px"
              height="24px"
            />
            <p>Login/Register</p>
          </div>

          <div className="media">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={skyp} alt="skype" />
            <img src={linkdin} alt="linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
}
