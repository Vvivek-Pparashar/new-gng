import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  ClockCircleTwoTone,
  HddTwoTone,
  MailTwoTone,
  MessageTwoTone,
  MobileTwoTone,
  UserOutlined,
  EnvironmentTwoTone,
} from "@ant-design/icons";
import "leaflet/dist/leaflet.css";
import "./inputForm.css";
import { useState } from "react";
import axios from "axios";
import { Alert } from "antd";

const InputForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    city: "",
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
    window.scrollTo(0, 0);
  };

  return (
    <div className="if" id="Location">
      <div className="if-input">
        <h2>REQUEST CALL BACK</h2>
        <p>PLEASE FILL YOUR DETAILS BELOW</p>
        <form className="if-input-form" onSubmit={(e) => handleSubmit(e)}>
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
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
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
                onChange={(e) => setData({ ...data, mobileNo: e.target.value })}
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
                onChange={(e) => setData({ ...data, email: e.target.value })}
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
                onChange={(e) => setData({ ...data, message: e.target.value })}
                required
              />
            </div>
          </div>

          <button>Submit</button>
        </form>
      </div>
      <MapContainer
        className="markercluster-map"
        center={[30.6534578, 76.850186]}
        zoom={14}
        maxZoom={17}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[30.6534578, 76.850186]}>
          <Popup>
            GnG Alianza <br />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default InputForm;
