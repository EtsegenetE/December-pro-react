import "./Events.css";
import jointGirls from "../../assets/jointGirls.svg";
import SectionLabel from "../SectionLabel/SectionLabel";
import aboutUs from "../../assets/aboutUs.svg";
import Buttons from "../Buttons/Buttons";
import arraw from "../../assets/arraw.svg";

function UpcomingEvents () {
    return (
        <div className="upcoming-event">
            <SectionLabel icon={aboutUs} text="EXPLORE EVENTS" />
            <h1>Our Best Upcoming Events</h1>
            <p className="p-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus accusantium saepe. </p>
            <p className="p-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorum quis rem modi aut. Adipisci ipsam rerum, aliquid ducimus voluptas rem tenetur, ratione incidunt accusamus vitae aperiam dolores? Sint, pariatur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius pariatur ipsum officiis in aspernatur eveniet accusamus. Deleniti quo minus, atque nulla quis dicta sed temporibus amet velit reiciendis ad itaque.</p>
            <Buttons text="Get Ticket Now" icon={arraw} />
        </div>
    );
}

export default function Events() {
    return (
        <div className="event-container">
            <div className="event-wrapper">
            <UpcomingEvents />
            <img src={jointGirls} alt="" />
            </div>
        </div>
    );
}