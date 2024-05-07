import { Link } from "react-router-dom";
import "./ProjectNav.css";

const ProjectNav = () => {
  return (
    <div className="pnav">
      <Link to={"#OverView"} className="Link">
        OVERVIEW
      </Link>
      <Link to={"#Amenities"} className="Link">
        AMENITIES
      </Link>
      <Link to={"#Gallery"} className="Link">
        GALLERY
      </Link>
      <Link to={"#FloorPlan"} className="Link">
        FLOOR PLAN
      </Link>
      <Link to={"#Location"} className="Link">
        LOCATION
      </Link>
    </div>
  );
};

export default ProjectNav;
