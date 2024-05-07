import "../Features/features.css";
import Featurecomponent from "./Featurecomponent";
import logo1 from "../../assets/Logo1.png";
import logo2 from "../../assets/Logo2.png";
import logo3 from "../../assets/Logo3.png";
import logo4 from "../../assets/Logo4.png";
import logo5 from "../../assets/Logo5.png";
import logo6 from "../../assets/Logo6.png";

const Features = () => {
  return (
    <div className="features">
      <Featurecomponent
        featureLogo={logo1}
        heading={"INNOVATIVE BUILT"}
        brief={"Use of latest & innovative construction technology"}
      />
      <Featurecomponent
        featureLogo={logo2}
        heading={"AMPLE PARKING SPACE"}
        brief={"The Ease Of Parking is also a luxury"}
      />
      <Featurecomponent
        featureLogo={logo3}
        heading={"Catchment of 5Lakh Families"}
        brief={"Adopting a customer first Approach in everything we do"}
      />
      <Featurecomponent
        featureLogo={logo4}
        heading={"BEST LOCATIONS"}
        brief={"Thoughtfully selected project locations for utmost convenience"}
      />
      <Featurecomponent
        featureLogo={logo5}
        heading={"100% DG POWER BACKUP"}
        brief={"Adapting latest technology in our projects"}
      />
      <Featurecomponent
        featureLogo={logo6}
        heading={"3-Side Highway Connectivity"}
        brief={"Making us a centrally accessible location"}
      />
    </div>
  );
};

export default Features;
