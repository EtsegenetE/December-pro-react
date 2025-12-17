import "./Address.css";

import addressBack from "../../assets/addressBack.jpg";
import address from "../../assets/address.svg";
import call from "../../assets/call.svg";
import email from "../../assets/email.svg";
import edunityRed from "../../assets/edunityRed.svg";

import gallery1 from "../../assets/gallery1.svg";
import gallery2 from "../../assets/gallery2.svg";
import gallery3 from "../../assets/gallery3.svg";
import gallery4 from "../../assets/gallery4.svg";
import gallery5 from "../../assets/gallery5.svg";
import gallery6 from "../../assets/gallery6.svg";

import fb from "../../assets/fb.svg";
import insta from "../../assets/insta.svg";
import pinterest from "../../assets/pinterest.svg";
import twitterG from "../../assets/twitterG.svg";

function AddressItem({ icon, label, value }) {
  return (
    <div className="address-item">
      <img src={icon} alt={label} />
      <div className="address-label">
        <p>{label}</p>
        <h4>{value}</h4>
      </div>
    </div>
  );
}

function AddressInfo() {
  return (
    <div className="address-info">
      <AddressItem
        className="address-item-info"
        icon={address}
        label="Address:"
        value="1925 Boggess Street"
      />
      <AddressItem
        className="address-item-info"
        icon={call}
        label="Phone:"
        value="(00) 875 784 565"
      />
      <AddressItem icon={email} label="Email:" value="info@gmail.com" />
    </div>
  );
}

function EdunityFooter() {
  return (
    <div className="footer-edunity">
      <img src={edunityRed} alt="Edunity logo" />
      <p>
        Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt
        tortor aliquam facilisis cras fermentum odio eu.
      </p>

      <div className="footer-social">
        <img src={fb} alt="Facebook" />
        <img src={insta} alt="Instagram" />
        <img src={pinterest} alt="Pinterest" />
        <img src={twitterG} alt="Twitter" />
      </div>
    </div>
  );
}

function OurService() {
  return (
    <div className="footer-services">
      <h3>Our Services</h3>
      <ul>
        <li>Web Development</li>
        <li>UI / UX Design</li>
        <li>Management</li>
        <li>Digital Marketing</li>
        <li>Blog News</li>
      </ul>
    </div>
  );
}

function Gallery() {
  return (
    <div className="footer-gallery">
      <h3>Gallery</h3>
      <div className="gallery-grid">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
        <img src={gallery5} alt="" />
        <img src={gallery6} alt="" />
      </div>
    </div>
  );
}

function Subscribe() {
  return (
    <div className="footer-subscribe">
      <h3>Subscribe</h3>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe Now</button>
      </form>
    </div>
  );
}

export default function Address() {
  return (
    <footer
      className="address-container"
      style={{
        backgroundImage: `url(${addressBack})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="address-inner">
        <AddressInfo />

        <div className="address-body">
          <EdunityFooter />
          <OurService />
          <Gallery />
          <Subscribe />
        </div>

        <p className="footer-copy">
          Copyright © 2024 <span>Edunity</span> | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
