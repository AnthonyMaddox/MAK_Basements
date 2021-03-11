import React, { Component } from "react";
import "../App.css";
import SmallKitchLB from "./Galleries/SmallKitchLB";
import FadeIn from "react-fade-in";

class SmallKitchenette extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">KITCHENETTES: SMALL</div>
        <FadeIn transitionDuration={2000} delay={1300}>
          <div className="quote">Refined Functionality</div>
        </FadeIn>
        <SmallKitchLB />
      </div>
    );
  }
}

export default SmallKitchenette;
