import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { ScrollRestoration } from "react-router-dom";
import Gallery from "./Gallery/Gallery";
import AlenzaHeroPage from "./Alenza-HeroPage/AlenzaHeroPage";
import ProjectNav from "./ProjectNav/ProjectNav";
import Amenities from "./Amenities/Amenities";
import FloorPlan from "./FloorPlan/FloorPlan";
import OverView from "./OverView/OverView";
import InputForm from "../ContactUs/inputform/InputForm";
import Floating from "../FloatingWhatsapp/Floating";

const Alenza = () => {
  return (
    <div>
      <Navbar />
      <AlenzaHeroPage />
      <ProjectNav />
      <OverView />
      <Amenities />
      <Gallery />
      <FloorPlan />
      <InputForm />
      <Footer />
      <ScrollRestoration />
      <Floating/>
    </div>
  );
};

export default Alenza;
