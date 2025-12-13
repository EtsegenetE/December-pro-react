import "./Navbar.css";
import edunity from "../../assets/edunity.svg";
import search from "../../assets/search.svg";
import arraw from "../../assets/arraw.svg";

const navLinks = ["Home", "About Us", "Courses", "Pages", "Blog", "Contact"];

function LogoSection() {
  return (
    <div className="edunity-img">
      <img src={edunity} alt="edunity logo" />
    </div>
  );
}

function NavBarLinks() {
  return (
    <nav className="navbar-nav">
      <ul className="navbar-list">
        {navLinks.map((link) => (
          <li key={link}>
            <a href="#">{link} </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Actions() {
  return (
    <div className="contact-us">
      <img src={search} alt="search" />
      <button className="navbar-btn">
        Contact Us
        <span className="arrow-btn">
          <img src={arraw} alt="" />
        </span>
      </button>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <LogoSection />
        <NavBarLinks />
        <Actions />
      </div>
    </div>
  );
}
