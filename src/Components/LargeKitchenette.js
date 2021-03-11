import React, { Component } from "react";
import "../App.css";
import LargeKitchLB from "./Galleries/LargeKitchLB";
import FadeIn from "react-fade-in";

class LargeKitchenette extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">KITCHENETTES: LARGE</div>
        <FadeIn transitionDuration={2000} delay={1300}>
          <div className="quote">Luxury With No Exceptions</div>
        </FadeIn>
        <LargeKitchLB />
      </div>
    );
  }
}

export default LargeKitchenette;
