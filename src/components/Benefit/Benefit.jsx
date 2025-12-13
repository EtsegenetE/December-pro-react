import './Benefit.css';
import oneGirl from "../../assets/oneGirl.svg";
import twoGirl from "../../assets/twoGirl.svg";
import years from "../../assets/years.svg";

function AboutUsImages() {
    return(
        <div>
            <div>
                <img src={oneGirl} alt="" />
            </div>
            <div>
                <img src={years} alt="" />
                <img src={twoGirl} alt="" />
            </div>
        </div>
    );
}


export default function Benefit() {
    return (
        
            <AboutUsImages />
        
    );
}