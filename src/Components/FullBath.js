import React, { Component } from "react";
import "../App.css";
import FullBathLB from "./Galleries/FullBathLB";
import FadeIn from "react-fade-in";

class FullBath extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS: FULL</div>
        <FadeIn transitionDuration={2000} delay={1300}>
          <div className="quote">Complete Comfort</div>
        </FadeIn>
        <FullBathLB />
      </div>
    );
  }
}

export default FullBath;
