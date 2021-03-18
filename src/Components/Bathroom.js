import React, { Component } from "react";
import { Link } from "react-router-dom";
import pow3 from "../Images/Bathroom/pow-3.jpg";
import pow_3_med from "../Images/Bathroom/pow-3-med.jpg";
import FadeIn from "react-fade-in";

class Bathroom extends Component {
  render() {
    return (
      <div >
        <div className="titleBar">BATHROOMS</div>
        <FadeIn className="subLinkDivPage" transitionDuration={2000} delay={500}>
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
                src="https://picsum.photos/270/171"
                alt="three quarter bath"
              />
              <p className="selectorSub">Three-Quarter-Bath</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/bathrooms/full">
              <img
                className="pic"
                src="https://picsum.photos/270/170"
                alt="full bath"
              />
              <p className="selectorSub">Full Bathroom</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Bathroom;
