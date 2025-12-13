import "./Hero.css";
import boy from "../../assets/boy.svg";
import girl from "../../assets/girl.svg";
import collectionPics from "../../assets/collectionPics.svg";
import whiteSearch from "../../assets/whiteSearch.svg";

function HeroContent() {
  return (
    <div className="hero-content">
      <span className="hero-badge">Learn & Get Certificates</span>

      <h1 className="hero-title">
        Free Online Courses <br /> With Certificates & <br /> Diplomas
      </h1>
      <p className="hero-subtitle">25 Millions Learners. 15 Years. 100%</p>

      <SearchBox />
    </div>
  );
}

function SearchBox() {
  return (
    <form className="hero-search">
      <input
        className="hero-input"
        type="text"
        placeholder="What do you want to learn today?"
      />
      <button className="hero-btn" type="submit">
        <img src={whiteSearch} alt="search ico" />
      </button>
    </form>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="student-img">
        <img className="girl-img" src={girl} alt="girl student image" />
        <img className="boy-img" src={boy} alt="boy student image" />
      </div>
      <div className="hero-students">
        <div className="student">
            <h3>2k+</h3>
            <p>Student</p>
        </div>
        <img src={collectionPics} alt="people" className="hero-collection" />
      </div>
      <div className="hero-status">
        <h3>5.8k</h3>
        <p>Success Courses</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-main">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
