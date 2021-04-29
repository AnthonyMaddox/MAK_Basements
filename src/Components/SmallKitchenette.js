import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import SmallKitchLB from "./Galleries/SmallKitchLB";
import FadeIn from "react-fade-in";
import Phone from "./Phone";
import BackButton from "./BackButton";
import makA_rev from "../Images/makA_rev.png";

class SmallKitchenette extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">KITCHENETTES: STARTER</div>
        <Link className="" to="/kitchenettes">
          <BackButton BackButtonText="Back to Kitchenettes" />
        </Link>
        <FadeIn transitionDuration={2000} delay={700}>
          <img className="makA_rev" src={makA_rev} alt="makA" />
          <div className="quote">Refined Functionality</div>
        </FadeIn>
        <SmallKitchLB />
        <div className="descriptionDiv">
          WHAT IS A STARTER KITCHENETTE?
          <br></br>
          <br></br>A starter kitchenette encompasses two to three cabinets with
          a sink. It may also include one small appliance such as a microwave or
          mini fridge.
          <br></br>
          <br></br>
          Refine every corner in your basement to maximize its functionality.
          <br></br>
          <br></br>
          We provide consultation with design and product selection:
          <ul>
            <li className="dList">Hand Picked Cabinetry</li>
            <li className="dList">Countertops</li>
            <li className="dList">Appliances</li>
          </ul>
        </div>
        <Phone />
      </div>
    );
  }
}

export default SmallKitchenette;
