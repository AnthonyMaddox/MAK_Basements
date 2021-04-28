import React, { Component } from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import makA_rev from "../Images/makA_rev.png";

class Kitchenette extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">KITCHENETTES</div>
        <FadeIn
          className="subLinkDivPage"
          transitionDuration={1500}
          delay={500}
        >
          <img className="makA_rev" src={makA_rev} alt="makA" />
          <div className="quote">Establish Utility</div>
        </FadeIn>
        <div className="gallery">
          <div>
            <Link className="subLink" to="/kitchenettes/small">
              <img
                className="pic"
                src="https://picsum.photos/270/172"
                alt="small kitchenette"
              />
              <p className="selectorSub">Small Kitchenette</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/kitchenettes/medium">
              <img
                className="pic"
                src="https://picsum.photos/270/171"
                alt="medium kitchenette"
              />
              <p className="selectorSub">Medium Kitchenette</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/kitchenettes/large">
              <img
                className="pic"
                src="https://picsum.photos/270/170"
                alt="large kitchenette"
              />
              <p className="selectorSub">Large Kitchenette</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Kitchenette;
