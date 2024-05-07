import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import Showcase from "./showcase/ShowCase";
import OurProjectsHero from "./ourProjectsHero/OurProjectsHero";
import Floating from "../FloatingWhatsapp/Floating";
import NewNavBar from "../NavBar/NewNavBar";
import { ScrollRestoration } from "react-router-dom";

const OurProjects = () => {
  return (
    <div>
      <NewNavBar/>
      <Showcase />
      <Footer />
      <ScrollRestoration/>
      <Floating/>
    </div>
  );
};

export default OurProjects;
