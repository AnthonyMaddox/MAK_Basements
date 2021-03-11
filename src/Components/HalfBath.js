import React, { Component } from "react";
import "../App.css";
import HalfBathLB from "./Galleries/HalfBathLB";
import FadeIn from "react-fade-in";
class HalfBath extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS: HALF</div>
        <FadeIn transitionDuration={2000} delay={1300}>
          <div className="quote">Only The Essentials</div>
        </FadeIn>
        <HalfBathLB />
      </div>
    );
  }
}

export default HalfBath;
