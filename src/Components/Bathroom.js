import React, { Component } from "react";
import { Link } from "react-router-dom";
import pow_3_med from "../Images/Bathroom/pow-3-med.jpg";
import mid_b_12_med from "../Images/Bathroom/mid-b-12-med.jpg";
import top_b_5_med from "../Images/Bathroom/top-b-5-med.jpg";
import makA_rev from "../Images/makA_rev.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

class Bathroom extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS</div>
        <img className="makA_rev" src={makA_rev} alt="makA" />
        <div className="quote">Maximize Convenience</div>
        <div className="gallery">
          <div>
            <Link className="subLink" to="/bathrooms/powder">
              <img className="pic" src={pow_3_med} alt="half bath" />
              <p className="selectorSub">Powder Room</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/bathrooms/mid">
              <img
                className="pic"
                src={mid_b_12_med}
                alt="three quarter bath"
              />
              <p className="selectorSub">Mid-Tier Bath</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/bathrooms/top">
              <img className="pic" src={top_b_5_med} alt="full bath" />
              <p className="selectorSub">Top-Tier Bath</p>
            </Link>
          </div>
        </div>
        <div className="phoneStaticDiv">
          <div className="phoneDiv">
            <p className="phonePara">
              Give us a call to schedule your{" "}
              <span className="inHome">In-Home-Consultation!</span>
            </p>
            <a className="phoneLink" href="tel:240-766-4873">
              <FontAwesomeIcon className="phoneIcon" icon="phone" />
              (240) 766-4873
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Bathroom;
