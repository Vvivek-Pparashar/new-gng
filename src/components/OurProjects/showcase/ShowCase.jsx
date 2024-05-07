import { Link } from "react-router-dom";
import Hm4 from "../../../assets/un4.jpg";
import Hm5 from "../../../assets/apartments.jpg";

import "./ShowCase.css";

const ShowCase = () => {
  return (
    <div className="op" style={{marginTop:"90px"}}>
      <h1>Our Projects</h1>
      <div className="op-card-cont">
        <div className="op-card">
          <img src={Hm4} alt="apartment-image" />
          <div className="op-card-text">
            <h2>Commercial - GNG Alianza</h2>
            <p>
              Alianza: Shop, eat, work, and enjoy all in one place. Away from
              chaos, built for your satisfaction. Elevating luxury with a touch
              of extravagance. Our shops have sidewalk access, ensuring
              excellent street visibility and walk-ins. The corner shape of the
              Plaza guarantees property appreciation. Alianza offices offer
              natural light, scenic views, and great connectivity, attracting
              talent and promoting work-life balance. Enjoy impeccable dining
              spaces, outdoor activities, and a lively rooftop cafe with
              dazzling skyline views. To add some fun to our busy lives! Come
              check out the Gaming Zone and Kids Play Area at Alianza.
            </p>
          </div>
          <Link to={"/GnG-Commercial-Alenza"}>
            <button style={{ backgroundColor: "#C5a253" }}>
              Book Now &#8594;
            </button>
          </Link>
        </div>
        <div className="op-card">
          <img src={Hm5} alt="apartment-image" />
          <div className="op-card-text">
            <h2>Residencial - GNG</h2>
            <p>
              Welcome to the future of luxurious living at Alianza Residential
              Township by GNG Builders. Nestled in the heart of Chandigarh,
              Alianza offers a harmonious blend of comfort, convenience, and
              elegance. Our pre-launch residential township is designed to
              redefine the concept of modern living. With meticulous planning
              and attention to detail, we have created a haven that caters to
              your every need. From thoughtfully designed floor plans to a range
              of amenities, Alianza is the epitome of contemporary living.
              Experience the joy of coming home to a vibrant community that
              fosters a sense of belonging. 
            </p>
          </div>
          <button style={{ cursor: "default" }}>Coming Soon...</button>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
