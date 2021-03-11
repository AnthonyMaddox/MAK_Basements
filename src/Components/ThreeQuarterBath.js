import React, { Component } from "react";
import "../App.css";
import ThreeQuarterBathLB from "./Galleries/ThreeQuarterBathLB";
import FadeIn from "react-fade-in";

class ThreeQuarterBath extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS: THREE-QUARTER</div>
        <FadeIn transitionDuration={2000} delay={1300}>
          <div className="quote">The Perfect Fit</div>
        </FadeIn>
        <ThreeQuarterBathLB />
      </div>
    );
  }
}

export default ThreeQuarterBath;
