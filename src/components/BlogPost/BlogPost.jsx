import "./BlogPost.css";
import Buttons from "../Buttons/Buttons.jsx";
import SectionLabel from "../SectionLabel/SectionLabel.jsx";
import blogGroup from "../../assets/blogGroup.svg";
import blogStudy from "../../assets/blogStudy.svg";
import blogS from "../../assets/blogS.svg";
import calendar from "../../assets/calendar.svg";
import comment from "../../assets/comment.svg";
import aboutUs from "../../assets/aboutUs.svg";
import arraw from "../../assets/arraw.svg";

function PopularPost() {
  return (
    <div className="popular-post">
      <div className="post-head">
        <SectionLabel icon={aboutUs} text="ALL BLOG POST" />
        <h1>Most Popular Post.</h1>
      </div>

      <Buttons text="All Blog Post" icon={arraw} />
    </div>
  );
}

function Posts({ post, date }) {
  return (
    <div className="post-container">
      <div className="post-img">
        <img src={post} alt="" />
      </div>
      <div className="post-text">
        <div className="post-content">
          <img src={calendar} alt="" />
          <p>{date} </p>
        </div>
        <div className="post-content">
          <img src={comment} alt="" />
          <p>Comment(06)</p>
        </div>
      </div>

      <div className="post-text">
        <h3>
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat
        </h3>
      </div>

      <Buttons text="Read More" icon={arraw} />
    </div>
  );
}

export default function BlogPost() {
  return (
    <div className="blog-post-container">
      <PopularPost />
      <div className="post-wrapper">
        <Posts post={blogGroup} date="21 April 2023" />
        <Posts post={blogStudy} date="15 April 2024" />
        <Posts post={blogS} date="11 April 2024" />
      </div>
    </div>
  );
}
