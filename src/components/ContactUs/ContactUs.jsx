import LandingPage from "./landingpage/LandingPage";
import "./landingpage/landingPage.css";
import "./inputform/inputForm.css";
import Navbar from "../NavBar/Navbar";
import NewNavBar from '../NavBar/NewNavBar'
import Footer from "../Footer/Footer";
import { ScrollRestoration } from "react-router-dom";
import ContactUsCC from "./ContactUsCC";

const ContactUs = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <LandingPage /> */}
      <NewNavBar/>
      <ContactUsCC/>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default ContactUs;