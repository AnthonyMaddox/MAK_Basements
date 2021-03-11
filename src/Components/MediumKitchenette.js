import React, { Component } from "react";
import "../App.css";
import MediumKitchLB from "./Galleries/MediumKitchLB";
import FadeIn from "react-fade-in";

class MediumKitchenette extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">KITCHENETTES: MEDIUM</div>
        <FadeIn transitionDuration={2000} delay={1300}>
          <div className="quote">Everything You Need, Nothing You Don't</div>
        </FadeIn>
        <MediumKitchLB />
      </div>
    );
  }
}

export default MediumKitchenette;
