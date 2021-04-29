import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import LargeKitchLB from "./Galleries/LargeKitchLB";
import FadeIn from "react-fade-in";
import Phone from "./Phone";
import BackButton from "./BackButton";
import makA_rev from "../Images/makA_rev.png";

class LargeKitchenette extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">KITCHENETTES: TOP-TIER</div>
        <Link to="/kitchenettes">
          <BackButton BackButtonText="Back to Kitchenettes" />
        </Link>
        <FadeIn transitionDuration={2000} delay={700}>
        <img className="makA_rev" src={makA_rev} alt="makA" />
          <div className="quote">Luxury, No Exceptions</div>
        </FadeIn>
        <LargeKitchLB />
        <div className="descriptionDiv">
          WHAT DOES OUR TOP-TIER KITCHENTTE INCLUDE?
          <br></br>
          <br></br>Our Top-Tier kitchenette can be your all inclusive kitchen. It incorporates five plus cabinets with a range and/or oven. All essential appliances may be added as well as a seperate bar or island feature. 
          <br></br>
          <br></br>
          Don't make sacrifices and let your dream build your dream basement kitchen.
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

export default LargeKitchenette;
