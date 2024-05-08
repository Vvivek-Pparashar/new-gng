import React, { useState } from "react";
import {
  ClockCircleTwoTone,
  EnvironmentTwoTone,
  HddTwoTone,
  MailTwoTone,
  MessageTwoTone,
  MobileTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import Floating from "../FloatingWhatsapp/Floating";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactUsCC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    interested: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://gng-builder-server.vercel.app/contactUs", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error ", error);
      });

    setData({
      ...data,
      firstName: "",
      lastName: "",
      mobileNo: "",
      email: "",
      city: "",
      message: "",
    });
    navigate("/")
  };

  return (
    <div>
      <div className="container-xxl py-5" style={{ marginTop: "70px" }}>
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px;" }}
          >
            <h1 className="mb-3" style={{ fontSize: "60px" }}>
              Contact Us
            </h1>
          </div>
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div
                  className="col-md-6 col-lg-4 wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fa fa-map-marker-alt text-primary"></i>
                      </div>
                      <span style={{ textAlign: "center" }}>
                        Adjoining Sector 20 Pachkula, Kishanpura Road,
                        Zirakpur, 160104
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 wow fadeIn"
                  data-wow-delay="0.3s"
                >
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fa fa-envelope-open text-primary"></i>
                      </div>
                      <span>gngzirakpur@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 wow fadeIn"
                  data-wow-delay="0.5s"
                >
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fa fa-phone-alt text-primary"></i>
                      </div>
                      <span>+91-7404804048</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3432.307714382743!2d76.84761107453326!3d30.65346238946125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDM5JzEyLjUiTiA3NsKwNTEnMDAuNyJF!5e0!3m2!1sen!2sin!4v1711017652762!5m2!1sen!2sin"
                style={{ minHeight: "350px", border: "0" }}
                allowfullscreen=""
                loading="lazy"
                aria-hidden="false"
                tabindex="0"
                frameborder="0"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.5s">
                <form
                  className="if-input-form"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="if-input-form-row">
                    <div className="if-input-form-container">
                      <div className="if-input-form-abs">
                        <UserOutlined style={{ color: "#1677FF" }} />
                      </div>
                      <input
                        placeholder="First Name"
                        className="input"
                        value={data.firstName}
                        onChange={(e) =>
                          setData({ ...data, firstName: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="if-input-form-container">
                      <div className="if-input-form-abs">
                        <UserOutlined style={{ color: "#1677FF" }} />
                      </div>
                      <input
                        placeholder="Last Name"
                        className="input"
                        value={data.lastName}
                        onChange={(e) =>
                          setData({ ...data, lastName: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="if-input-form-row">
                    <div className="if-input-form-container">
                      <div className="if-input-form-abs">
                        <MobileTwoTone />
                      </div>
                      <input
                        placeholder="Mobile No"
                        className="input"
                        value={data.mobileNo}
                        onChange={(e) =>
                          setData({ ...data, mobileNo: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="if-input-form-container">
                      <div className="if-input-form-abs">
                        <MailTwoTone />
                      </div>
                      <input
                        placeholder="Email"
                        className="input"
                        value={data.email}
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="if-input-form-row">
                    <div className="if-input-form-container">
                      <div className="if-input-form-abs">
                        <ClockCircleTwoTone />
                      </div>
                      <input type="date" className="input" />
                    </div>
                  </div>

                  <div className="if-input-form-row">
                    <div className="if-input-form-container">
                      <div className="if-input-form-abs">
                        <EnvironmentTwoTone />
                      </div>
                      <input
                        placeholder="City"
                        className="input"
                        value={data.message}
                        onChange={(e) =>
                          setData({ ...data, message: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <button>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Floating />
    </div>
  );
};

export default ContactUsCC;
