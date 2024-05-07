import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const [open, setOpen] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 400 ? setNavBg(true) : setNavBg(false);
  };

  window.addEventListener("scroll", changeNavBg);
  return (
    <nav className={`${navBg ? "nav-active" : ""}`}>
      <div className="logo"></div>
      <div className="menu-btn" onClick={() => setOpen(!open)}>
        <MenuOutlined style={{ fontSize: "25px" }} />
      </div>
      <ul className={`${open ? "active" : "not-active"}`}>
        <div
          className={`${open ? "close-btn-active" : "close-btn"}`}
          onClick={() => setOpen(!open)}
        >
          <CloseOutlined style={{ fontSize: "25px" }} />
        </div>

        <Link to="/" className="Link">
          <p>Home</p>
        </Link>
        <Link to="/AboutUs" className="Link">
          <p>About Us</p>
        </Link>
        <Link to="/ContactUs" className="Link">
          <p>Contact Us</p>
        </Link>
        <Link to="/OurProjects" className="Link">
          <p>Our Projects</p>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
