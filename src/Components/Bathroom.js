import React, { Component } from "react";
import { Link } from "react-router-dom";
import pow_3_med from "../Images/Bathroom/pow-3-med.jpg";
import mid_b_12_med from "../Images/Bathroom/mid-b-12-med.jpg";
import top_b_5_med from "../Images/Bathroom/top-b-5-med.jpg";
import makA_rev from "../Images/makA_rev.png";
import FadeIn from "react-fade-in";

class Bathroom extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS</div>
        <FadeIn
          className="subLinkDivPage"
          transitionDuration={1500}
          delay={500}
        >
          <img className="makA_rev" src={makA_rev} alt="makA" />
          <div className="quote">Maximize Convenience</div>
        </FadeIn>
        <div className="gallery">
          <div>
            <Link className="subLink" to="/bathrooms/half">
              <img className="pic" src={pow_3_med} alt="half bath" />
              <p className="selectorSub">Powder Room</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/bathrooms/three_quarter">
              <img
                className="pic"
                src={mid_b_12_med}
                alt="three quarter bath"
              />
              <p className="selectorSub">Mid-Tier Bath</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/bathrooms/full">
              <img className="pic" src={top_b_5_med} alt="full bath" />
              <p className="selectorSub">Top-Tier Bath</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Bathroom;
