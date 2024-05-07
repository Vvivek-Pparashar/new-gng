import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Errorfile from "./components/ErrorFile/Errorfile";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import OurProjects from "./components/OurProjects/OurProjects";
import Alenza from "./components/Alenza/Alenza";
import DataCollector from "./components/DataCollector/DataCollector";
// import NewAbout from "./components/AboutUs/NewAbout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorfile />,
  },

  {
    path: "/AboutUs",
    element: <AboutUs/>,
    errorElement: <Errorfile />,
  },

  {
    path: "/contactUs",
    element: <ContactUs />,
    errorElement: <Errorfile />,
  },

  {
    path: "/OurProjects",
    element: <OurProjects />,
    errorElement: <Errorfile />,
  },

  {
    path: "/GnG-Commercial-Alenza",
    element: <Alenza />,
    errorElement: <Errorfile />,
  },

  {
    path:"/admin/admin",
    element:<DataCollector/>
  }
]);

export default router;
