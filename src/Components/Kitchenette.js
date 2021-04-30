import React, { Component } from "react";
import { Link } from "react-router-dom";
import makA_rev from "../Images/makA_rev.png";
import mid_k_2_med from "../Images/Kitchen/mid-k-2-med.jpg";
import start_k_8_med from "../Images/Kitchen/start-k-8-med.jpg";
import top_k_4_med from "../Images/Kitchen/top-k-4-med.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

class Kitchenette extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">KITCHENETTES</div>
        <img className="makA_rev" src={makA_rev} alt="makA" />
        <div className="quote">Establish Utility</div>
        <div className="gallery">
          <div>
            <Link className="subLink" to="/kitchenettes/starter">
              <img
                className="pic"
                src={start_k_8_med}
                alt="small kitchenette"
              />
              <p className="selectorSub">Starter Kitchenette</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/kitchenettes/mid">
              <img className="pic" src={mid_k_2_med} alt="medium kitchenette" />
              <p className="selectorSub">Mid-Tier Kitchenette</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/kitchenettes/top">
              <img className="pic" src={top_k_4_med} alt="large kitchenette" />
              <p className="selectorSub">Top-Tier Kitchenette</p>
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

export default Kitchenette;
