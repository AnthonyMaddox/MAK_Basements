import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import MediumKitchLB from "./Galleries/MediumKitchLB";
import FadeIn from "react-fade-in";
import Phone from "./Phone";
import BackButton from "./BackButton";
import makA_rev from "../Images/makA_rev.png";

class MediumKitchenette extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">KITCHENETTES: MID-TIER</div>
        <Link to="/kitchenettes">
          <BackButton BackButtonText="Back to Kitchenettes" />
        </Link>
        <FadeIn transitionDuration={2000} delay={700}>
          <img className="makA_rev" src={makA_rev} alt="makA" />
          <div className="quote">Find The Right Balance</div>
        </FadeIn>
        <MediumKitchLB />
        <div className="descriptionDiv">
          WHAT DOES OUR MID-TIER KITCHENTTE INCLUDE?
          <br></br>
          <br></br>Our Mid-Tier kitchenette is similar to a traditional basement
          wet bar. It may have four to five cabinets with a sink and one to two
          appliances such as a refrigerator and microwave.
          <br></br>
          <br></br>
          Find the right balance for your comfort and entertainment needs.
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

export default MediumKitchenette;
