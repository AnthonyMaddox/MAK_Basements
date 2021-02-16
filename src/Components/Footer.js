import React, { Component } from "react";
import "../App.css";
import logo from "../Images/MAK_Logo-Reverse.png";
import mapIcon from "../Images/map_icon.png";
import fbIcon from "../Images/fb.png";
import { Link } from "react-router-dom";
// import GoogleMap from "./MyMapComponent";

class Footer extends Component {
  render() {
    return (
      <div className="footerDiv">
        <div className="footLogoDiv">
          <a href="https://makhomedesign.com/" target="_blank">
            <img className="footLogo" src={logo} />
          </a>
          <hr></hr>
          <div>
            <a
              className="fbDiv"
              href="https://www.facebook.com/MAKRemodelingServices"
              target="_blank"
            >
              <img className="fbLogo" src={fbIcon} />
              <p className="fbPara">find us on facebook!</p>
            </a>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <p className="resources">RESOURCES</p>
            </li>
            <li>
              <Link className="footLink" to="/home">
                BASEMENTS HOME
              </Link>
            </li>

            <li>
              <Link className="footLink" to="/bathrooms">
                KITCHENETTES
              </Link>
            </li>
            <li>
              <Link className="footLink" to="/kitchenettes">
                BATHROOMS
              </Link>
            </li>
            <li>
              <a
                className="footLink"
                href="https://makhomedesign.com/contact/"
                target="_blank"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a
            className="footMapDiv"
            href="https://www.google.com/maps/place/M.A.K.+Remodeling+Services/@38.7416682,-76.9949416,17z/data=!4m12!1m6!3m5!1s0x89b7a99024936455:0x28a861d45ec9a59c!2sM.A.K.+Remodeling+Services!8m2!3d38.741664!4d-76.9927529!3m4!1s0x89b7a99024936455:0x28a861d45ec9a59c!8m2!3d38.741664!4d-76.9927529"
            target="_blank"
          >
            <img className="footMapLogo" src={mapIcon} />
            <p className="addressDiv">
              10903 Indian Head Hwy, Suite 104 <br></br>Fort Washington, MD
              20744
            </p>
          </a>
        </div>

        {/* <div className="googleMapDiv">
          <GoogleMap />
        </div> */}
      </div>
    );
  }
}

export default Footer;
