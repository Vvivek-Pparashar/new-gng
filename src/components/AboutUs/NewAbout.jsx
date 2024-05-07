import React from "react";
import img1 from "../../assets/about-1.png";
import img2 from "../../assets/about-2.png";
import p1 from "../../assets/team-1.jpg";
import ic1 from "../../assets/icon-1.png";
import ic2 from "../../assets/icon-2.png";
import ic3 from "../../assets/icon-3.png";
import "./NewAbout.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Floating from "../FloatingWhatsapp/Floating";

const NewAbout = () => {
  return (
    <>
      <div className="container-xxl py-5" style={{ marginTop: "70px" }}>
        <h1 style={{textAlign:"center",fontSize:"60px", marginBottom:"30px"}}>About Us</h1>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img">
                <img
                  className="img-fluid"
                  src={img1}
                  alt="Commercial property in zirakpur
"
                />
                <img
                  className="img-fluid"
                  src={img2}
                  alt="Real estate investment
"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              {/* <h4 className="section-title">About Us</h4> */}
              <h1 className="display-5 mb-4">
                Transforming vision into architectural masterpiece
              </h1>
              <p>
                We are all about making your dream home a reality! Our talented
                architects and designers bring a fresh and innovative approach
                to every project. We believe in combining aesthetics,
                functionality, and sustainability to create amazing spaces.
                Whether it's a commercial township or a residential complex, we
                work closely with our clients to understand their vision and
                bring it to life. With attention to detail and out-of-the-box
                thinking, we ensure that each project is unique and tailored to
                your needs. We value open communication and collaboration,
                involving you every step of the way.
              </p>
              <p className="mb-4">
                From concept to completion, we strive to exceed your
                expectations and leave a lasting impression. Choose GNG Builders
                to turn your dream home into a reality! Let's build something
                extraordinary together!
              </p>
              <div className="d-flex align-items-center mb-5">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary"
                  style={{ width: "120px", height: "120px" }}
                >
                  <h1
                    className="display-1 mb-n2"
                    data-toggle="counter-up"
                    style={{ fontSize: "60px" }}
                  >
                    20+
                  </h1>
                </div>
                <div className="ps-4">
                  <h3>FEATURES</h3>
                  <h3>& AMENITIES</h3>
                  <h3>OFFERED</h3>
                  {/* <h3>Years</h3>
                  <h3>Working</h3>
                  <h3 className="mb-0">Experience</h3> */}
                </div>
              </div>
              <a className="btn btn-primary py-3 px-5" href="#Read">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5" id="Read">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h4 className="section-title">Why Choose Us!</h4>
              <h1 className="display-5 mb-4">
                Why You Should Trust Us? Learn More About Us!
              </h1>
              <p className="mb-4">
                At GNG Builders, we understand the importance of getting things
                right from the very beginning. With our expertise and
                dedication, we'll work closely with you to ensure that your
                pre-launch project is a success. Trust us to bring your vision
                to life and create something truly remarkable!
              </p>
              <div className="row g-4">
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img
                      className="flex-shrink-0"
                      src={ic1}
                      alt="Commercial property for rent
"
                    />
                    <div className="ms-4">
                      <h3>Design Approach</h3>
                      <p className="mb-0">
                        Our unique design approach sets us apart from the rest.
                        We believe in pushing boundaries and thinking outside
                        the box to create innovative and captivating designs
                        that stand out.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img
                      className="flex-shrink-0"
                      src={ic2}
                      alt="Real estate investment
"
                    />
                    <div className="ms-4">
                      <h3>Innovative Solutions</h3>
                      <p className="mb-0">
                        At GNG Builders, we pride ourselves on delivering
                        innovative solutions for every project.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <img
                      className="flex-shrink-0"
                      src={ic3}
                      alt="Commercial property for rent
"
                    />
                    <div className="ms-4">
                      <h3>Project Management</h3>
                      <p className="mb-0">
                        When it comes to project management, Our experienced
                        team ensures seamless coordination and efficient
                        execution, keeping your project on track and within
                        budget.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="feature-img">
                <img
                  className="img-fluid"
                  src={img2}
                  alt="Commercial project in zirakpur"
                />
                <img
                  className="img-fluid"
                  src={img1}
                  alt="Commercial property in zirakpur
"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h4 className="section-title">Team Members</h4>
            <h1 className="display-5 mb-4">
              We Are Creative Architecture Team For Your Dream Home
            </h1>
          </div>
          <div className="row g-0 team-items">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img className="img-fluid" src={p1} alt="" />
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h3 className="mt-2">Architect Name</h3>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img className="img-fluid" src={p1} alt="" />
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h3 className="mt-2">Architect Name</h3>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img className="img-fluid" src={p1} alt="" />
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h3 className="mt-2">Architect Name</h3>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative">
                <div className="position-relative">
                  <img className="img-fluid" src={p1} alt="" />
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h3 className="mt-2">Architect Name</h3>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Floating />
    </>
  );
};

export default NewAbout;
